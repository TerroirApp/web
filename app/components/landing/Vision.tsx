import { Activity, Brain, Shield } from "lucide-react";
import styles from "./Vision.module.css";

export function Vision() {
    return (
        <section id="vision" className={styles.container}>
            <div className={styles.content}>
                <div className={styles.text}>
                    <h2>Imaginer un Futur Décentralisé</h2>
                    <p>
                        La vision de TerroirApp dépasse la simple consommation
                        locale.
                        <br />
                        Nous construisons un avenir résilient et décentralisé
                        qui renforce les communautés, soutient les chaînes
                        d'approvisionnement transparentes et utilise l'IA pour
                        guider les consommateurs vers des choix durables.
                    </p>
                </div>
                <ul className={styles.bulletList}>
                    <li>
                        <div className={styles.iconBackground}>
                            <Shield size={24} color="var(--off-white)" />
                        </div>
                        <p>
                            Décentralisation pour la transparence et l’autonomie
                            des producteurs
                        </p>
                    </li>
                    <li>
                        <div className={styles.iconBackground}>
                            <Brain size={24} color="var(--off-white)" />
                        </div>
                        <p>IA pour conseiller des choix locaux et durables</p>
                    </li>
                    <li>
                        <div className={styles.iconBackground}>
                            <Activity size={24} color="var(--off-white)" />
                        </div>
                        <p>
                            Impact social pour renforcer les liens
                            communautaires
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    );
}
