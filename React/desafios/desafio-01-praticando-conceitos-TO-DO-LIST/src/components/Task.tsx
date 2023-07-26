import { /*ClipboardText*/ Trash } from '@phosphor-icons/react'

import styles from './Task.module.css'

export function Task() {
    return (
        <div className={styles.task}>
            <button className={styles.checkContainer}>
                <div>
                </div>
            </button>
            <p>loren</p>
            <button title="Deletar tarefa" className={styles.deleteButton}><Trash size={20} /></button>
        </div>
    )
}