import { TasksService } from './TasksService';
import { Task } from './Task';

export class TasksFakeService implements TasksService {
  private tasks: Task[];

  constructor(tasks: Task[]) {
    this.tasks = tasks;
  }

  completeTask(task: Task): Promise<Task> {
    return new Promise<Task>((resolve) => {
      setTimeout(() => resolve({...task, completed: true}), 1000);
    });
  }

  uncompleteTask(task: Task): Promise<Task> {
    return new Promise<Task>((resolve) => {
      setTimeout(() => resolve({...task, completed: false}), 1000);
    });
  }

  allActiveTasks(): Promise<Task[]> {
    return new Promise<Task[]>((resolve) => {
      setTimeout(() => resolve(this.tasks), 1000);
    });
  }
}