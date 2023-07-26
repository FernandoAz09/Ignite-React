import { /*ClipboardText*/ Trash } from '@phosphor-icons/react'

import styles from './Task.module.css'
import { MyTask } from '../App'

interface Props {
    task:MyTask
}

export function Task({ task }: Props) {
    return (
        <div className={styles.task}>
            <button className={styles.checkContainer}>
                <div>
                </div>
            </button>
            <p>{task.title}</p>
            <button title="Deletar tarefa" className={styles.deleteButton}><Trash size={20} /></button>
        </div>
    )
}