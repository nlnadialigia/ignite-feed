import styles from "./App.module.css"
import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"
import "./global.css"

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Nádia Ligia"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi rerum eos id ex aut, ratione quos officia natus corrupti, saepe perferendis sint? Voluptatum, ipsam? Ratione sint nemo laborum aperiam expedita"
          />
          <Post
            author="Joana D'arc"
            content="Nulla quis lorem ut libero malesuada feugiat."
          />
        </main>
      </div>
    </div>
  )
}
