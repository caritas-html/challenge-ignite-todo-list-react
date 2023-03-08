import { Header } from './components/Header';
import { Todo } from './components/Todo';

import './global.css';
import styles from './App.module.css';
import { Tasks } from './components/Tasks';

export function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Todo />
      <Tasks />
    </div>
  );
}
