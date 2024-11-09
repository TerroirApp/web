import { useQuery } from "@tanstack/react-query";
import type { FindProducerResponse } from "~/types/Producer";

export function useAllData() {
    return useQuery({
        queryKey: ["producer", "data"],
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

            // Filter out all the data wihout coordinates
            return data.features.filter(
                (feature) => feature?.geometry?.coordinates?.[0] ?? 0
            );
        },
    });
}
