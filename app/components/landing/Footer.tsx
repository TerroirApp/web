import { Link } from "react-router";
import styles from "./Footer.module.css";

export function Footer() {
    return (
        <>
            <footer className={styles.container}>
                <h2>Prêt à consommer localement ?</h2>
                <Link className={styles.ctaButton} to={"/find"}>
                    Trouver un Producteur
                </Link>
                <nav>
                    <a href="#legal">Mentions Légales</a>
                    <a href="#contact">Contactez-nous</a>
                </nav>
                <p>&copy; 2024 TerroirApp. Tous droits réservés.</p>
            </footer>
        </>
    );
}
