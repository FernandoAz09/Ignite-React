import styles from './Sidebar.module.css';
import {PencilLine} from 'phosphor-react' 

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1631374750606-bb2229939980?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=470&q=50" alt=""
            />

            <div className={styles.profile}>

                <img className={styles.avatar} src="https://xesque.rocketseat.dev/users/avatar/profile-25dd73b6-1a79-4763-b4e9-e872e3e9fa24.jpg" />

                <strong>Fernando Azevedo</strong>
                <span>Front-end Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}