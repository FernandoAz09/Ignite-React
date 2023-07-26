import { useState } from 'react'
import { Header } from "./components/Header"
import { TasksContainer } from "./components/TasksContainer"
export interface MyTask {
  id: string
  title: string
  isCompleted: boolean
}

export function App() {
  const [tasks, setTasks] = useState<MyTask[]>([
    {
      id: 'teste',
      title: 'teste',
      isCompleted: true
    },
    {
      id: 'asdas',
      title: 'teste 2',
      isCompleted: false
    },
  ])

  function addTask(taskTitle: string) {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false
      }
    ])
  }

  return (
    <>
      <Header onAddTask={addTask}/>
      <TasksContainer tasks={tasks} />
    </>
  )
}
