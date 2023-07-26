import styles from './Header.module.css'
import todoLogo from '../assets/todoLogo.svg'
import { PlusCircle } from '@phosphor-icons/react'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={todoLogo} alt="Logotipo do Ignite" />

            <form className={styles.newTaskForm}>
                <input placeholder="Adicione uma nova tarefa" />
                <button type="submit" title="Criar tarefa">
                    Criar <PlusCircle className={styles.plusIcon} size={20} />
                </button>
            </form>
        </header>
    )
}