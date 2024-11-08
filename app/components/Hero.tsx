import { ArrowRight, Sprout } from "lucide-react";
import { Link } from "react-router";
import styles from "./Hero.module.css";

export function Hero() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.wrapper}>
                    <div className={styles.textContent}>
                        <div className={styles.header}>
                            <Sprout
                                style={{
                                    width: "2.5rem",
                                    height: "2.5rem",
                                    color: "#16a34a",
                                }}
                            />
                            <h1 className={styles.title}>
                                <span className={styles.titleHighlight}>
                                    Loca
                                </span>
                                vore
                            </h1>
                        </div>
                        <p className={styles.description}>
                            Locavore est un annuaire cartographié promouvant les
                            autres schémas de distribution que ceux que l'on
                            connaît en facilitant l'accès aux établissements
                        </p>
                        <div className={styles.buttons}>
                            <Link
                                to="/app/routes/map"
                                className={styles.primaryButton}
                            >
                                Trouver des producteurs
                                <ArrowRight
                                    style={{
                                        width: "1.25rem",
                                        height: "1.25rem",
                                    }}
                                />
                            </Link>
                            <a href="#about" className={styles.secondaryButton}>
                                En savoir plus
                            </a>
                        </div>
                    </div>
                    <div className={styles.imageContainer}>
                        <div className={styles.imageWrapper}>
                            <img
                                src="https://images.unsplash.com/photo-1542838132-92c53300491e"
                                alt="Local market"
                                className={styles.image}
                            />
                        </div>
                        <div className={styles.stats}>
                            <div className={styles.statsHeader}>
                                <div className={styles.statsIndicator} />
                                <p className={styles.statsTitle}>
                                    Impact Local
                                </p>
                            </div>
                            <p className={styles.statsDescription}>
                                Plus de 500 producteurs locaux déjà référencés
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.background}>
                <div className={styles.backgroundGradient1} />
                <div className={styles.backgroundGradient2} />
            </div>
        </div>
    );
}
