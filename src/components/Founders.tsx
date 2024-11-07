import { Heart, Leaf, Users } from "lucide-react";
import React from "react";

export function Founders() {
    const founders = [
        {
            name: "Titouan Du Jonchay",
            role: "Co-Fondateur & CEO",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
            bio: "Passionné par l'agriculture durable et les systèmes alimentaires locaux.",
        },
        {
            name: "Quentin Nivelais",
            role: "Co-Fondateur & CTO",
            image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef",
            bio: "Innovateur tech avec la mission de connecter les communautés aux producteurs locaux.",
        },
    ];

    const values = [
        {
            icon: <Users className="w-6 h-6" />,
            title: "Communauté",
            description:
                "Créer des liens directs entre producteurs et consommateurs",
        },
        {
            icon: <Leaf className="w-6 h-6" />,
            title: "Durabilité",
            description: "Promouvoir une agriculture responsable et locale",
        },
        {
            icon: <Heart className="w-6 h-6" />,
            title: "Accessibilité",
            description: "Rendre les produits locaux accessibles à tous",
        },
    ];

    return (
        <div className="bg-white py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-12 mb-24">
                    {values.map((value) => (
                        <div
                            key={value.title}
                            className="bg-green-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow"
                        >
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-600 mb-6">
                                {value.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                {value.title}
                            </h3>
                            <p className="text-gray-600">{value.description}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Notre Équipe
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Une équipe passionnée qui réunit technologie et
                        agriculture durable pour construire des communautés
                        alimentaires plus fortes.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {founders.map((founder) => (
                        <div key={founder.name} className="group">
                            <div className="bg-green-50 rounded-2xl p-8 transform group-hover:-translate-y-1 transition-all duration-300 hover:shadow-xl">
                                <div className="flex flex-col sm:flex-row items-center gap-8">
                                    <img
                                        src={founder.image}
                                        alt={founder.name}
                                        className="w-32 h-32 rounded-full object-cover ring-4 ring-green-100 group-hover:ring-green-200 transition-all"
                                    />
                                    <div className="text-center sm:text-left">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                            {founder.name}
                                        </h3>
                                        <p className="text-green-600 font-medium mb-4">
                                            {founder.role}
                                        </p>
                                        <p className="text-gray-600">
                                            {founder.bio}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
