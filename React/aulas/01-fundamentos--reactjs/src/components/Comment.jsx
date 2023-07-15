import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'

import styles from './Comment.module.css'

export function Comment() {
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
                        <button title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>Muito bom Fernando, parabéns!! 👏👏</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp size={20} />
                        Aplaudir<span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}