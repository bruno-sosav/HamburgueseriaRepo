import React, { useState } from 'react';
import styles from './Contact.module.css';
import { 
  FiMapPin, 
  FiPhone, 
  FiMail, 
  FiClock,
  FiSend
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contacto" className={`section ${styles.contactSection}`}>
      <div className="container">
        <div className={styles.contactHeader}>
          <span className={styles.sectionBadge}>Reservas</span>
          <h2 className="section__title">Reserva tu Mesa</h2>
          <p className={styles.sectionSubtitle}>
            Garantiza tu experiencia gastronómica con nosotros
          </p>
        </div>

        <div className={styles.contactContainer}>
          <div className={styles.contactGrid}>
            {/* Formulario de contacto */}
            <div className={styles.contactForm}>
              {formSubmitted ? (
                <div className={styles.successMessage}>
                  <div className={styles.successIcon}>✓</div>
                  <h4>¡Reserva Confirmada!</h4>
                  <p>
                    Te contactaremos en los próximos 30 minutos para confirmar todos los detalles.
                  </p>
                  <button 
                    className={styles.resetButton}
                    onClick={() => setFormSubmitted(false)}
                  >
                    Nueva Reserva
                  </button>
                </div>
              ) : (
                <>
                  <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <input type="text" placeholder="Nombre completo *" required />
                      </div>
                      
                      <div className={styles.formGroup}>
                        <input type="tel" placeholder="Teléfono *" required />
                      </div>
                    </div>
                    
                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <input type="email" placeholder="Email *" required />
                      </div>
                      
                      <div className={styles.formGroup}>
                        <select required>
                          <option value="">Personas *</option>
                          <option value="1-2">1-2 personas</option>
                          <option value="3-4">3-4 personas</option>
                          <option value="5-6">5-6 personas</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <input type="date" required />
                      </div>
                      
                      <div className={styles.formGroup}>
                        <select required>
                          <option value="">Hora *</option>
                          <option value="12:00">12:00</option>
                          <option value="13:00">13:00</option>
                          <option value="14:00">14:00</option>
                          <option value="20:00">20:00</option>
                          <option value="21:00">21:00</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className={styles.formGroup}>
                      <textarea 
                        placeholder="Mensaje adicional (alergias, celebración, etc.)"
                        rows="3"
                      ></textarea>
                    </div>
                    
                    <button type="submit" className={styles.submitButton}>
                      <FiSend size={20} />
                      <span>Confirmar Reserva</span>
                    </button>
                  </form>
                  
                  <div className={styles.formNote}>
                    <span>* Los campos son obligatorios</span>
                    <span>Confirmación vía WhatsApp o llamada</span>
                  </div>
                </>
              )}
            </div>

            {/* Información de contacto compacta */}
            <div className={styles.contactInfo}>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>
                  <FiMapPin size={20} />
                </div>
                <div>
                  <h4>Visítanos</h4>
                  <p>Av. Principal 123, Centro</p>
                </div>
              </div>
              
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>
                  <FiPhone size={20} />
                </div>
                <div>
                  <h4>Llámanos</h4>
                  <p>+1 234 567 890</p>
                </div>
              </div>
              
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>
                  <FiMail size={20} />
                </div>
                <div>
                  <h4>Email</h4>
                  <p>hola@burgerhouse.com</p>
                </div>
              </div>
              
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>
                  <FiClock size={20} />
                </div>
                <div>
                  <h4>Horarios</h4>
                  <p>Lun-Dom: 12:00 - 23:00</p>
                </div>
              </div>
              
              <div className={styles.whatsappCta}>
                <a 
                  href="https://wa.me/1234567890" 
                  className={styles.whatsappButton}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp size={20} />
                  <span>Reservar por WhatsApp</span>
                </a>
                <p className={styles.whatsappNote}>
                  Respuesta inmediata 24/7
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;