import styles from './Content.module.css'
import img from '../../img/ava.jpg'
import Posts from './posts/Posts'
function Content(){
    return(
        <div className={styles.content}>
        <div className={styles.me}>
            <img src={img} alt="" className={styles.ava} />
            <p className={styles.name}>Алексей</p>
        </div>
        <h2 className={styles.myposts}>Мои посты</h2>
        <Posts/>
        </div>
    )
} 
export default Content