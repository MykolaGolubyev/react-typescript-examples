import { Task } from './Task';
import { TaskVisualState } from './TaskVisualState';

export interface TaskWithVisualState extends Task {
  visualState: TaskVisualState;
}