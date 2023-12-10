import styles from './Navbar.module.css'

function Navbar() {
    return(
        <div className={styles.navbar}>
    <a href="" className={styles.href}>Профиль</a>
    <a href="" className={styles.href}>Сообщения</a>
    <a href="" className={styles.href}>Пользователи</a>
    </div>
    )
}
export default Navbar