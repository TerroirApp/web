import { useMemo } from "react";
import "leaflet.markercluster/dist/leaflet.markercluster.js";
import { useSetAtom } from "jotai";
import { useAllProducers } from "~/lib/useAllProducers";
import { producerFiltersAtom } from "~/store/filtersAtom";

/**
 * Filters to apply on the map
 * @constructor
 */
export function MapFilters() {
    const { data } = useAllProducers();
    const setFilters = useSetAtom(producerFiltersAtom);

    const { categories, productFamilies } = useMemo(() => {
        if (!data?.categories) {
            return { categories: [], productFamilies: [] };
        }

        // We got the map of categories and product families in the output, we only need the keys
        const categories = Array.from(data.categories);
        const productFamilies = Array.from(data.productFamilies);

        return { categories, productFamilies };
    }, [data?.productFamilies, data?.categories]);

    return (
        <div>
            <h3>Filtrer</h3>
            <h4>Categories</h4>
            <ul>
                {categories.map((category) => (
                    <li key={category}>
                        <input
                            type="checkbox"
                            id={category}
                            name={category}
                            onChange={({ target }) => {
                                // todo: cleaner way to sync atom with checkboxes
                                const isChecked = target.checked;
                                const newCategories = isChecked
                                    ? [...(categories ?? []), category]
                                    : categories?.filter((c) => c !== category);
                                setFilters((prev) => ({
                                    ...prev,
                                    categories: newCategories.length
                                        ? newCategories
                                        : undefined,
                                }));
                            }}
                        />
                        <label htmlFor={category}>{category}</label>
                    </li>
                ))}
            </ul>
            <h4>Familles de produits</h4>
            <ul>
                {productFamilies.map((family) => (
                    <li key={family}>
                        <input
                            type="checkbox"
                            id={family}
                            name={family}
                            onChange={({ target }) => {
                                // todo: cleaner way to sync atom with checkboxes
                                const isChecked = target.checked;
                                setFilters((prev) => {
                                    const newFamilies = isChecked
                                        ? [...(prev.families ?? []), family]
                                        : prev.families?.filter(
                                              (f) => f !== family
                                          );
                                    return {
                                        ...prev,
                                        families: newFamilies.length
                                            ? newFamilies
                                            : undefined,
                                    };
                                });
                            }}
                        />
                        <label htmlFor={family}>{family}</label>
                    </li>
                ))}
            </ul>
        </div>
    );
}
