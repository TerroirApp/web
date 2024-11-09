import type { Position } from "~/types/Position";
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import { useLeafletContext } from "@react-leaflet/core";
import L, { Marker as LeafletMarker } from "leaflet";
import "leaflet.markercluster/dist/leaflet.markercluster.js";
import { useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { useAllProducers } from "~/lib/useAllProducers";
import styles from "./FindMap.module.css";

export function FindMap({ userPosition }: { userPosition: Position }) {
    return (
        <div className={styles.container}>
            <p>
                Current position: lat:{userPosition.lat} lon:{userPosition.lon}
            </p>
            <MapContainer
                center={[userPosition.lat, userPosition.lon]}
                minZoom={7}
                zoom={11}
                maxZoom={15}
                scrollWheelZoom={true}
                className={styles.map}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MapDataPoints />
            </MapContainer>
        </div>
    );
}

function MapDataPoints() {
    const { data } = useAllProducers();
    const { map } = useLeafletContext();

    // Every time map or data changes, add the marker to the map
    useEffect(() => {
        if (!data?.producers || !map) {
            return;
        }

        console.log("Categories", {
            categories: data.categories,
            families: data.productFamilies,
        });

        // Create each marker on the map
        const markers = data.producers.map((producer) => {
            // Create the marker and add it to the map
            // todo: Should also add a simple hover info + on click detection to open the details panel
            return new LeafletMarker(
                [producer.position.lat, producer.position.lon],
                {
                    title: producer.name,
                    riseOnHover: true,
                }
            );
        });
        // Create our marker cluster group and add it to the map
        L.markerClusterGroup({}).addLayers(markers).addTo(map);

        // Create our feature group and add it to the map
        // const group = new FeatureGroup(markers).addTo(map);
        // map.fitBounds(group.getBounds());
    }, [data, map]);

    return <>test</>;
}
