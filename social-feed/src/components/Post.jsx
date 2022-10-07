import { format, formatDistanceToNow } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';
import { useState } from 'react';

import { Comment } from "./Comment";
import { Avatar } from './Avatar';

import styles from "./Post.module.css";


export function Post({ author, publishedAt, content }) {

  const [comments, setComments] = useState([
    'Post muito legal, adorei 👏!!'
  ])

  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBr,
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBr,
    addSuffix: true,
  })

  function handleCreateNewComment() {
    event.preventDefault()
    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }

  function handleNewCommentChange() {
    setNewCommentText(event.target.value);
  }

  function deleteComment(commentToDelete) {
   const commentsWithoutDeleteOne = comments.filter(comment => {
    return comment != commentToDelete;
   })

   setComments(commentsWithoutDeleteOne);
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}>
        </time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if(line.type == 'paragraph') {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type == 'link') {
            return <p key={line.content}><a href="#">{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
         name="comment"
         placeholder="Deixe um comentário"
         value={newCommentText}
         onChange={handleNewCommentChange}
         />

        <footer>
        <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
          <Comment
           key={comment}
           content={comment}
           onDeleteComment={deleteComment}
          />
         )
        })}
      </div>
    </article>
  );
}
