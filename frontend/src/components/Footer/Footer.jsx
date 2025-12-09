import React from 'react';
import styles from './Footer.module.css';
import { 
  FiMapPin, 
  FiPhone, 
  FiMail, 
  FiClock,
  FiInstagram,
  FiFacebook,
  FiTwitter,
  FiYoutube
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const footerLinks = [
    {
      title: 'Menú',
      links: [
        { label: 'Hamburguesas', url: '#hamburguesas' },
        { label: 'Acompañamientos', url: '#acompanamientos' },
        { label: 'Bebidas', url: '#bebidas' },
        { label: 'Postres', url: '#postres' }
      ]
    },
    {
      title: 'Locales',
      links: [
        { label: 'Centro', url: '#local-centro' },
        { label: 'Norte', url: '#local-norte' },
        { label: 'Sur', url: '#local-sur' },
        { label: 'Horarios', url: '#horarios' }
      ]
    },
    {
      title: 'Sobre Nosotros',
      links: [
        { label: 'Nuestra Historia', url: '#historia' },
        { label: 'Trabaja con Nosotros', url: '#trabajo' },
        { label: 'Blog', url: '#blog' },
        { label: 'Eventos', url: '#eventos' }
      ]
    }
  ];

  const contactInfo = [
    {
      icon: <FiMapPin size={18} />,
      text: 'Av. Principal 123, Centro',
      url: '#mapa'
    },
    {
      icon: <FiPhone size={18} />,
      text: '+1 234 567 890',
      url: 'tel:+1234567890'
    },
    {
      icon: <FiMail size={18} />,
      text: 'hola@burgerhouse.com',
      url: 'mailto:hola@burgerhouse.com'
    },
    {
      icon: <FiClock size={18} />,
      text: 'Lun-Dom: 12:00 - 23:00',
      url: '#horarios'
    }
  ];

  const socialMedia = [
    {
      icon: <FiInstagram size={20} />,
      name: 'Instagram',
      url: 'https://instagram.com',
      color: '#E1306C'
    },
    {
      icon: <FiFacebook size={20} />,
      name: 'Facebook',
      url: 'https://facebook.com',
      color: '#1877F2'
    },
    {
      icon: <FaWhatsapp size={20} />,
      name: 'WhatsApp',
      url: 'https://wa.me/1234567890',
      color: '#25D366'
    },
    {
      icon: <FiTwitter size={20} />,
      name: 'Twitter',
      url: 'https://twitter.com',
      color: '#1DA1F2'
    },
    {
      icon: <FiYoutube size={20} />,
      name: 'YouTube',
      url: 'https://youtube.com',
      color: '#FF0000'
    }
  ];

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerMain}>
            <div className={styles.brandSection}>
              <div className={styles.logo}>
                <span className={styles.logoText}>BURGER</span>
                <span className={styles.logoHighlight}>HOUSE</span>
              </div>
              <p className={styles.brandDescription}>
                Hamburguesas artesanales elaboradas con pasión 
                y los mejores ingredientes desde 2010.
              </p>
              
              <div className={styles.contactList}>
                {contactInfo.map((item, index) => (
                  <a 
                    key={index} 
                    href={item.url} 
                    className={styles.contactItem}
                  >
                    {item.icon}
                    <span>{item.text}</span>
                  </a>
                ))}
              </div>
            </div>
            
            <div className={styles.linksSection}>
              {footerLinks.map((column, index) => (
                <div key={index} className={styles.linkColumn}>
                  <h3 className={styles.columnTitle}>{column.title}</h3>
                  <ul className={styles.linkList}>
                    {column.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a href={link.url} className={styles.link}>
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          
          <div className={styles.socialSection}>
            <h3 className={styles.socialTitle}>Síguenos</h3>
            <div className={styles.socialLinks}>
              {socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className={styles.socialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ '--social-color': social.color }}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            
            <div className={styles.newsletter}>
              <h4 className={styles.newsletterTitle}>Newsletter</h4>
              <p className={styles.newsletterText}>
                Suscríbete para recibir promociones y novedades
              </p>
              <form className={styles.newsletterForm}>
                <input 
                  type="email" 
                  placeholder="Tu email" 
                  className={styles.newsletterInput}
                  required
                />
                <button type="submit" className={styles.newsletterButton}>
                  Suscribirse
                </button>
              </form>
            </div>
          </div>
          
          <div className={styles.footerBottom}>
            <div className={styles.copyright}>
              © {new Date().getFullYear()} Burger House. Todos los derechos reservados.
            </div>
            
            <div className={styles.legalLinks}>
              <a href="#politica-privacidad" className={styles.legalLink}>
                Política de Privacidad
              </a>
              <a href="#terminos-condiciones" className={styles.legalLink}>
                Términos y Condiciones
              </a>
              <a href="#aviso-legal" className={styles.legalLink}>
                Aviso Legal
              </a>
              <a href="#cookies" className={styles.legalLink}>
                Política de Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;