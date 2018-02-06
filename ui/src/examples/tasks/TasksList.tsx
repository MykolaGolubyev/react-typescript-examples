import * as React from 'react';
import { TaskWithVisualState } from './TaskWithVisualState';
import { TaskHandlers } from './TaskHandlers';
import { TaskItem } from './TaskItem';

export interface Props extends TaskHandlers {
  tasks: TaskWithVisualState[];
}

export class TasksList extends React.PureComponent<Props> {
  render() {
    const {tasks, onComplete, onUnComplete} = this.props;

    return (
      <div className="tasks-list">
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            {...task}
            onComplete={onComplete}
            onUnComplete={onUnComplete}
          />
        ))}
      </div>
    );
  }
}