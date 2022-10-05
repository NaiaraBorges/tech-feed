import styles from "./Post.module.css";

import { Comment } from "./Comment";
import { Avatar } from './Avatar';


export function Post(props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/naiaraborges.png" />
          <div className={styles.authorInfo}>
            <strong>Naiara Borges</strong>
            <span>Front-end e Mobile</span>
          </div>
        </div>
        <time
          title="26 de setembro de 2022 às 14:00"
          dateTime="2022-09-29 14:00:30"
        >
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>

      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />

        <footer>
        <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
      <Comment />
      <Comment />
      <Comment />

      </div>
    </article>
  );
}
