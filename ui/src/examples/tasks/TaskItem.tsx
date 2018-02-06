import { TaskVisualState } from './TaskVisualState';
import * as React from 'react';

import './TaskItem.css';
import { Task } from './Task';

export interface Props extends Task {
  visualState: TaskVisualState;
  onComplete(task: Task): void;
  onUnComplete(task: Task): void;
}

export class TaskItem extends React.PureComponent<Props> {
  render() {
    const task = this.props;

    return (
      <div className="task-item">
        <div className="task-title">{task.title}</div>
        <div className="task-description">{task.description}</div>

        <div className="task-status">
          <TaskVisualStatus {...task}/>
        </div>
      </div>
    );
  }
}

function TaskVisualStatus(task: Props) {
  if (task.visualState === TaskVisualState.UpdateInProgress) {
      return <div>updating...</div>;
  }

  if (task.visualState === TaskVisualState.CompleteError) {
      return <div onClick={() => task.onComplete(task)}>error completing. retry?</div>;
  }

  if (task.visualState === TaskVisualState.UnCompleteError) {
      return <div onClick={() => task.onUnComplete(task)}>error un-completing. retry?</div>;
  }

  if (task.completed) {
    return <div onClick={() => task.onUnComplete(task)}>completed</div>;
  }

  return <div onClick={() => task.onComplete(task)}>in progress</div>;
}
