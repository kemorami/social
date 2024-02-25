import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'
import Friend from '../content/friend/Friend'

function Navbar({data}) {
    return(
        <div className={styles.navbar}>
            <div className={styles.navlink}>
                <NavLink to="/content" className={styles.href}>Профиль</NavLink>
                <NavLink to="/dialogs" className={styles.href}>Сообщения</NavLink>
                <NavLink to="/users" className={styles.href}>Пользователи</NavLink>
            </div>
            <h2 className={styles.friend}>Friend</h2>
            <div className={styles.Friend}>
                {data.map((item,idx)=> <Friend name={item.name} img={item.img} key={idx}/>)}
            </div>
        </div>
    )
}
export default Navbar