import * as React from 'react';
import { ComponentsViewer, Registry } from 'react-components-viewer';
import { tasksWidgetDemo } from './examples/tasks/TasksWidget.demo';
import { tasksDemo } from './examples/tasks/TaskItem.demo';

const core = new Registry('core');
core.registerAsTwoColumnTable('Tasks', tasksDemo);
core.registerAsTwoColumnTable('Tasks Widget', tasksWidgetDemo);

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ComponentsViewer registries={[core]}/>
      </div>
    );
  }
}

export default App;
