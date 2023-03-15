import { NoTasks } from './NoTasks';
import { IndividualTask } from './IndividualTask';

import styles from './Tasks.module.css';
import { Todo } from './Todo';
import { useState } from 'react';

export interface TaskType {
  id: number;
  task: string;
  completed: boolean;
}

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

export function Tasks() {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  function handleCheck(taskToUnched: number) {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskToUnched) {
          task.completed = !task.completed;
        }
        return task;
      })
    );
  }

  function handleDelete(taskToDelete: number) {
    const taskWithouDeletedOne = tasks.filter((task) => {
      return task.id !== taskToDelete;
    });

    setTasks(taskWithouDeletedOne);
  }

  return (
    <>
      <Todo tasks={tasks} setTasks={setTasks} />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.tasksNumbers}>
            <span className={styles.tasksCreated}>
              Tarefas Criadas{' '}
              <span className={styles.tasksCreatedAmount}>5</span>
            </span>
            <span className={styles.tasksDone}>
              Concluídas <span className={styles.tasksDoneAmount}>2 de 5</span>
            </span>
          </div>

          <div className={styles.wrapperIndividualTask}>
            {tasks.length === 0 ? (
              <NoTasks />
            ) : (
              tasks.map((task) => {
                return (
                  <IndividualTask
                    key={task.id}
                    id={task.id}
                    task={task.task}
                    completed={task.completed}
                    onCheck={handleCheck}
                    onDelete={handleDelete}
                  />
                );
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
}
