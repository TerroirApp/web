import { Globe, Leaf, Users } from "lucide-react";
import styles from "./About.module.css";

export function About() {
    return (
        <section id="about" className={styles.container}>
            <div className={styles.content}>
                <div className={styles.text}>
                    <h2>l'Essence de la Consommation Locale</h2>
                    <p>
                        Chez TerroirApp, nous croyons au lien entre les
                        communautés et les producteurs locaux. Grâce à des choix
                        durables, nous transformons la consommation en apportant
                        transparence, fraîcheur, et soutien communautaire.
                    </p>
                </div>
                <ul className={styles.bulletList}>
                    <li>
                        <div className={styles.iconBackground}>
                            <Leaf color="var(--off-white)" />
                        </div>
                        <p>
                            Soutenir les producteurs pour une chaîne
                            d'approvisionnement équitable
                        </p>
                    </li>
                    <li>
                        <div className={styles.iconBackground}>
                            <Globe size={24} color="var(--off-white)" />
                        </div>
                        <p>
                            Réduire l'empreinte carbone par des choix de
                            consommation locaux
                        </p>
                    </li>
                    <li>
                        <div className={styles.iconBackground}>
                            <Users size={24} color="var(--off-white)" />
                        </div>
                        <p>
                            Construire une communauté engagée autour de la
                            transparence alimentaire
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    );
}
