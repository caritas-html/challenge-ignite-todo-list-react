import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { TaskType } from './Tasks';

import styles from './Todo.module.css';

interface TasksProps {
  tasks: TaskType[];
  setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>;
}

export function Todo({ tasks, setTasks }: TasksProps) {
  const [newTask, setNewTask] = useState('');
  const isNewTaskEmpty = newTask.length === 0;

  function handleNewTask(event: FormEvent) {
    event.preventDefault();

    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
        task: newTask,
        completed: false,
      },
    ]);

    setNewTask('');
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setNewTask(event.target.value);
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Digite uma Task antes de Criar!');
  }

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleNewTask} className={styles.todoForm}>
        <input
          type='text'
          value={newTask}
          onChange={handleNewTaskChange}
          onInvalid={handleNewCommentInvalid}
          placeholder='Adicione uma nova tarefa'
          required
        />
        <button type='submit' disabled={isNewTaskEmpty}>
          Criar
          <PlusCircle size={22} weight={'bold'} />
        </button>
      </form>
    </div>
  );
}
