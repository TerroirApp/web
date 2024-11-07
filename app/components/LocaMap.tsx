import {
    ChevronLeft,
    Filter,
    Mail,
    MapPin,
    MapPinned,
    Phone,
    Search,
} from "lucide-react";
import React, { useState } from "react";

export function LocaMap() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="h-screen flex">
            {/* Search and Filters Panel */}
            <div className="w-96 bg-white shadow-lg z-10 p-6 overflow-y-auto">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        Découvrir
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Trouvez des producteurs locaux près de chez vous
                    </p>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Rechercher des producteurs..."
                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                        <Search className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
                    </div>
                </div>

                <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                        <Filter className="w-5 h-5 text-green-600" />
                        <h3 className="font-semibold text-gray-900">Filtres</h3>
                    </div>
                    <div className="space-y-3">
                        {[
                            "Légumes",
                            "Fruits",
                            "Produits Laitiers",
                            "Viande",
                            "Miel",
                        ].map((category) => (
                            <label
                                key={category}
                                className="flex items-center gap-2 cursor-pointer group"
                            >
                                <input
                                    type="checkbox"
                                    className="w-5 h-5 rounded text-green-600 focus:ring-green-500 cursor-pointer"
                                />
                                <span className="text-gray-700 group-hover:text-green-600 transition-colors">
                                    {category}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>

                <div className="border-t pt-8">
                    <h3 className="font-semibold text-gray-900 mb-4">
                        Producteurs à proximité
                    </h3>
                    <div className="space-y-4">
                        {[
                            {
                                name: "Ferme de la Vallée Verte",
                                type: "Légumes et fruits bio",
                                distance: "2.3 km",
                            },
                            {
                                name: "Les Ruches d'Or",
                                type: "Miel et produits apicoles",
                                distance: "3.1 km",
                            },
                            {
                                name: "Fromagerie du Terroir",
                                type: "Fromages fermiers",
                                distance: "4.5 km",
                            },
                        ].map((producer) => (
                            <div
                                key={producer.name}
                                className="p-4 bg-green-50 rounded-lg cursor-pointer hover:bg-green-100 transition-all hover:shadow-md"
                                onClick={() => setIsSidebarOpen(true)}
                            >
                                <div className="flex items-start gap-3">
                                    <MapPin className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-medium text-gray-900">
                                            {producer.name}
                                        </h4>
                                        <p className="text-sm text-gray-600">
                                            {producer.type}
                                        </p>
                                        <p className="text-sm text-green-600 font-medium">
                                            {producer.distance}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Map Area */}
            <div className="flex-1 bg-green-100 relative">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b')] bg-cover bg-center opacity-50" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-sm px-6 py-4 rounded-lg shadow-lg">
                        <p className="text-gray-600 font-medium">
                            Intégration de la carte en cours...
                        </p>
                    </div>
                </div>
            </div>

            {/* Producer Details Sidebar */}
            {isSidebarOpen && (
                <div className="w-96 bg-white shadow-lg z-20 overflow-y-auto">
                    <div className="sticky top-0 bg-white z-30 p-6 border-b">
                        <button
                            type="button"
                            onClick={() => setIsSidebarOpen(false)}
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
                                <span>2.3 km de votre position</span>
                            </div>
                            <p className="text-green-600">
                                Ouvert aujourd'hui · 9h00-18h00
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mb-2">
                            Ferme de la Vallée Verte
                        </h2>
                        <p className="text-green-600 font-medium mb-6">
                            Certifié Agriculture Biologique
                        </p>

                        <div className="space-y-8">
                            <div>
                                <h3 className="font-semibold text-gray-900 mb-3">
                                    À propos
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Exploitation familiale spécialisée dans les
                                    légumes et fruits biologiques. Nous
                                    pratiquons une agriculture durable depuis
                                    1985, en harmonie avec la nature.
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
