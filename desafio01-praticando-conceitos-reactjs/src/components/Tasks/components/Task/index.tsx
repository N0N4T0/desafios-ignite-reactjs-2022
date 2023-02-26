import { CheckCircle, Trash } from "phosphor-react";
import styles from "./Task.module.css";
import { TaskProps } from "./types";

export function Task(props: TaskProps) {
  const { task, onComplete, onDelete } = props;

  const { id, isCompleted, text } = task;

  return (
    <li className={styles.cardInformation}>
      {/* //ToDO add button */}
      <input type="checkbox" className={styles.checkbox} />
      <p>{text}</p>
      <button className={styles.trash}>
        <Trash size={24} />
      </button>
    </li>
  );
}
