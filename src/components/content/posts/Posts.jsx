import styles from './Posts.module.css'
import Post from '../Post/Post.jsx'

function Posts({data} ){
    return(
        <div className={styles.posts}>
            <input type="text" className={styles.input}/>
            <button className={styles.button}>Добавить пост</button>
            {data.map((item,idx)=> <Post name={item.name} text={item.text} img={item.img} numberLikes={item.numberLikes} key={idx}/>)}
        </div>
    )
}
export default Posts