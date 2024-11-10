import { atom } from "jotai";

type ProducerFilter = {
    categories?: string[];
    families?: string[];
};

/**
 * Atom for the current producer filters
 */
export const producerFiltersAtom = atom<ProducerFilter>({});
