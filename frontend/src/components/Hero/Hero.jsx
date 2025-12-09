import React from 'react';
import styles from './Hero.module.css';
import { FiArrowRight } from 'react-icons/fi';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <span>Desde 2010</span>
          </div>
          
          <h1 className={styles.heroTitle}>
            <span className={styles.titleLine}>Hamburguesas</span>
            <span className={styles.titleLine}>Artesanales</span>
            <span className={styles.titleLine}>Premium</span>
          </h1>
          
          <p className={styles.heroSubtitle}>
            Ingredientes selectos, carne 100% Angus y pan artesano. 
            El auténtico sabor que solo encuentras aquí.
          </p>
          
          <div className={styles.heroButtons}>
            <a href="#menu" className={styles.primaryButton}>
              Ver Menú
              <FiArrowRight className={styles.buttonIcon} />
            </a>
            <a href="#reservas" className={styles.secondaryButton}>
              Reservar Mesa
            </a>
          </div>
        </div>
        
        <div className={styles.heroImage}>
          <div className={styles.imageContainer}>
            <img 
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
              alt="Hamburguesa Premium"
              className={styles.mainImage}
            />
            
            <div className={styles.floatingElement}>
              <span>🍔</span>
              <div className={styles.floatingText}>
                <strong>+2000 Clientes</strong>
                <span>Felices por mes</span>
              </div>
            </div>
            
            <div className={styles.imageOverlay}></div>
          </div>
        </div>
      </div>
      
      <div className={styles.featuresBar}>
        <div className="container">
          <div className={styles.featuresGrid}>
            <div className={styles.feature}>
              <span className={styles.featureIcon}>🥩</span>
              <div className={styles.featureText}>
                <h4>Carne Angus</h4>
                <p>100% premium</p>
              </div>
            </div>
            
            <div className={styles.feature}>
              <span className={styles.featureIcon}>🍞</span>
              <div className={styles.featureText}>
                <h4>Pan Artesano</h4>
                <p>Horneado diario</p>
              </div>
            </div>
            
            <div className={styles.feature}>
              <span className={styles.featureIcon}>🌿</span>
              <div className={styles.featureText}>
                <h4>Ingredientes Frescos</h4>
                <p>Productos locales</p>
              </div>
            </div>
            
            <div className={styles.feature}>
              <span className={styles.featureIcon}>⭐</span>
              <div className={styles.featureText}>
                <h4>5 Estrellas</h4>
                <p>En TripAdvisor</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;