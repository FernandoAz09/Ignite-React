import styles from './Task.module.css'
import { ClipboardText, Trash } from '@phosphor-icons/react'


export function Task() {
    return (
        <div className={styles.tasksWrapper}>
            {/* <div className={styles.noTasks} >
                <div className={styles.taskIcon}><ClipboardText size={56} /></div>
                <strong> Você ainda não tem tarefas cadastradas</strong>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div> */}

            <div className={styles.hasTask} >
                <div className={styles.task}>
                    <input type="checkbox" />
                    <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
                    <Trash size={20} />
                </div>
            </div>
        </div>
    )
}