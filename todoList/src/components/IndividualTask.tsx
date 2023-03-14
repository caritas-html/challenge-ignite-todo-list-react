import { useState } from 'react';
import * as Checkbox from '@radix-ui/react-checkbox';
import { Check, Trash } from 'phosphor-react';

import styles from './IndividualTask.module.css';
import { TaskType } from './Tasks';

export function IndividualTask({ id, task, completed }: TaskType) {
  const [taskChecked, setTaskChecked] = useState(false);

  function handleCheck(check: boolean) {
    setTaskChecked(check);
  }

  return (
    <div className={styles.individualTask}>
      <div className={styles.wrapperCheckAndLabel}>
        <Checkbox.Root
          checked={taskChecked}
          onCheckedChange={handleCheck}
          id='temporaly'
          className={
            taskChecked ? styles.checkboxChecked : styles.checkboxUnchecked
          }
        >
          <div>
            <Checkbox.Indicator>
              <Check size={10} className={styles.checkIcon} />
            </Checkbox.Indicator>
          </div>
        </Checkbox.Root>
        <label htmlFor='temporaly' className={styles.taskLabel}>
          {task}
        </label>
      </div>
      <div>
        <button title='Excluir tarefa' className={styles.iconIndividualTask}>
          <Trash size={24} />
        </button>
      </div>
    </div>
  );
}
