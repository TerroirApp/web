import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import styles from "./Navigation.module.css";

export function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className={styles.nav}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <Link to="/" className={styles.logo}>
                        Locavore
                    </Link>

                    <div className={styles.desktopMenu}>
                        <Link to="/" className={styles.link}>
                            Acceuil
                        </Link>
                        <Link to="/find" className={styles.link}>
                            Trouver un producteur
                        </Link>
                    </div>

                    <button
                        className={styles.menuButton}
                        type="button"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? (
                            <X
                                className="h-6 w-6"
                                style={{ color: "#4b5563" }}
                            />
                        ) : (
                            <Menu
                                className="h-6 w-6"
                                style={{ color: "#4b5563" }}
                            />
                        )}
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div className={styles.mobileMenu}>
                    <Link
                        to="/"
                        className={styles.mobileLink}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Acceuil
                    </Link>
                    <Link
                        to="/find"
                        className={styles.mobileLink}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Trouver un producteur
                    </Link>
                </div>
            )}
        </nav>
    );
}
