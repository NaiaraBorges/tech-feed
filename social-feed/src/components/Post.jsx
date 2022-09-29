import styles from './Post.module.css';

export function Post() {
  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/naiaraborges.png" />
          <div className={styles.authorInfo}>
            <strong>Naiara Borges</strong>
            <span>Front-end e Mobile</span>
          </div>
        </div>
        <time title="26 de setembro de 2022 às 14:00" dateTime="2022-09-29 14:00:30">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 </p>

        <p>👉<a href=""> jane.design/doctorcare</a></p>

        <p><a href="">#novoprojeto</a> <a href="">#nlw</a> <a href="">#rocketseat</a></p>
      </div>
    </article>
  )
}
