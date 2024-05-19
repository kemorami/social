import styles from './Content.module.css'
import Posts from './posts/Posts'
import Profile from '../profile/Profile'
function Content({data,qwerty,postChange,dispatch}){
    return(
        <>
        <Profile/>
        <h2 className={styles.myposts}>Мои посты</h2>
        <Posts data={data} qwerty={qwerty} postChange={postChange} dispatch={dispatch}/>
        </>
    )
} 
export default Content