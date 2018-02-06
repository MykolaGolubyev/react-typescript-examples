import { Task } from './Task';
import { TaskWithVisualState } from './TaskWithVisualState';
import { TaskVisualState } from './TaskVisualState';

export class Tasks {
  private _tasks: TaskWithVisualState[] = [];

  static fromServerData(tasks: Task[]): Tasks {
    return new Tasks(tasks.map(task => {
      return {visualState: TaskVisualState.None, ...task};
    }));
  }

  static empty() {
    return new Tasks([]);
  }

  update(newTask: TaskWithVisualState) {
    const newTasks = new Tasks([]);

    const idx = this._tasks.findIndex(t => newTask.id === t.id);
    if (idx === -1) {
      throw new Error('no task present with id: ' + newTask.id);
    }

    newTasks._tasks = [...this._tasks];
    newTasks._tasks[idx] = newTask;

    return newTasks;
  }

  get tasks(): TaskWithVisualState[] {
    return this._tasks;
  }

  private constructor(tasks: TaskWithVisualState[]) {
    this._tasks = tasks;
  }
}