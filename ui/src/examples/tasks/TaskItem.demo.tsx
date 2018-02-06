import * as React from 'react';

import { Registry } from 'react-components-viewer';
import { TaskItem } from './TaskItem';
import { TaskVisualState } from './TaskVisualState';

export function tasksDemo(registry: Registry) {
  registry
    .add('in progress', (
      <TaskItem
        id="id1"
        title="task title"
        description="description of this task"
        completed={false}
        visualState={TaskVisualState.None}
        onComplete={dummyHandler}
        onUnComplete={dummyHandler}
      />))
    .add('error completing', (
      <TaskItem
        id="id1"
        title="task title"
        description="description of this task"
        completed={false}
        visualState={TaskVisualState.CompleteError}
        onComplete={dummyHandler}
        onUnComplete={dummyHandler}
      />))
    .add('error uncompleting', (
      <TaskItem
        id="id1"
        title="task title"
        description="description of this task"
        completed={false}
        visualState={TaskVisualState.UnCompleteError}
        onComplete={dummyHandler}
        onUnComplete={dummyHandler}
      />))
    .add('completed', (
      <TaskItem
        id="id1"
        title="task title"
        description="description of this task"
        completed={true}
        visualState={TaskVisualState.None}
        onComplete={dummyHandler}
        onUnComplete={dummyHandler}
      />));
}

function dummyHandler() {
  return 0;
}