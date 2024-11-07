import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link to="/" className="text-2xl font-bold text-green-600">
                        Locavore
                    </Link>

                    <div className="hidden md:flex space-x-8">
                        <Link
                            to="/"
                            className="text-gray-600 hover:text-green-600"
                        >
                            Acceuil
                        </Link>
                        <Link
                            to="/map"
                            className="text-gray-600 hover:text-green-600"
                        >
                            Trouver un producteur
                        </Link>
                    </div>

                    <button
                        className="md:hidden"
                        type="button"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? (
                            <X className="h-6 w-6 text-gray-600" />
                        ) : (
                            <Menu className="h-6 w-6 text-gray-600" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link
                            to="/"
                            className="block px-3 py-2 text-gray-600 hover:text-green-600"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Acceuil
                        </Link>
                        <Link
                            to="/map"
                            className="block px-3 py-2 text-gray-600 hover:text-green-600"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Trouver un producteur
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
