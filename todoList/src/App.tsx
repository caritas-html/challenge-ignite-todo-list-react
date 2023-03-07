import { Header } from './components/Header';
import { Todo } from './components/Todo';

import './global.css';
import styles from './App.module.css';

export function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Todo />
    </div>
  );
}
