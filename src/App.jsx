import styles from "./App.module.css"
import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"
import "./global.css"

const posts = [
  {
    id: 1,
    author: {
      name: "Jane Doe",
      avatarUrl: "https://github.com/nlnadialigia.png",
      role: "Backend Developer"
    },
    content: [
      {type: "paragraph", content: "Fala galeraa 👋"},
      {type: "paragraph", content: "Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      {type: "paragraph", content: "Fala galeraa 👋"},
      {type: "link", content: "jane.design/doctorcare"}
    ],
    publishedAt: new Date("2024-02-28 20:00:00")
  },
  {
    id: 2,
    author: {
      name: "Mayk Brito",
      avatarUrl: "https://github.com/maykbrito.png",
      role: "Educator"
    },
    content: [
      {type: "paragraph", content: "Fala galeraa 👋"},
      {type: "paragraph", content: "Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      {type: "paragraph", content: "Fala galeraa 👋"},
      {type: "link", content: "jane.design/doctorcare"}
    ],
    publishedAt: new Date("2024-02-28 17:00:00")
  }
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id} 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
