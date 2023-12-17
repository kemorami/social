import img from '../../../img/ava.jpg'
import styles from './Post.module.css'
 function Post({name="Имя",text="Сообщение",img='Аватар'}){
    return(
            <div className={styles.post}>
                <img src={img} alt="" className={styles.avatar}/>
                <p className={styles.postName}>{name}</p>
                <p>{text}</p>
            </div>
    )
 }
 export default Post