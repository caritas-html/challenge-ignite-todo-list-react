import { Header } from './components/Header';
import { Todo } from './components/Todo';
import { Tasks, TaskType } from './components/Tasks';

import './global.css';
import styles from './App.module.css';

const tasks: TaskType[] = [
  {
    id: 1,
    task: 'Acordar cedo.',
    completed: true,
  },
  {
    id: 2,
    task: 'Tomar Água',
    completed: false,
  },
  {
    id: 3,
    task: 'Ler',
    completed: false,
  },
  {
    id: 4,
    task: 'Estudar ReactJs',
    completed: true,
  },
];

export function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Todo />
      {tasks.map((task) => {
        return <Tasks key={task.id} tasks={task} />;
      })}
    </div>
  );
}
