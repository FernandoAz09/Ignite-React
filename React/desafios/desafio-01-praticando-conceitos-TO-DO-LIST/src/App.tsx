import { Header } from "./components/Header"
import { PlusCircle } from "@phosphor-icons/react"

import './global.css'
import styles from './App.module.css'

export function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <form className={styles.taskForm}>
          <textarea placeholder="Adicione uma nova tarefa"></textarea>
          <button type="submit">Criar <PlusCircle className={styles.plusIcon} size={20} /></button>
        </form>
      </div>
    </>
  )
}
