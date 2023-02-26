interface Task {
  id: string;
  text: string;
  isCompleted: boolean;
}

export interface TasksProps {
  tasks: Task[];
  onComplete: (taskId: string) => void;
  onDelete: (taskId: string) => void;
}
