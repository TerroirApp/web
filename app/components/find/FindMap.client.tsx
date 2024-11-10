import type { Position } from "~/types/Position";
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import { MapContainer, TileLayer } from "react-leaflet";
import { MapDataPoints } from "~/components/find/MapDataPoints";
import { MapFilters } from "~/components/find/MapFilters";
import styles from "./FindMap.module.css";

export function FindMap({ userPosition }: { userPosition: Position }) {
    return (
        <div className={styles.container}>
            <p>
                Current position: lat:{userPosition.lat} lon:{userPosition.lon}
            </p>
            <MapFilters />
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
