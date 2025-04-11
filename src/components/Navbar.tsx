import { useState } from "preact/hooks";
import { useStore } from "@nanostores/preact";
import { isCartOpen } from "../cartStore";
import { withBase } from "../utils";
import styles from "../styles/navbar.module.css";
// or the absolute path version:
// import styles from "/styles/navbar.module.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const $isCartOpen = useStore(isCartOpen);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCart = () => {
    isCartOpen.set(!$isCartOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <a href={withBase("/")} className={styles.navbarLogo}>
          <span className={styles.logoText}>Magnolia</span> UY
        </a>

        {/* Hamburger menu for mobile */}
        <button
          className={styles.menuToggle}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span
            className={`${styles.hamburger} ${isMenuOpen ? styles.active : ""}`}
          ></span>
        </button>

        {/* Navigation links */}
        <div
          className={`${styles.navbarLinks} ${isMenuOpen ? styles.active : ""}`}
        >
          <ul>
            <li>
              <a href={withBase("/")} onClick={() => setIsMenuOpen(false)}>
                Inicio
              </a>
            </li>
            <li>
              <a
                href={withBase("/sobre-nosotros")}
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre Nosotros
              </a>
            </li>
            <li>
              <a
                href={withBase("/tienda")}
                onClick={() => setIsMenuOpen(false)}
              >
                Tienda
              </a>
            </li>
          </ul>
        </div>

        {/* Cart icon */}
        <button
          className={styles.cartButton}
          onClick={toggleCart}
          aria-label="Ver carrito"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
        </button>
      </div>
    </nav>
  );
}
