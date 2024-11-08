import { useQuery } from "@tanstack/react-query";
import type { Producer } from "~/types/Producer";

export function useProducerData() {
    return useQuery({
        queryKey: ["producer", "geoloc-data"],
        queryFn: async () => {
            const producers: Producer[] = [];

            // Add some mocked data
            producers.push({
                id: 1,
                name: "La ferme de la Rivière",
                description: "Ferme de production laitière",
                category: "producer",
                productTypes: "Lait",
                address: "La ferme de la Rivière",
                postalCode: "50160",
                communalInseeCode: "50160",
                gpsCoordinates: "48.989, -1.234",
                platformName: "La ferme de la Rivière",
                platformUrl: "https://lafermedelariviere.fr",
            });
            producers.push({
                id: 2,
                name: "La ferme de la Prairie",
                description: "Ferme de production laitière",
                category: "producer",
                productTypes: "Lait",
                address: "La ferme de la Prairie",
                postalCode: "50160",
                communalInseeCode: "50160",
                gpsCoordinates: "48.989, -1.234",
                platformName: "La ferme de la Prairie",
                platformUrl: "https://lafermedelaprairie.fr",
            });
            producers.push({
                id: 3,
                name: "La ferme de la Montagne",
                description: "Ferme de production laitière",
                category: "producer",
                productTypes: "Lait",
                address: "La ferme de la Montagne",
                postalCode: "50160",
                communalInseeCode: "50160",
                gpsCoordinates: "48.989, -1.234",
                platformName: "La ferme de la Montagne",
                platformUrl: "https://lafermedelamontagne.fr",
            });
            producers.push({
                id: 4,
                name: "La ferme de la Plaine",
                description: "Ferme de production laitière",
                category: "producer",
                productTypes: "Lait",
                address: "La ferme de la Plaine",
                postalCode: "50160",
                communalInseeCode: "50160",
                gpsCoordinates: "48.989, -1.234",
                platformName: "La ferme de la Plaine",
                platformUrl: "https://lafermedelaplaine.fr",
            });

            return producers;
        },
    });
}
