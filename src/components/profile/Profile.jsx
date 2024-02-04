import styles from './Profile.module.css'
import img from '../../img/ava.jpg'
function Profile() {
    return(
        <div className={styles.me}>
            <img src={img} alt="" className={styles.ava} />
            <p className={styles.name}>Алексей</p>
        </div>
    )
}
 export default Profile