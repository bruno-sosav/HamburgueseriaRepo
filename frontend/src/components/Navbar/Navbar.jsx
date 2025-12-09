import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className="container">
        <div className={styles.navbarContent}>
          <div className={styles.logo}>
            <span className={styles.logoText}>BURGER</span>
            <span className={styles.logoHighlight}>HOUSE</span>
          </div>

          <div className={`${styles.navLinks} ${isOpen ? styles.navLinksOpen : ''}`}>
            <a href="#inicio" className={styles.navLink}>Inicio</a>
            <a href="#menu" className={styles.navLink}>Menú</a>
            <a href="#nosotros" className={styles.navLink}>Nosotros</a>
            <a href="#locales" className={styles.navLink}>Locales</a>
            <a href="#contacto" className={styles.navLink}>Contacto</a>
          </div>

          <div className={styles.navActions}>
            <button className={`${styles.btn} ${styles.btnReserve}`}>
              Reservar Mesa
            </button>
            <button 
              className={styles.menuToggle}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;