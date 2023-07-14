import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://xesque.rocketseat.dev/users/avatar/profile-25dd73b6-1a79-4763-b4e9-e872e3e9fa24.jpg" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Fernando Azevedo</strong>
                            <time title='13 de julho ãs 07:10h' dateTime='2023-07-13 07:10:45'> Cerca de 1h atrás</time>
                        </div>
                        <button title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp size={20}/>
                        Aplaudir<span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}