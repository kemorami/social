import img from '../../../img/ava.jpg'
import styles from './Post.module.css'
import like from '../../../img/pngwing.com.png'
 function Post({name="Имя",text="Сообщение",img,numberLikes="1"}){
    return(
            <div className={styles.post}>
                <img src={img} alt="avatar" className={styles.avatar}/>
                <p className={styles.postName}>{name}</p>
                <p>{text}</p>
                <div className={styles.likes}>
                    <img src={like} alt="" className={styles.like}/>
                    <p className={styles.likeNumber}>{numberLikes}</p>
                </div>
            </div>
    )
 }
 export default Post