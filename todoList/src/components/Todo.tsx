import { PlusCircle } from 'phosphor-react';

import styles from './Todo.module.css';

export function Todo() {
  return (
    <div className={styles.wrapper}>
      <input type='text' placeholder='Adicione uma nova tarefa' />
      <button>
        Criar
        <PlusCircle size={22} weight={'bold'} />
      </button>
    </div>
  );
}
