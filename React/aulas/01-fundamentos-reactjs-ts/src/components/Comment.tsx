import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from './Avatar'

import styles from './Comment.module.css'


interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void
}


export function Comment({ content, onDeleteComment } : CommentProps) {

    const [likeCount, setLikeCount] = useState(0)

    function handleLikeComment() {
        setLikeCount(likeCount + 1)
    }

    function handleDeleteComment() {
        onDeleteComment(content)
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/luizazevedo.png" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Luiz Azevedo</strong>
                            <time title='13 de julho ãs 07:10h' dateTime='2023-07-13 07:10:45'> Cerca de 1h atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp size={20} />
                        Aplaudir<span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}