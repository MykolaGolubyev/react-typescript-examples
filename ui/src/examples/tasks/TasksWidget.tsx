import * as React from 'react';
import { Task } from './Task';
import { Tasks } from './Tasks';
import { TasksService } from './TasksService';
import { TaskVisualState } from './TaskVisualState';
import { TasksList } from './TasksList';

export interface Props {
  service: TasksService;
}

export interface State {
  tasks: Tasks;
  isLoading: boolean;
}

export class TasksWidget extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {tasks: Tasks.empty(), isLoading: true};
  }

  render() {
    const {tasks, isLoading} = this.state;

    if (isLoading) {
      return <div className="loading">loading...</div>;
    }

    return (
      <TasksList
        tasks={tasks.tasks}
        onComplete={this.onComplete}
        onUnComplete={this.onUnComplete}
      />
    );
  }

  componentDidMount() {
    const {service} = this.props;

    service.allActiveTasks().then(tasks => {
      this.setState({tasks: Tasks.fromServerData(tasks), isLoading: false});
    });
  }

  onComplete = (task: Task) => {
    this.updateTasksState(task, TaskVisualState.UpdateInProgress);

    this.props.service.completeTask(task)
      .then((completedTask) => this.updateTasksState(completedTask, TaskVisualState.None));
  }

  onUnComplete = (task: Task) => {
    this.updateTasksState(task, TaskVisualState.UpdateInProgress);

    this.props.service.uncompleteTask(task)
      .then((unCompletedTask) => this.updateTasksState(unCompletedTask, TaskVisualState.None));
  }

  updateTasksState = (newTask: Task, visualState: TaskVisualState) => {
    this.setState(prevState => {
      return {tasks: prevState.tasks.update({...newTask, visualState})};
    });
  }
}
