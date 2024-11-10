import { useLeafletContext } from "@react-leaflet/core";
import { useEffect, useMemo } from "react";
import { useFilteredProducers } from "~/lib/useFilteredProducers";
import "leaflet.markercluster/dist/leaflet.markercluster.js";
import { Marker as LeafletMarker } from "leaflet";
// import "@types/leaflet.markercluster";

/**
 * Place all the producer data points on the map
 * @constructor
 */
export function MapDataPoints() {
    const { data: producers } = useFilteredProducers();
    const { map } = useLeafletContext();

    // On mount, create the initial markers cluster layer
    const markerCluster = useMemo(() => {
        return L.markerClusterGroup({}).addTo(map);
    }, [map]);

    // Every time map or data changes, add the marker to the map
    useEffect(() => {
        if (!producers) {
            return;
        }
        // Clear the previous layers
        markerCluster.clearLayers();

        // Create each marker on the map
        const markers = producers.map((producer) => {
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
        // todo: types from import "@types/leaflet.markercluster"; to resolve
        markerCluster.addLayers(markers);

        // Remove the markers when the component is unmounted
        // return () => {
        //     markerCluster.clearLayers();
        // };
    }, [producers, markerCluster]);

    return <></>;
}
