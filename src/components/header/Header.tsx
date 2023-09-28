import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={`flex ${styles.nav}`}>
        <NavLink className={styles.link} to="/">
          Main
        </NavLink>
        <NavLink className={styles.link} to="/about">
          About
        </NavLink>
      </nav>
    </header>
  );
}
