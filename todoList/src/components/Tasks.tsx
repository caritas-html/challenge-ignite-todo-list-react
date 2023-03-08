import { Trash } from 'phosphor-react';
import styles from './Tasks.module.css';

export function Tasks() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.tasksNumbers}>
          <span>Tarefas Criadas</span>
          <span>Concluídas</span>
        </div>
        <div>
          <div className={styles.individualTask}>
            <input type='checkbox' />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus numquam fugit deleniti.
            </p>
            <Trash size={22} />
          </div>
        </div>
      </div>
    </div>
  );
}
