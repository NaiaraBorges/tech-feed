import styles from "./Header.module.css";

import feedLogo from '../assets/comunicacao.png';



export function Header() {
  return (
    <header className={styles.header}>
      <img src={feedLogo} alt="logo" />
    </header>
  );
}
