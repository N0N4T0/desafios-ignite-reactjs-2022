import { Check, Trash } from "phosphor-react";
import styles from "./Task.module.css";
import { TaskProps } from "./types";

export function Task(props: TaskProps) {
  const { task, onComplete, onDelete } = props;

  const { id, isCompleted, text } = task;

  function verifyCompletedTask() {
    if (task.isCompleted) {
      return (
        <div className={styles.completedSelectedTask}>
          <Check className={styles.checkIconClass} size={12} />
        </div>
      );
    }

    return <div className={styles.uncompletedTask} />;
  }

  return (
    <li className={styles.cardInformation}>
      <button className={styles.selectedTask} onClick={() => onComplete(id)}>
        {verifyCompletedTask()}
      </button>

      <p className={isCompleted ? styles.textTaskIsCompleted : ""}>{text}</p>

      <button className={styles.trash} onClick={() => onDelete(id)}>
        <Trash size={24} />
      </button>
    </li>
  );
}
