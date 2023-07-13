import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://xesque.rocketseat.dev/users/avatar/profile-25dd73b6-1a79-4763-b4e9-e872e3e9fa24.jpg" />
                    <div className={styles.authorInfo}>
                        <strong>Fernando Azevedo</strong>
                        <span>Front-end Developer</span>
                    </div>
                </div>


                <time title='13 de julho ãs 07:10h' dateTime='2023-07-13 07:10:45'>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>
                    <a href="">jane.design/doctorcare</a>
                </p>
                <p>
                    <a href="">#novoprojeto</a>{' '}
                    <a href="">#nlw</a>{' '}
                    <a href="">#rocketseat</a>
                </p>
            </div>
        </article>
    )
}




