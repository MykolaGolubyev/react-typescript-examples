import { Task } from './Task';

export interface TasksService {
  completeTask(task: Task): Promise<Task>;
  uncompleteTask(task: Task): Promise<Task>;
  allActiveTasks(): Promise<Task[]>;
}