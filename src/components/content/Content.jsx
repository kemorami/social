import styles from './Content.module.css'
import Posts from './posts/Posts'
import Profile from '../profile/Profile'
function Content({data,qwerty}){
    return(
        <>
        <Profile/>
        <h2 className={styles.myposts}>Мои посты</h2>
        <Posts data={data} qwerty={qwerty}/>
        </>
    )
} 
export default Content