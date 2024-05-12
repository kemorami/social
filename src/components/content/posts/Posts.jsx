import styles from './Posts.module.css'
import Post from '../Post/Post.jsx'
import React from 'react';
let postsText = React.createRef()
let postsName = React.createRef()

function Posts({data,qwerty,postChange} ){
    let addPosts =()=>{
        qwerty(postsText.current.value, postsName.current.value)
    }
    // let changePost = ()=>{
    //     postChange(postChange.current.value)
    //     console.log(text);
    // }
    return(
        <div className={styles.posts}>
            <input type="text" ref={postsName} className={styles.input} placeholder='Введите имя.'/>
            <input type="text" ref={postsText} className={styles.input} placeholder='Введите текст поста.'/>
            <button className={styles.button} onClick={addPosts}>Добавить пост</button>
            {data.map((item,idx)=> <Post name={item.name} text={item.text} img={item.img} numberLikes={item.numberLikes} key={idx}/>)}
        </div>
    )
}
export default Posts