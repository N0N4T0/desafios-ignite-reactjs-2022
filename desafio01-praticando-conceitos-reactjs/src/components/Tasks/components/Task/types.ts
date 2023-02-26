interface Task {
  id: string;
  text: string;
  isCompleted: boolean;
}

export interface TaskProps {
  task: Task;
  onComplete: (taskId: string) => void;
  onDelete: (taskId: string) => void;
}
