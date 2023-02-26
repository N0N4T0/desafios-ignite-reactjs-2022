import styles from "./Tasks.module.css";

import { Clipboard } from "../../assets";
import { TasksProps } from "./types";
import { Task } from "./components";

export function Tasks(props: TasksProps) {
  const { onComplete, onDelete, tasks } = props;

  const tasksQuantity = tasks.length;
  const completedTasks = tasks.filter((task) => task.isCompleted).length;

  function renderListOfTasks() {
    return tasks.map((task) => {
      return (
        <Task
          key={task.id}
          task={task}
          onComplete={onComplete}
          onDelete={onDelete}
        />
      );
    });
  }

  function renderEmptyListOfTasks() {
    if (tasks.length <= 0) {
      return (
        <>
          <img src={Clipboard} alt="Sem tarefas" />
          <div className={styles.emptyMessage}>
            <p>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        </>
      );
    }
  }

  return (
    <>
      <div className={styles.taskListContainer}>
        <div className={styles.taskList}>
          <span>Tarefas criadas</span>
          <span>{tasksQuantity}</span>
        </div>
        <div className={styles.taskDone}>
          Concluídas
          <span>
            {completedTasks} de {tasksQuantity}
          </span>
        </div>
      </div>

      <div className={styles.taskCardContainer}>
        <ul className={styles.cardInformations}>{renderListOfTasks()}</ul>

        {renderEmptyListOfTasks()}
      </div>
    </>
  );
}
