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

export function Founders() {
    return (
        <section id="founders" className={styles.container}>
            <h2>Rencontrez les Fondateurs</h2>
            <p>
                Une équipe passionnée qui réunit technologie et agriculture
                durable pour construire des communautés alimentaires plus
                fortes.
            </p>
            <div className={styles.foundersList}>
                {founders.map((founder) => (
                    <div key={founder.name} className={styles.card}>
                        <img
                            src={founder.image}
                            alt={founder.name}
                            className={styles.image}
                        />
                        <div className={styles.cardText}>
                            <h3>{founder.name}</h3>
                            <p className={styles.role}>{founder.role}</p>
                            <p className={styles.bio}>{founder.bio}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
