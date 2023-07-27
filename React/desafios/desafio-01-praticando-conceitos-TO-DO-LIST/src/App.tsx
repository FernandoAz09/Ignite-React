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
    // {
    //   id: 'teste',
    //   title: 'teste',
    //   isCompleted: true
    // },
    // {
    //   id: 'asdas',
    //   title: 'teste 2',
    //   isCompleted: false
    // },
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

  function deleteTask(taskId: string) {
    const newTasks = tasks.filter((task) => task.id !== taskId)
    setTasks(newTasks)
  }

  function toggleTask(taskId: string) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      }
      return task
    })
    setTasks(newTasks)
  }
  return (
    <>
      <Header onAddTask={addTask} />
      <TasksContainer
        tasks={tasks}
        onDelete={deleteTask}
        onComplete={toggleTask}
      />
    </>
  )
}
