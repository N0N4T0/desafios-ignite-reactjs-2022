import { useState } from "react";
import { Header, Tasks } from "./components";
import "./global.css";
import { AppProps } from "./types";

export function App() {
  const [tasks, setTasks] = useState<AppProps[]>([]);

  function addTask(taskText: string) {
    setTasks([
      ...tasks,
      { id: crypto.randomUUID(), text: taskText, isCompleted: false },
    ]);
  }

  function deleteTaskById(taskId: string) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function toogleTaskCompletedById(taskId: string) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }

      return task;
    });

    setTasks(newTasks);
  }

  return (
    <>
      <Header onAddTask={addTask} />
      <Tasks
        onComplete={toogleTaskCompletedById}
        onDelete={deleteTaskById}
        tasks={tasks}
      />
    </>
  );
}
