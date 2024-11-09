export type FindProducerResponse = {
    type: string;
    geometry: {
        type: "Point";
        coordinates: [number, number];
    };
    properties: {
        identifiant: string;
        nom: string;
        adresse: string;
        categorie: string;
        nom_de_la_plateforme: string;
        familles_des_produits: Array<string>;
        familles_des_produits_restreintes?: string;
    };
};
