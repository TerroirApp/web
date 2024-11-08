export type Producer = {
    id: number;
    name: string;
    description: string;

    category: "producer" | "selling-point";
    productTypes?: string;
    sellingPointType?: "sharedLocked" | "producerMarket" | "" | "other";

    address: string;
    postalCode: string;
    communalInseeCode: string;
    gpsCoordinates: string;

    platformName: string;
    platformUrl: string;
};
