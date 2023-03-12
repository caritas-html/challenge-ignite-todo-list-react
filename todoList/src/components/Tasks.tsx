import { NoTasks } from './NoTasks';
import { IndividualTask } from './IndividualTask';

import styles from './Tasks.module.css';

export function Tasks() {
  const teste = 1;

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
          {teste > 0 ? <IndividualTask /> : <NoTasks />}
        </div>
      </div>
    </div>
  );
}
