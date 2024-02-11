import styles from './Posts.module.css'
import Post from '../Post/Post.jsx'
import img from '../../../img/fenics.jpg'
import imgg from '../../../img/i.webp'
import immg from '../../../img/ava.jpg'
let postsUser = [{name:"Алексей", text:"Всем привет", img:img, numberLikes:"10"},{name:"Кирилл", text:"Да", img:imgg, numberLikes:"5"},{name:"Матвей", text:"Нет", img:immg, numberLikes:"129"}]
function Posts(){
    return(
        <div className={styles.posts}>
            <input type="text" className={styles.input}/>
            <button className={styles.button}>Добавить пост</button>
            {postsUser.map((item,idx)=> <Post name={item.name} text={item.text} img={item.img} numberLikes={item.numberLikes} key={idx}/>)}
        </div>
    )
}
export default Posts