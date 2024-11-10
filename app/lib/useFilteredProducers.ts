import { useQuery } from "@tanstack/react-query";
import { useAtomValue } from "jotai";
import { useMemo } from "react";
import { useAllProducers } from "~/lib/useAllProducers";
import { producerFiltersAtom } from "~/store/filtersAtom";

export function useFilteredProducers() {
    const filter = useAtomValue(producerFiltersAtom);
    const filterHash = useMemo(() => {
        return btoa(JSON.stringify(filter));
    }, [filter]);
    const { data } = useAllProducers();

    return useQuery({
        enabled: !!data,
        queryKey: ["producers", "filtered", filterHash],
        queryFn: async () => {
            if (!data?.producers) {
                return [];
            }

            // Filter per categories if needed
            let filteredProducers = data.producers;
            const filterCategories = filter.categories;
            if (filterCategories) {
                filteredProducers = filteredProducers.filter((producer) =>
                    filterCategories.includes(producer.category)
                );
            }

            // Filter per families if needed
            const filterFamilies = filter.families;
            if (filterFamilies) {
                filteredProducers = filteredProducers.filter((producer) =>
                    producer.productFamilies.some((family) =>
                        filterFamilies.includes(family)
                    )
                );
            }

            // Return our final filtered producers
            return filteredProducers;
        },
    });
}
