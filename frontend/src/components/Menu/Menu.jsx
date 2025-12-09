import React from 'react';
import styles from './Menu.module.css';
import { FiStar, FiShoppingCart, FiChevronRight, FiCoffee, FiZap, FiClock, FiCheck, FiTrendingUp } from 'react-icons/fi';

const Menu = () => {
  const categories = [
    {
      id: 'premium',
      name: 'Premium Collection',
      icon: <FiStar />,
      description: 'Exquisiteces gourmet que redefinen el arte de la hamburguesa',
      items: [
        {
          id: 1,
          name: 'Black Angus Reserve',
          description: 'Carne Black Angus 250g madurada 21 días, queso manchego curado, cebolla caramelizada en vino tinto, reducción de oporto',
          price: '€18.50',
          popular: true,
          calories: '850 cal',
          highlight: true,
          featured: true,
          ingredients: ['Angus Reserve', 'Queso Manchego', 'Cebolla Caramelizada'],
          prepTime: '18 min',
          image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
        },
        {
          id: 2,
          name: 'Truffle Royale',
          description: 'Doble carne wagyu A5, foie gras de pato, queso brie DOP, salsa de trufa negra de Alba, pan de brioche con oro comestible',
          price: '€24.90',
          popular: false,
          calories: '920 cal',
          highlight: true,
          ingredients: ['Wagyu A5', 'Foie Gras', 'Trufa Negra'],
          prepTime: '22 min',
          image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
        }
      ]
    },
    {
      id: 'clasicas',
      name: 'Clásicas Signature',
      icon: <FiCoffee />,
      description: 'Reinterpretación moderna de las favoritas atemporales',
      items: [
        {
          id: 3,
          name: 'BBQ Masterpiece',
          description: 'Carne ahumada en madera de roble, bacon artesanal triple, onion rings tempura, queso cheddar madurado, salsa BBQ casera',
          price: '€15.90',
          popular: true,
          calories: '780 cal',
          highlight: false,
          ingredients: ['Carne Ahumada', 'Bacon Artesanal', 'Cheddar'],
          prepTime: '15 min',
          image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
        },
        {
          id: 4,
          name: 'Mediterranean Gold',
          description: 'Carne de cordero lechal, queso feta de cabra, tomate seco confitado, aceitunas kalamata, pesto de albahaca',
          price: '€16.50',
          popular: true,
          calories: '720 cal',
          highlight: false,
          ingredients: ['Cordero Lechal', 'Feta', 'Tomate Seco'],
          prepTime: '16 min',
          image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
        }
      ]
    }
  ];

  const combos = [
    {
      id: 1,
      name: 'Master Collection',
      description: 'Experiencia completa: 4 hamburguesas premium + guarniciones gourmet + bebidas artesanales + postre del chef',
      price: '€49.90',
      originalPrice: '€59.90',
      badge: 'Chef\'s Pick',
      features: ['Ahorro garantizado', 'Degustación premium', 'Postre incluido'],
      image: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    }
  ];

  const stats = [
    { icon: <FiClock />, value: '15 min', label: 'Preparación promedio' },
    { icon: <FiCheck />, value: '98%', label: 'Satisfacción cliente' },
    { icon: <FiTrendingUp />, value: '2k+', label: 'Pedidos mensuales' }
  ];

  return (
    <section id="menu" className={`section ${styles.menuSection}`}>
      <div className="container">
        <div className={styles.menuHeader}>
          <span className={styles.sectionBadge}>Gastronomía Elevada</span>
          <h2 className={styles.sectionTitle}>Carta Maestra</h2>
          <p className={styles.sectionSubtitle}>
            Cada creación es un manifiesto de excelencia culinaria y artesanía gourmet
          </p>
        </div>

        {/* Stats Bar */}
        <div className={styles.statsBar}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statItem}>
              <div className={styles.statIcon}>{stat.icon}</div>
              <div className={styles.statContent}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.menuCategories}>
          {categories.map((category) => (
            <div key={category.id} className={styles.categorySection}>
              <div className={styles.categoryHeader}>
                <div className={styles.categoryIconWrapper}>
                  <div className={styles.categoryIcon}>{category.icon}</div>
                  <div className={styles.categoryDecorator}></div>
                </div>
                <div className={styles.categoryText}>
                  <h3 className={styles.categoryTitle}>{category.name}</h3>
                  <p className={styles.categoryDescription}>{category.description}</p>
                </div>
              </div>
              
              <div className={styles.menuGrid}>
                {category.items.map((item) => (
                  <div 
                    key={item.id} 
                    className={`${styles.menuCard} ${item.highlight ? styles.highlight : ''} ${item.featured ? styles.featured : ''}`}
                  >
                    <div className={styles.cardImage}>
                      <img src={item.image} alt={item.name} />
                      {item.popular && (
                        <div className={styles.popularBadge}>
                          <FiStar size={12} />
                          <span>Chef\'s Choice</span>
                        </div>
                      )}
                      {item.featured && (
                        <div className={styles.featuredBadge}>
                          <span>⭐ Featured</span>
                        </div>
                      )}
                    </div>
                    
                    <div className={styles.cardContent}>
                      <div className={styles.cardHeader}>
                        <div>
                          <h4 className={styles.itemName}>{item.name}</h4>
                          <div className={styles.prepTime}>
                            <FiClock size={12} />
                            <span>{item.prepTime}</span>
                          </div>
                        </div>
                        <div className={styles.calories}>{item.calories}</div>
                      </div>
                      
                      <p className={styles.itemDescription}>{item.description}</p>
                      
                      <div className={styles.ingredients}>
                        {item.ingredients.map((ing, idx) => (
                          <span key={idx} className={styles.ingredientTag}>{ing}</span>
                        ))}
                      </div>
                      
                      <div className={styles.cardFooter}>
                        <div className={styles.priceContainer}>
                          <span className={styles.price}>{item.price}</span>
                          {item.highlight && (
                            <span className={styles.premiumBadge}>Gourmet Selection</span>
                          )}
                        </div>
                        
                        <button className={styles.addButton}>
                          <FiShoppingCart size={18} />
                          <span>Add to Cart</span>
                          <div className={styles.buttonGlow}></div>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.combosSection}>
          <div className={styles.combosHeader}>
            <h3>Experiencias Curated</h3>
            <p>Selecciones del chef para momentos memorables</p>
          </div>
          
          <div className={styles.combosGrid}>
            {combos.map((combo) => (
              <div key={combo.id} className={styles.comboCard}>
                <div className={styles.comboImage}>
                  <img src={combo.image} alt={combo.name} />
                  <div className={styles.comboBadge}>{combo.badge}</div>
                </div>
                
                <div className={styles.comboContent}>
                  <h4>{combo.name}</h4>
                  <p>{combo.description}</p>
                  
                  <div className={styles.comboFeatures}>
                    {combo.features?.map((feature, idx) => (
                      <div key={idx} className={styles.comboFeature}>
                        <FiCheck size={14} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className={styles.comboPrice}>
                    <div className={styles.priceInfo}>
                      <span className={styles.currentPrice}>{combo.price}</span>
                      <span className={styles.originalPrice}>{combo.originalPrice}</span>
                      <span className={styles.saveBadge}>Save 17%</span>
                    </div>
                    
                    <button className={styles.comboButton}>
                      <span>Reservar Experiencia</span>
                      <FiChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h3>Private Tasting Events</h3>
            <p>Diseñamos experiencias gastronómicas exclusivas para grupos selectos</p>
            <button className={styles.ctaButton}>
              <span>Contactar Sommelier</span>
              <FiChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;