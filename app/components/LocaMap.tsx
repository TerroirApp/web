import {
    ChevronLeft,
    Filter,
    Mail,
    MapPin,
    MapPinned,
    Phone,
    Search,
} from "lucide-react";
import { useState } from "react";
import { ClientOnly } from "remix-utils/client-only";
import { LeafletMap } from "~/components/map/Leaflet.client";
import { useProducerData } from "~/lib/useProducerData";
import type { Producer } from "~/types/Producer";
import styles from "./LocaMap.module.css";

export function LocaMap() {
    const [selectedProducer, setSelectedProducer] = useState<Producer | null>(
        null
    );
    const { data: producers } = useProducerData();

    if (!producers) {
        return <div>Chargement...</div>;
    }

    return (
        <div className={styles.container}>
            {/* Search and Filters Panel */}
            <div className={styles.sidebar}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Découvrir</h2>
                    <p className={styles.subtitle}>
                        Trouvez des producteurs locaux près de chez vous
                    </p>
                    <div className={styles.searchContainer}>
                        <input
                            type="text"
                            placeholder="Rechercher des producteurs..."
                            className={styles.searchInput}
                        />
                        {/*focus:ring-2 focus:ring-green-500*/}
                        <Search className={styles.searchIcon} />
                    </div>
                </div>

                <div className={styles.filterSection}>
                    <div className={styles.filterHeader}>
                        <Filter className="w-5 h-5 text-green-600" />
                        <h3 className={styles.filterTitle}>Filtres</h3>
                    </div>
                    <div className={styles.filterList}>
                        {[
                            "Légumes",
                            "Fruits",
                            "Produits Laitiers",
                            "Viande",
                            "Miel",
                        ].map((category) => (
                            <label
                                key={category}
                                className={styles.filterLabel}
                            >
                                <input
                                    type="checkbox"
                                    className={styles.checkbox}
                                />
                                <span>{category}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <div className={styles.producerList}>
                    <h3 className={styles.producerListTitle}>
                        Producteurs à proximité
                    </h3>
                    {producers.map((producer) => (
                        <div
                            key={producer.name}
                            className={styles.producerCard}
                            onClick={() => setSelectedProducer(producer)}
                        >
                            <div className={styles.producerInfo}>
                                <MapPin className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className={styles.producerName}>
                                        {producer.name}
                                    </h4>
                                    <p className={styles.producerType}>
                                        {producer.productTypes}
                                    </p>
                                    <p className={styles.producerAddress}>
                                        {producer.address}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Map Area */}
            <div className={styles.mapContainer}>
                <ClientOnly fallback={<>Loading...</>}>
                    {() => <LeafletMap />}
                </ClientOnly>
            </div>

            {/* Producer Details Sidebar */}
            {selectedProducer && (
                <div className="w-full lg:w-96 bg-white shadow-lg z-20 overflow-y-auto transition-transform duration-300 ease-in-out">
                    <div className="sticky top-0 bg-white z-30 p-6 border-b">
                        <button
                            type="button"
                            onClick={() => setSelectedProducer(null)}
                            className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors"
                        >
                            <ChevronLeft className="w-5 h-5" />
                            <span>Retour aux résultats</span>
                        </button>
                    </div>

                    <div className="p-6">
                        <img
                            src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854"
                            alt="Ferme de la Vallée Verte"
                            className="w-full h-48 object-cover rounded-lg mb-6"
                        />

                        <div className="bg-green-50 rounded-lg p-4 mb-6">
                            <div className="flex items-center gap-2 text-green-700 font-medium mb-1">
                                <MapPinned className="w-5 h-5" />
                                <span>{selectedProducer.address}</span>
                            </div>
                            <p className="text-green-600">
                                Ouvert aujourd'hui · 9h00-18h00
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mb-2">
                            {selectedProducer.name}
                        </h2>
                        <p className="text-green-600 font-medium mb-6">
                            {selectedProducer.productTypes}
                        </p>

                        <div className="space-y-8">
                            <div>
                                <h3 className="font-semibold text-gray-900 mb-3">
                                    À propos
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {selectedProducer.description}
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-gray-900 mb-3">
                                    Nos produits
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        "Tomates",
                                        "Salades",
                                        "Carottes",
                                        "Pommes",
                                        "Fraises",
                                    ].map((product) => (
                                        <span
                                            key={product}
                                            className="px-3 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-medium"
                                        >
                                            {product}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="font-semibold text-gray-900 mb-3">
                                    Contact
                                </h3>
                                <div className="space-y-4">
                                    <a
                                        href="tel:+33555123456"
                                        className="flex items-center gap-3 text-gray-600 hover:text-green-600 transition-colors"
                                    >
                                        <Phone className="w-5 h-5" />
                                        <span>05 55 12 34 56</span>
                                    </a>
                                    <a
                                        href="mailto:contact@valleeverte.fr"
                                        className="flex items-center gap-3 text-gray-600 hover:text-green-600 transition-colors"
                                    >
                                        <Mail className="w-5 h-5" />
                                        <span>contact@valleeverte.fr</span>
                                    </a>
                                    <p className="flex items-start gap-3 text-gray-600">
                                        <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                                        <span>
                                            1234 Route de la Vallée
                                            <br />
                                            87000 Limoges
                                        </span>
                                    </p>
                                </div>
                            </div>

                            <button
                                className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                                type="button"
                            >
                                <Mail className="w-5 h-5" />
                                Contacter le producteur
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
