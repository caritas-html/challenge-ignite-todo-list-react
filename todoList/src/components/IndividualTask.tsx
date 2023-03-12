import { useState } from 'react';
import * as Checkbox from '@radix-ui/react-checkbox';
import { Check, Trash } from 'phosphor-react';

import styles from './IndividualTask.module.css';

export function IndividualTask() {
  const [taskChecked, setTaskChecked] = useState(false);

  function handleCheck(check: boolean) {
    setTaskChecked(check);
  }

  return (
    <div className={styles.individualTask}>
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        numquam fugit deleniti.
      </label>
      <button title='Excluir tarefa' className={styles.iconIndividualTask}>
        <Trash size={24} />
      </button>
    </div>
  );
}
