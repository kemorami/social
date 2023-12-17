import styles from './Posts.module.css'
import Post from '../Post/Post.jsx'
import img from '../../../img/fenics.jpg'
import imgg from '../../../img/i.webp'
import immg from '../../../img/ava.jpg'
function Posts(){
    return(
        <div className={styles.posts}>
            <input type="text" className={styles.input}/>
            <button className={styles.button}>Добавить пост</button>
            <Post name='Алексей' text='Всем привет' img={img}/>
            <Post name='Кирилл' text='Да' img={imgg}/>
            <Post name='Матвей' text='Нет' img={immg}/>
        </div>
    )
}
export default Posts