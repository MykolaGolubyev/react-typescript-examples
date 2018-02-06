import { Task } from './Task';

export interface TaskHandlers {
  onComplete(task: Task): void;
  onUnComplete(task: Task): void;
}
