import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';
import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/naiaraborges.png',
      name: 'Naiara Borges',
      role: 'Front-end Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 💜',},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz para aprimorar meus aprendizados com a tecnologia react. O nome do projeto é Tech Feed. 🚀',},
      {type: 'link', content: 'https://github.com/NaiaraBorges/feed',},
    ],
    publishedAt: new Date('2022-10-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/rocketseat.png',
      name: 'Rocketseat',
      role: 'Escola de Programação'
    },
    content: [
      {type: 'paragraph', content: 'O que é React? ⚛',},
      {type: 'paragraph', content: 'O React é uma biblioteca JavaScript criada pelo Facebook para o desenvolvimento de aplicações front-end. Ele é baseado em componentes, o que permite o reaproveitamento de código e facilita a manutenção. No padrão de arquitetura MVC — Model View Control — ou Modelo Visão Controle, em português, ele é comparado ao desenvolvimento da camada View, que é a interface com o usuário (UI).',},
      {type: 'link', content: 'https://reactjs.org/',},
    ],
    publishedAt: new Date('2022-10-05 20:00:00'),
  },
];

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

//export default App;
