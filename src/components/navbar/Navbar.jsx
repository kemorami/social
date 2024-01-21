import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

function Navbar() {
    return(
        <div className={styles.navbar}>
            <NavLink to="/content" className={styles.href}>Профиль</NavLink>
            <NavLink to="/dialogs" className={styles.href}>Сообщения</NavLink>
            <NavLink to="/users" className={styles.href}>Пользователи</NavLink>
        </div>
    )
}
export default Navbar