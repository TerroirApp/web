import { Heart, Leaf, Users } from "lucide-react";
import styles from "./Founders.module.css";

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
        icon: <Users />,
        title: "Communauté",
        description:
            "Créer des liens directs entre producteurs et consommateurs",
    },
    {
        icon: <Leaf />,
        title: "Durabilité",
        description: "Promouvoir une agriculture responsable et locale",
    },
    {
        icon: <Heart />,
        title: "Accessibilité",
        description: "Rendre les produits locaux accessibles à tous",
    },
];

export function Founders() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.valuesGrid}>
                    {values.map((value) => (
                        <div key={value.title} className={styles.valueCard}>
                            <div className={styles.valueIcon}>{value.icon}</div>
                            <h3 className={styles.valueTitle}>{value.title}</h3>
                            <p className={styles.valueDescription}>
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className={styles.teamSection}>
                    <h2 className={styles.teamTitle}>Notre Équipe</h2>
                    <p className={styles.teamDescription}>
                        Une équipe passionnée qui réunit technologie et
                        agriculture durable pour construire des communautés
                        alimentaires plus fortes.
                    </p>
                </div>

                <div className={styles.foundersGrid}>
                    {founders.map((founder) => (
                        <div key={founder.name} className={styles.founderCard}>
                            <div className={styles.founderContent}>
                                <img
                                    src={founder.image}
                                    alt={founder.name}
                                    className={styles.founderImage}
                                />
                                <div className={styles.founderInfo}>
                                    <h3 className={styles.founderName}>
                                        {founder.name}
                                    </h3>
                                    <p className={styles.founderRole}>
                                        {founder.role}
                                    </p>
                                    <p className={styles.founderBio}>
                                        {founder.bio}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
