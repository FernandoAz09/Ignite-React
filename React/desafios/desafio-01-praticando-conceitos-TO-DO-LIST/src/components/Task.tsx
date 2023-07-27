import { Trash } from '@phosphor-icons/react'

import styles from './Task.module.css'
import { MyTask } from '../App'

interface Props {
    task: MyTask
    onDelete: (taskId: string) => void
    onComplete: (taskId: string) => void
}

export function Task({ task, onDelete, onComplete }: Props) {
    return (
        <div className={styles.task}>
            <button className={styles.checkContainer} onClick={() => onComplete(task.id)}>
                {task.isCompleted ? <div className={styles.isCompleted} /> : <div />}
            </button>
            <p className={task.isCompleted ? styles.textCompleted : ''}>{task.title}</p>
            <button
                title="Deletar tarefa"
                className={styles.deleteButton}
                onClick={() => onDelete(task.id)}>
                <Trash size={20} />
            </button>
        </div>
    )
}