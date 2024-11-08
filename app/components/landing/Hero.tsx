import { ArrowRight, Sprout } from "lucide-react";
import { Link } from "react-router";
import styles from "./Hero.module.css";

export function Hero() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.textContent}>
                    <div className={styles.header}>
                        <Sprout
                            style={{
                                width: "2.5rem",
                                height: "2.5rem",
                                color: "var(--green-900)", // dark green
                            }}
                        />
                        <h1 className={styles.title}>
                            <span className={styles.titleHighlight}>
                                Terroir
                            </span>
                            App
                        </h1>
                    </div>
                    <p className={styles.description}>
                        TerroirApp est une application décentralisée pour
                        promouvoir la consommation locale en connectant les
                        consommateurs avec les producteurs locaux.
                    </p>
                    <div className={styles.buttons}>
                        <Link to="/find" className={styles.primaryButton}>
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
                            <p className={styles.statsTitle}>Impact Local</p>
                        </div>
                        <p className={styles.statsDescription}>
                            Plus de 500 producteurs locaux déjà référencés
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
