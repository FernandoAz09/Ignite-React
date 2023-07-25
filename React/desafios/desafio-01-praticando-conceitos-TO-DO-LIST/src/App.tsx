import { Header } from "./components/Header"
import { PlusCircle } from "@phosphor-icons/react"
import { Task } from "./components/TaskContainer"

import './global.css'
import styles from './App.module.css'

export function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <form className={styles.taskForm}>
          <textarea placeholder="Adicione uma nova tarefa"></textarea>
          <button type="submit" title="Criar tarefa">
            Criar <PlusCircle className={styles.plusIcon} size={20} />
          </button>
        </form>
      </div>

      <div className={styles.taskContainer}>
        <header>
          <div className={styles.createdTasks}>
            Tarefas Criadas <span>0</span>
          </div>
          <div className={styles.tasksCompleted}>
            Concluídas <span>0</span>
          </div>
        </header>
        <Task />
      </div>
    </>
  )
}
