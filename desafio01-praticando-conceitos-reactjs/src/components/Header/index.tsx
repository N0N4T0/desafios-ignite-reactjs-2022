import { TodoLogo } from "../../assets";
import { Form } from "./components";
import styles from "./Header.module.css";
import { HeaderProps } from "./types";

export function Header(props: HeaderProps) {
  const { onAddTask } = props;

  return (
    <>
      <header className={styles.header}>
        <img src={TodoLogo} alt="Logotipo do Todo" />
      </header>

      <Form onAddTask={onAddTask} />
    </>
  );
}
