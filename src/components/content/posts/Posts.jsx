import styles from './Posts.module.css'
import Post from '../Post/Post.jsx'
import React from 'react';
let postsText = React.createRef()

function Posts({data,qwerty} ){
    let addPosts =()=>{
        qwerty(postsText.current.value)
    }
    return(
        <div className={styles.posts}>
            <input type="text" ref={postsText} className={styles.input}/>
            <button className={styles.button} onClick={addPosts}>Добавить пост</button>
            {data.map((item,idx)=> <Post name={item.name} text={item.text} img={item.img} numberLikes={item.numberLikes} key={idx}/>)}
        </div>
    )
}
export default Posts