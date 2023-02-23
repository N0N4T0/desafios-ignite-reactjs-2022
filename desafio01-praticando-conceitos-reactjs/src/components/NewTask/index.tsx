import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import styles from "./NewTask.module.css";
import { TaskList } from "../TaskList";

export function NewTask() {
  const [newTaskText, setNewTaskText] = useState("");

  const [numberOfTasksCreated, setNumberOfTasksCreated] = useState(0);
  const [numberOfTasksDone, setNumberOfTasksDone] = useState(0);

  function handleCounterNewTask(event: FormEvent) {
    event.preventDefault();

    setNewTaskText("");

    setNumberOfTasksCreated((state) => {
      return state + 1;
    });
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewTaskText(event.target.value);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Este campo é obrigatório");
  }

  const isNewTaskEmpty = newTaskText.length === 0;

  return (
    <>
      <main className={styles.main}>
        <form onSubmit={handleCounterNewTask}>
          <input
            type="text"
            name="newTask"
            placeholder="Adicione uma tarefa"
            value={newTaskText}
            onChange={handleNewTaskChange}
            onInvalid={handleNewTaskInvalid}
            required
          />

          <footer>
            <button type="submit" disabled={isNewTaskEmpty}>
              Criar
              <PlusCircle size={16} />
            </button>
          </footer>
        </form>

        <TaskList />
      </main>
    </>
  );
}
