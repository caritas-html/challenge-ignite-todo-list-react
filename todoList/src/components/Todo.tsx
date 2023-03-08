import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from 'react';

import styles from './Todo.module.css';

interface Tasks {
  id: number;
  content: string;
}

export function Todo() {
  const [tasks, setTasks] = useState<Tasks[]>([]);
  const [newTask, setNewTask] = useState('');

  console.log('tasks', tasks);

  function handleNewTask(event: FormEvent) {
    event.preventDefault();

    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
        content: newTask,
      },
    ]);

    setNewTask('');
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleNewTask}>
        <input
          name='task'
          value={newTask}
          onChange={handleNewTaskChange}
          type='text'
          placeholder='Adicione uma nova tarefa'
          required
        />
        <button>
          Criar
          <PlusCircle size={22} weight={'bold'} />
        </button>
      </form>
    </div>
  );
}
