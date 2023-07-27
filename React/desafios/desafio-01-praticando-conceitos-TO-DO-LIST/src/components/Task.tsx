import { /*ClipboardText*/ Trash } from '@phosphor-icons/react'

import styles from './Task.module.css'
import { MyTask } from '../App'

interface Props {
    task: MyTask
    onDelete: (taskId: string) => void
}

export function Task({ task, onDelete }: Props) {
    return (
        <div className={styles.task}>
            <button className={styles.checkContainer}>
                <div>
                </div>
            </button>
            <p>{task.title}</p>
            <button
                title="Deletar tarefa"
                className={styles.deleteButton}
                onClick={() => onDelete(task.id)}>
                <Trash size={20} />
            </button>
        </div>
    )
}