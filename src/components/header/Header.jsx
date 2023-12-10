import styles from './Header.module.css'
import img from '../../img/logo.jpeg'
function Header() {
    return(
        <div className={styles.header}>
        <img src={img} alt="" className={styles.img}/>
        <p className={styles.text}>Алексей</p>
        </div>
    )
}
export default Header