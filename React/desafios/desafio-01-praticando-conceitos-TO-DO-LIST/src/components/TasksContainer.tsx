import { Task } from './Task'
import styles from './TasksContainer.module.css'


export function TasksContainer() {
    return (
        <section className={styles.tasks}>
            <header className={styles.header}>
                <div>
                    <p>Tarefas Criadas</p>
                    <span>10</span>
                </div>
                <div>
                    <p className={styles.textPurple}>Concluídas</p>
                    <span>2 de 10</span>
                </div>
            </header>

            <div className={styles.list}>
                <Task />
                <Task />
            </div>
        </section>

            
    )
}