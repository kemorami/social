import styles from './Content.module.css'
import img from '../../img/ava.jpg'
function Content(){
    return(
        <div className={styles.content}>
        <div className={styles.me}>
            <img src={img} alt="" className={styles.ava} />
            <p className={styles.name}>Алексей</p>
        </div>
        <h2 className={styles.myposts}>Мои посты</h2>
        <div className={styles.posts}>
            <input type="text" className={styles.input}/>
            <button className={styles.button}>Добавить пост</button>
        <div className={styles.post}>
                <img src={img} alt="" className={styles.avatar}/>
                <p className={styles.postName}>Алексей</p>
                <p>Всем привет</p>
            </div>
        </div>
        </div>
    )
} 
export default Content