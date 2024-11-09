import { useQuery } from "@tanstack/react-query";
import type { FindProducerResponse } from "~/types/Producer";

/**
 * Query hook fetching all the producers data
 */
export function useAllProducers() {
    return useQuery({
        queryKey: ["producers", "all"],
        queryFn: async () => {
            const toQuery = new URL(
                "https://www.fraisetlocal.fr/api/explore/v2.1/catalog/datasets/flux-toutes-plateformes/exports/geojson"
            );
            toQuery.searchParams.set("limit", "25000");
            toQuery.searchParams.set("order_by", "categorie");
            toQuery.searchParams.set(
                "select",
                "identifiant,nom,adresse,categorie,geolocalisation,nom_de_la_plateforme,familles_des_produits,familles_des_produits_restreintes"
            );

            const response = await fetch(toQuery.toString());
            const data = (await response.json()) as {
                features: FindProducerResponse[];
            };

            const producers = data.features
                // Filter out all the data without coordinates
                .filter((feature) => feature?.geometry?.coordinates?.[0] ?? 0)
                // Map the data to a more usable format
                .map((feature) => ({
                    id: feature.properties.identifiant,
                    name: feature.properties.nom,
                    address: feature.properties.adresse,
                    category: feature.properties.categorie,
                    platformName: feature.properties.nom_de_la_plateforme,
                    productFamilies: feature.properties.familles_des_produits,
                    restrictedProductFamilies:
                        feature.properties.familles_des_produits_restreintes,
                    position: {
                        lat: feature.geometry.coordinates[1],
                        lon: feature.geometry.coordinates[0],
                    },
                }));
            console.log("Founded producers", producers.length);

            // Get all the unique categories and product families (with the count of producer each time)
            const { categories, productFamilies } = producers.reduce(
                (acc, producer) => {
                    // Append categories
                    acc.categories.set(
                        producer.category,
                        (acc.categories.get(producer.category) ?? 0) + 1
                    );
                    // Append product families
                    for (const family of producer.productFamilies) {
                        acc.productFamilies.set(
                            family,
                            (acc.productFamilies.get(family) ?? 0) + 1
                        );
                    }
                    return acc;
                },
                {
                    categories: new Map<string, number>(),
                    productFamilies: new Map<string, number>(),
                }
            );

            // Return all the computed data
            return { producers, categories, productFamilies };
        },
    });
}
