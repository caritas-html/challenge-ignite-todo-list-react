import { Trash } from 'phosphor-react';
import * as Checkbox from '@radix-ui/react-checkbox';

import styles from './Tasks.module.css';

export function Tasks() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.tasksNumbers}>
          <span className={styles.tasksCreated}>
            Tarefas Criadas <span className={styles.tasksCreatedAmount}>5</span>
          </span>
          <span className={styles.tasksDone}>
            Concluídas <span className={styles.tasksDoneAmount}>2 de 5</span>
          </span>
        </div>
        <div className={styles.wrapperIndividualTask}>
          <div className={styles.individualTask}>
            <Checkbox.Root className={styles.checkboxRoot}>
              <Checkbox.Indicator className={styles.checkboxindicator} />
            </Checkbox.Root>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus numquam fugit deleniti.
            </p>
            <button
              title='Excluir tarefa'
              className={styles.iconIndividualTask}
            >
              <Trash size={24} />
            </button>
          </div>
          <div className={styles.individualTask}>
            <Checkbox.Root className={styles.checkboxRoot}>
              <Checkbox.Indicator />
            </Checkbox.Root>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus numquam fugit deleniti.
            </p>
            <button
              title='Excluir tarefa'
              className={styles.iconIndividualTask}
            >
              <Trash size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
