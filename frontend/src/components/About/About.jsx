import React from 'react';
import styles from './About.module.css';
import { FiCoffee, FiHeart, FiAward, FiUsers } from 'react-icons/fi';

const About = () => {
  const values = [
    {
      icon: <FiUsers size={32} />,
      title: 'Chefs Expertos',
      description: 'Liderados por chefs con más de 15 años de experiencia en gastronomía premium.',
      stat: '15+ años'
    },
    {
      icon: <FiCoffee size={32} />,
      title: 'Materias Primas',
      description: 'Proveedores locales que garantizan máxima frescura y calidad.',
      stat: '100% local'
    },
    {
      icon: <FiHeart size={32} />,
      title: 'Pasión por la Calidad',
      description: 'Cada hamburguesa preparada con dedicación y atención al detalle.',
      stat: '24/7 pasión'
    },
    {
      icon: <FiAward size={32} />,
      title: 'Reconocimientos',
      description: 'Galardonados con múltiples premios a la excelencia culinaria.',
      stat: '5 premios'
    }
  ];

  return (
    <section id="nosotros" className={`section ${styles.aboutSection}`}>
      <div className="container">
        <div className={styles.aboutHeader}>
          <span className={styles.sectionBadge}>Nuestra Historia</span>
          <h2 className="section__title">Más que una Hamburguesería</h2>
          <p className={styles.sectionSubtitle}>
            Un viaje culinario que comenzó en 2010 y que hoy es referencia 
            en gastronomía premium
          </p>
        </div>

        <div className={styles.storySection}>
          <div className={styles.storyContent}>
            <div className={styles.storyText}>
              <h3>El comienzo de una pasión</h3>
              <p>
                Todo comenzó en un pequeño local en el centro de la ciudad, 
                donde nuestro fundador decidió crear algo diferente: hamburguesas 
                que superaran todas las expectativas.
              </p>
              <p>
                Con una simple misión - usar solo los mejores ingredientes 
                y técnicas artesanales - rápidamente nos convertimos en el 
                lugar favorito de los amantes de la buena comida.
              </p>
              <div className={styles.milestones}>
                <div className={styles.milestone}>
                  <span className={styles.milestoneNumber}>2010</span>
                  <span className={styles.milestoneText}>Apertura</span>
                </div>
                <div className={styles.milestone}>
                  <span className={styles.milestoneNumber}>2015</span>
                  <span className={styles.milestoneText}>Expansión</span>
                </div>
                <div className={styles.milestone}>
                  <span className={styles.milestoneNumber}>2023</span>
                  <span className={styles.milestoneText}>Premio Excelencia</span>
                </div>
              </div>
            </div>
            
            <div className={styles.storyImage}>
              <img 
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Local original"
              />
              <div className={styles.imageCaption}>
                <span>📍</span>
                <div>
                  <strong>Nuestro primer local</strong>
                  <span>Av. Principal 123, Centro</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.valuesSection}>
          <h3>Nuestros Pilares</h3>
          <p className={styles.valuesSubtitle}>
            Los principios que guían cada decisión en Burger House
          </p>
          
          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <div key={index} className={styles.valueCard}>
                <div className={styles.valueHeader}>
                  <div className={styles.valueIcon}>{value.icon}</div>
                  <div className={styles.valueStat}>{value.stat}</div>
                </div>
                <h4>{value.title}</h4>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;