import styles from './Posts.module.css'
import Post from '../Post/Post.jsx'
import React from 'react';
let postsText = React.createRef()
let postsName = React.createRef()

function Posts({data,qwerty,postChange,dispatch} ){
    let addPosts =()=>{
        // qwerty(postsText.current.value, postsName.current.value)
        dispatch({type:"add-post"})
    }
    let changePost = ()=>{
        // postChange(postChange.current.value)
        // console.log(text);
        dispatch({type:"post-change", text:postsText.current.value})
    }
    return(
        <div className={styles.posts}>
            <input type="text" ref={postsName} className={styles.input} placeholder='Введите имя.'/>
            <input onChange={changePost} type="text" ref={postsText} className={styles.input} placeholder='Введите текст поста.'/>
            <button className={styles.button} onClick={addPosts}>Добавить пост</button>
            {data.map((item,idx)=> <Post name={item.name} text={item.text} img={item.img} numberLikes={item.numberLikes} key={idx}/>)}
        </div>
    )
}
export default Posts