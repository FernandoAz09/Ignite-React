import { ClipboardText } from '@phosphor-icons/react'
import { MyTask } from '../App'
import { Task } from './Task'

import styles from './TasksContainer.module.css'

interface Props {
    tasks: MyTask[]
    onDelete: (taskId: string) => void
    onComplete: (taskId: string) => void
}

export function TasksContainer({ tasks, onDelete, onComplete }: Props) {
    const tasksQuantity = tasks.length
    const completedTasks = tasks.filter(task => task.isCompleted).length

    return (
        <section className={styles.tasks}>
            <header className={styles.header}>
                <div>
                    <p>Tarefas Criadas</p>
                    <span>{tasksQuantity}</span>
                </div>
                <div>
                    <p className={styles.textPurple}>Concluídas</p>
                    <span>{completedTasks} de {tasksQuantity}</span>
                </div>
            </header>

            <div className={tasks.length <= 0 ? styles.listEmpty : styles.list}>
                {tasks.map((task) => (
                    <Task
                        key={task.id}
                        task={task}
                        onDelete={onDelete}
                        onComplete={onComplete}
                    />
                ))}


                {tasks.length <= 0 && (
                    <section className={styles.empty}>
                        <ClipboardText size={50} />
                        <div>
                            <p>Você ainda não tem tarefas cadastradas</p>
                            <span>Crie tarefas e organize seus itens a fazer</span>
                        </div>
                    </section>
                )}

            </div>
        </section>


    )
}