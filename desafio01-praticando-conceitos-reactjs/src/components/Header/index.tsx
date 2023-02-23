import { TodoLogo } from "../../assets";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={TodoLogo} alt="Logotipo do Todo" />
    </header>
  );
}
