import { atom } from "jotai";
import type { Position } from "~/types/Position";

/**
 * Atom for the currently selected user position
 */
export const positionAtom = atom<Position | null>(null);
