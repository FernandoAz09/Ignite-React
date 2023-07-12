import { Header } from "./components/Header"
import { Post } from "./Post"
import { Sidebar } from "./components/Sidebar"

import styles from "./App.module.css"
import "./global.css"

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Fernando Azevedo"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus ad adipisci a saepe cumque aliquid odio suscipit libero quo odit totam autem animi quisquam cum, sed quidem explicabo rem aliquam."
          />
          <Post
            author="Scarlet Fernandes"
            content="Verdade!"
          />
        </main>
      </div>
    </div>
  )
}