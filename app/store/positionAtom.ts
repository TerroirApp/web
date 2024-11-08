import { atom } from "jotai";

/**
 * Atom for the currently selected user position
 */
export const positionAtom = atom<{ lat: number; lon: number } | null>(null);
