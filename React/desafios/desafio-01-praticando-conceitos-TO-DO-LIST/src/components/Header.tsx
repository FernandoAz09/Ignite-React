import styles from './Header.module.css'
import todoLogo from '../assets/todoLogo.svg'
import { PlusCircle } from '@phosphor-icons/react'
import { ChangeEvent, FormEvent, useState } from 'react'

interface Props {
    onAddTask: (taskTitle: string) => void
}

export function Header({ onAddTask }: Props) {
    const [title, setTitle] = useState('')

    function handleSubmit(event: FormEvent) {
        event.preventDefault()
        if (title.length > 0 && title.trim() !== '') {
            onAddTask(title)
            setTitle('')
        }
        setTitle('')
    }
    function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
        setTitle(event.target.value)
    }

    return (
        <header className={styles.header}>
            <img src={todoLogo} alt="Logotipo do Ignite" />

            <form className={styles.newTaskForm} onSubmit={handleSubmit}>
                <input
                    placeholder="Adicione uma nova tarefa"
                    onChange={onChangeTitle}
                    value={title}
                    required
                />
                <button type="submit" title="Criar tarefa">
                    Criar <PlusCircle className={styles.plusIcon} size={20} />
                </button>
            </form>
        </header>
    )
}