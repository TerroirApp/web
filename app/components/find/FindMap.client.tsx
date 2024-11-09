import type { Position } from "~/types/Position";
import "leaflet/dist/leaflet.css";
import { useLeafletContext } from "@react-leaflet/core";
import { FeatureGroup, Marker as LeafletMarker } from "leaflet";
import { Home } from "lucide-react";
import { useEffect } from "react";
import {
    MapContainer,
    Marker,
    Popup,
    TileLayer,
    useMapEvents,
} from "react-leaflet";
import { useAllData } from "~/lib/useAllData";
import styles from "./FindMap.module.css";

export function FindMap({ userPosition }: { userPosition: Position }) {
    return (
        <div className={styles.container}>
            <p>
                Current position: lat:{userPosition.lat} lon:{userPosition.lon}
            </p>
            <MapContainer
                center={[userPosition.lat, userPosition.lon]}
                zoom={11}
                scrollWheelZoom={true}
                className={styles.map}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker
                    position={[userPosition.lat, userPosition.lon]}
                    title={"Vous recherchez ici"}
                >
                    <Popup>
                        <Home size={24} /> Vous recherchez ici
                    </Popup>
                </Marker>
                <MapDataPoints />
            </MapContainer>
        </div>
    );
}

function MapDataPoints() {
    const { data } = useAllData();
    const { map } = useLeafletContext();

    // Every time map or data changes, add the marker to the map
    useEffect(() => {
        if (!data || !map) {
            return;
        }

        // Create each marker on the map
        const markers = data.slice(0, 50).map((producer) => {
            // Create the marker and add it to the map
            const [lon, lat] = producer?.geometry?.coordinates ?? [0, 0];
            return new LeafletMarker([lat, lon], {
                title: producer.properties.nom,
            });
        });

        // Create our feature group and add it to the map
        const group = new FeatureGroup(markers).addTo(map);
        map.fitBounds(group.getBounds());
    }, [data, map]);

    return <>test</>;
}
