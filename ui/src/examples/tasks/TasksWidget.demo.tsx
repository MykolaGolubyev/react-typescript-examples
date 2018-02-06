import * as React from 'react';

import { Registry } from 'react-components-viewer';
import { TasksWidget } from './TasksWidget';
import { TasksFakeService } from './TasksFakeService';

export function tasksWidgetDemo(registry: Registry) {
  const tasks = [
    {
      id: 'id1',
      completed: false,
      title: 'task title #1',
      description: 'test description one'
    },
    {
      id: 'id2',
      completed: true,
      title: 'task title #2',
      description: 'test description two'
    }];

  const service = new TasksFakeService(tasks);

  registry.add('server without errors',
               <TasksWidget service={service}/>);
}