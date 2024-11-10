import { useCallback, useMemo } from "react";
import "leaflet.markercluster/dist/leaflet.markercluster.js";
import { useAtom } from "jotai";
import { useAllProducers } from "~/lib/useAllProducers";
import { producerFiltersAtom } from "~/store/filtersAtom";

/**
 * Filters to apply on the map
 * @constructor
 */
export function MapFilters() {
    const { data } = useAllProducers();
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
                    <CategoryCheckbox category={category} key={category} />
                ))}
            </ul>
            <h4>Familles de produits</h4>
            <ul>
                {productFamilies.map((family) => (
                    <ProductFamiliesCheckbox family={family} key={family} />
                ))}
            </ul>
        </div>
    );
}

function CategoryCheckbox({ category }: { category: string }) {
    const [filters, setFilters] = useAtom(producerFiltersAtom);

    const isChecked = useMemo(() => {
        return filters.categories?.includes(category) ?? false;
    }, [filters?.categories, category]);

    const setChecked = useCallback(
        (isChecked: boolean) => {
            setFilters((prev) => {
                const newCategories = isChecked
                    ? [...(prev.categories ?? []), category]
                    : (prev.categories?.filter((c) => c !== category) ?? []);
                return {
                    ...prev,
                    categories: newCategories.length
                        ? newCategories
                        : undefined,
                };
            });
        },
        [setFilters, category]
    );

    return (
        <li>
            <input
                type="checkbox"
                id={category}
                name={category}
                checked={isChecked}
                onChange={({ target }) => setChecked(target.checked)}
            />
            <label htmlFor={category}>{category}</label>
        </li>
    );
}

function ProductFamiliesCheckbox({ family }: { family: string }) {
    const [filters, setFilters] = useAtom(producerFiltersAtom);

    const isChecked = useMemo(() => {
        return filters.families?.includes(family) ?? false;
    }, [filters?.families, family]);

    const setChecked = useCallback(
        (isChecked: boolean) => {
            setFilters((prev) => {
                const newFamilies = isChecked
                    ? [...(prev.families ?? []), family]
                    : (prev.families?.filter((c) => c !== family) ?? []);
                return {
                    ...prev,
                    families: newFamilies.length ? newFamilies : undefined,
                };
            });
        },
        [setFilters, family]
    );

    return (
        <li>
            <input
                type="checkbox"
                id={family}
                name={family}
                checked={isChecked}
                onChange={({ target }) => setChecked(target.checked)}
            />
            <label htmlFor={family}>{family}</label>
        </li>
    );
}
