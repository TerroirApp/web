import { ArrowRight, Sprout } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export function Hero() {
    return (
        <div className="relative overflow-hidden bg-gradient-to-b from-green-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1 text-left">
                        <div className="flex items-center gap-3 mb-6">
                            <Sprout className="w-10 h-10 text-green-600" />
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                                <span className="text-green-600">Loca</span>vore
                            </h1>
                        </div>
                        <p className="text-xl md:text-2xl text-gray-600 mb-6 font-light leading-relaxed">
                            Locavore est un annuaire cartographié promouvant les
                            autres schémas de distribution que ceux que l'on
                            connaît en facilitant l'accès aux établissements
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                to="/map"
                                className="inline-flex items-center justify-center bg-green-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-green-700 transition-colors group"
                            >
                                Trouver des producteurs
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <a
                                href="#about"
                                className="inline-flex items-center justify-center px-8 py-3 rounded-full text-lg font-medium border-2 border-green-600 text-green-700 hover:bg-green-50 transition-colors"
                            >
                                En savoir plus
                            </a>
                        </div>
                    </div>
                    <div className="flex-1 relative">
                        <div className="aspect-square rounded-full overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1542838132-92c53300491e"
                                alt="Local market"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 max-w-xs">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                                <p className="text-sm font-medium text-gray-900">
                                    Impact Local
                                </p>
                            </div>
                            <p className="text-sm text-gray-600">
                                Plus de 500 producteurs locaux déjà référencés
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#dcfce7_0%,_transparent_60%)] opacity-70" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_#dcfce7_0%,_transparent_60%)] opacity-70" />
            </div>
        </div>
    );
}
