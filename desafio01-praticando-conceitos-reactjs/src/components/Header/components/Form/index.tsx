import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import styles from "./Form.module.css";
import { FormProps } from "./types";

export function Form(props: FormProps) {
  const { onAddTask } = props;

  const [task, setTask] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    onAddTask(task);
    setTask("");
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setTask(event.target.value);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Este campo é obrigatório");
  }

  const isNewTaskEmpty = !task;

  return (
    <>
      <main className={styles.main}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="newTask"
            placeholder="Adicione uma tarefa"
            value={task}
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
      </main>
    </>
  );
}
