import { Check, Trash } from 'phosphor-react';
import * as Checkbox from '@radix-ui/react-checkbox';

import styles from './Tasks.module.css';
import { useState } from 'react';

export function Tasks() {
  const [taskChecked, setTaskChecked] = useState(false);

  function handleCheck(check: boolean) {
    setTaskChecked(check);
  }

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
            <div>
              <Checkbox.Root
                checked={taskChecked}
                onCheckedChange={handleCheck}
                className={styles.checkboxRoot}
              >
                <div>
                  <Checkbox.Indicator>
                    <Check size={10} className={styles.checkIcon} />
                  </Checkbox.Indicator>
                </div>
              </Checkbox.Root>
            </div>
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
            <div>
              <Checkbox.Root
                checked={taskChecked}
                onCheckedChange={handleCheck}
                className={styles.checkboxRoot}
              >
                <div>
                  <Checkbox.Indicator>
                    <Check size={10} className={styles.checkIcon} />
                  </Checkbox.Indicator>
                </div>
              </Checkbox.Root>
            </div>
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
