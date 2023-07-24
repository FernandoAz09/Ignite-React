import styles from './Task.module.css'
import { ClipboardText } from '@phosphor-icons/react'


interface Task {
    hasTask?: boolean
}

export function Task({ hasTask = false }) {
    return (
        <div className={styles.tasksWrapper}>
            <div className={hasTask ? styles.task : styles.noTasks} >
                <div className={styles.taskIcon}><ClipboardText size={56} /></div>
                <strong> Você ainda não tem tarefas cadastradas</strong>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
        </div>
    )
}