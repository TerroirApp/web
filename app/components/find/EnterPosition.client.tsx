import { useMutation } from "@tanstack/react-query";
import { useSetAtom } from "jotai";
import { useMemo, useState } from "react";
import { positionAtom } from "~/store/positionAtom";
import type { Position } from "~/types/Position";
import styles from "./EnterPosition.module.css";

export function EnterPosition() {
    /**
     * Check if the browser can request the user position
     */
    const canRequestPosition = useMemo(() => {
        return navigator !== undefined && navigator.geolocation !== undefined;
    }, []);

    return (
        <div className={styles.container}>
            <h2>Trouvons un producteur proche de chez toi</h2>
            {canRequestPosition && (
                <>
                    <RequestBrowserPosition />
                    <p> - OU -</p>
                </>
            )}
            <PostalCodePosition />
        </div>
    );
}

function RequestBrowserPosition() {
    const setPosition = useSetAtom(positionAtom);
    /**
     * Request the current user position
     */
    const {
        mutate: requestBrowserPosition,
        isPending: isRequestingBrowserLocation,
        error,
    } = useMutation({
        mutationKey: ["position", "browser-request"],
        mutationFn: async () => {
            if (!navigator?.geolocation) {
                return null;
            }

            // Request the position
            const position = await new Promise<GeolocationPosition>(
                (resolve, reject) => {
                    navigator.geolocation.getCurrentPosition(resolve, reject);
                }
            );

            // Set the position in the atom
            setPosition({
                lat: position.coords.latitude,
                lon: position.coords.longitude,
            });
        },
    });

    return (
        <>
            <p>
                Autorise <strong>TerroirApp</strong> à acceder a la position de
                ton appareil
            </p>
            <button
                onClick={() => requestBrowserPosition()}
                type={"button"}
                disabled={isRequestingBrowserLocation}
            >
                Partager ma position
            </button>
            {error && <p className={styles.error}>Erreur: {error.message}</p>}
        </>
    );
}

function PostalCodePosition() {
    const [postalCode, setPostalCode] = useState<string>("");
    const setPosition = useSetAtom(positionAtom);

    /**
     * Find the postal code from the current user position
     */
    const {
        mutate: getPostalCodePosition,
        isPending: isFetchingPosition,
        error,
    } = useMutation({
        mutationKey: ["position", "from-postal-code"],
        mutationFn: async ({ postalCode }: { postalCode: string }) => {
            // Normalise the postal code (5 digits, if only two provided, append 0 to the right)
            const normalisedPostalCode = Number.parseInt(postalCode)
                .toString()
                .padEnd(5, "0");

            // Query the open data
            const toQueryUrl = new URL(
                "https://data.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-postal-code@public/records"
            );
            toQueryUrl.searchParams.set(
                "select",
                "postal_code,coordinates,country_code"
            );
            toQueryUrl.searchParams.set(
                "where",
                `country_code="FR" AND postal_code="${normalisedPostalCode}"`
            );
            toQueryUrl.searchParams.set("limit", "1");
            const response = await fetch(toQueryUrl.toString());
            if (!response.ok) {
                throw new Error("Failed to fetch postal code data");
            }

            // Parse the response
            const result = await response.json();
            if (result.results.length === 0) {
                throw new Error("No postal code found");
            }

            // Extract the coordinates
            const { coordinates } = result.results[0];

            // Set the position in the atom
            setPosition(coordinates as Position);
        },
    });

    return (
        <>
            <p>Entre ton code postal ci-dessous</p>
            <input
                type={"number"}
                value={postalCode ?? ""}
                onChange={(e) => setPostalCode(e.target.value)}
                disabled={isFetchingPosition}
                placeholder={"Code postal..."}
            />
            <button
                onClick={() => getPostalCodePosition({ postalCode })}
                type={"button"}
                disabled={isFetchingPosition}
            >
                Valider
            </button>
            {error && <p className={styles.error}>Erreur: {error.message}</p>}
        </>
    );
}
