import { useState, useEffect } from 'react';
import styles from './NavBar.module.css';
import logo from '../assets/moonedi-logo-w-bg.png';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaUser, FaShoppingCart, FaChevronDown } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track which dropdown is open (null = none, or 'about' / 'customers' / 'standards')
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => {
    setIsOpen(false);
    setOpenDropdown(null);
  };

  const toggleDropdown = (id: string) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const dropdownVariants = {
    hidden: { opacity: 0, scale: 0.95, y: -8 },
    visible: { opacity: 1, scale: 1, y: 0 },
  };

  return (
    <motion.header
      className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.navbar__logo}>
        <Link to="/" onClick={closeMenu}>
          <img src={logo} alt="Moonedi Enterprise" />
        </Link>
      </div>

      <nav className={styles.navbar__nav}>
        <ul className={styles.navList}>
          <li>
            <Link to="/" onClick={closeMenu}>Home</Link>
          </li>

          <li className={styles.dropdown}>
            <button
              type="button"
              className={styles.dropdownToggle}
              onClick={() => toggleDropdown('about')}
            >
              <Link to='/about'>About</Link>
              <FaChevronDown
                className={`${styles.dropdownArrow} ${openDropdown === 'about' ? styles.arrowUp : ''}`}
              />
            </button>

            <AnimatePresence>
              {openDropdown === 'about' && (
                <motion.ul
                  className={styles.dropdownMenu}
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  transition={{ duration: 0.2 }}
                >
                  <li><Link to="/abottoir" onClick={closeMenu}>Abattoir</Link></li>
                  <li><Link to="/meat-processing" onClick={closeMenu}>Meat Processing</Link></li>
                  <li><Link to="/distribution" onClick={closeMenu}>Distribution</Link></li>
                </motion.ul>
              )}
            </AnimatePresence>
          </li>

          <li className={styles.dropdown}>
            <button
              type="button"
              className={styles.dropdownToggle}
              onClick={() => toggleDropdown('customers')}
            >
              <Link to='/customers'>Our Customers</Link>
              
              <FaChevronDown
                className={`${styles.dropdownArrow} ${openDropdown === 'customers' ? styles.arrowUp : ''}`}
              />
            </button>

            <AnimatePresence>
              {openDropdown === 'customers' && (
                <motion.ul
                  className={styles.dropdownMenu}
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  transition={{ duration: 0.2 }}
                >
                  <li><Link to="/local-customers" onClick={closeMenu}>Botswana</Link></li>
                  <li><Link to="/sadc-customers" onClick={closeMenu}>SADC Region</Link></li>
                  <li><Link to="/europe-customers" onClick={closeMenu}>Europe</Link></li>
                </motion.ul>
              )}
            </AnimatePresence>
          </li>

          <li className={styles.dropdown}>
            <button
              type="button"
              className={styles.dropdownToggle}
              onClick={() => toggleDropdown('standards')}
            >
              <Link to='standards'>Standards</Link>
              <FaChevronDown
                className={`${styles.dropdownArrow} ${openDropdown === 'standards' ? styles.arrowUp : ''}`}
              />
            </button>

            <AnimatePresence>
              {openDropdown === 'standards' && (
                <motion.ul
                  className={styles.dropdownMenu}
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  transition={{ duration: 0.2 }}
                >
                  <li><Link to="/hygiene-safety" onClick={closeMenu}>Hygiene & Safety</Link></li>
                  <li><Link to="/quality-assurance" onClick={closeMenu}>Quality Policies</Link></li>
                  <li><Link to="/certified" onClick={closeMenu}>Certifications</Link></li>
                </motion.ul>
              )}
            </AnimatePresence>
          </li>

          
        </ul>
      </nav>

      <div className={styles.navbar__actions}>
        <Link to="/contact" className={styles.actionIcon} title="Place Order" onClick={closeMenu}>
          <FaShoppingCart />
        </Link>
        <Link to="/customer-login" className={styles.actionIcon} title="Login" onClick={closeMenu}>
          <FaUser />
        </Link>
       <Link to='/admins-only'>
       <button className={styles.askAI__button}>
          <FaUser /> Admins
        </button>
       </Link>
        
       
        
        <button className={styles.hamburger} onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* ──────────────────────────────────────────────── */}
      {/*               MOBILE MENU – kept exactly as you had               */}
      {/* ──────────────────────────────────────────────── */}
      {isOpen && (
        <motion.div
          className={styles.mobileMenu}
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.4 }}
        >
          <ul className={styles.mobileNavList}>
            <li>
              <Link to="/" className={styles.mobileMainLink} onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={styles.mobileMainLink} onClick={closeMenu}>
                About
              </Link>
              <ul className={styles.mobileSubMenu}>
                <li>
                  <Link to="/abattoir" onClick={closeMenu}>Abattoir</Link>
                </li>
                <li>
                  <Link to="/meat-processing" onClick={closeMenu}>Meat Processing</Link>
                </li>
                <li>
                  <Link to="/distribution" onClick={closeMenu}>Distribution</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/customers" className={styles.mobileMainLink} onClick={closeMenu}>
                Our Customers
              </Link>
              <ul className={styles.mobileSubMenu}>
                <li>
                  <Link to="/customers/botswana" onClick={closeMenu}>Botswana</Link>
                </li>
                <li>
                  <Link to="/customers/sadc" onClick={closeMenu}>SADC Region</Link>
                </li>
                <li>
                  <Link to="/customers/europe" onClick={closeMenu}>Europe</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/standards" className={styles.mobileMainLink} onClick={closeMenu}>
                Standards
              </Link>
              <ul className={styles.mobileSubMenu}>
                <li>
                  <Link to="/health/hygiene-policy" onClick={closeMenu}>Hygiene & Safety</Link>
                </li>
                <li>
                  <Link to="/quality/policy" onClick={closeMenu}>Quality Policies</Link>
                </li>
                <li>
                  <Link to="/quality/certificate" onClick={closeMenu}>Certifications</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/product-gallery" className={styles.mobileMainLink} onClick={closeMenu}>
                Health & Hygiene
              </Link>
            </li>

            <li className={styles.mobileDivider} />

            <li>
              <Link to="/order-online" className={styles.mobileActionLink} onClick={closeMenu}>
                Order Online
              </Link>
            </li>
            <li>
              <Link to="/quote-request" className={styles.mobileActionLink} onClick={closeMenu}>
                Get Quote
              </Link>
            </li>
            <li>
              <Link to="/customer-login" className={styles.mobileActionLink} onClick={closeMenu}>
                Login
              </Link>
            </li>
          </ul>
        </motion.div>
      )}

      {isOpen && <div className={styles.overlay} onClick={closeMenu} />}
    </motion.header>
  );
};

export default NavBar;