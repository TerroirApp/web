import { Menu, X } from "lucide-react";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Founders } from "./components/Founders";
import { Hero } from "./components/Hero";
import { LocaMap } from "./components/LocaMap";

function App() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <Link
                            to="/"
                            className="text-2xl font-bold text-green-600"
                        >
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
                            <a
                                href="#about"
                                className="text-gray-600 hover:text-green-600"
                            >
                                A propos
                            </a>
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
                                Home
                            </Link>
                            <Link
                                to="/map"
                                className="block px-3 py-2 text-gray-600 hover:text-green-600"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Find Producers
                            </Link>
                            <a
                                href="#about"
                                className="block px-3 py-2 text-gray-600 hover:text-green-600"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About
                            </a>
                        </div>
                    </div>
                )}
            </nav>

            {/* Main Content */}
            <Routes>
                <Route
                    path="/"
                    element={
                        <main>
                            <Hero />
                            <Founders />
                        </main>
                    }
                />
                <Route path="/map" element={<LocaMap />} />
            </Routes>
        </div>
    );
}

export default App;
