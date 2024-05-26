import styles from './Content.module.css'
import Posts from './posts/Posts'
import Profile from '../profile/Profile'
function Content({data,qwerty,postChange,dispatch,dataText,dataName}){
    return(
        <>
        <Profile/>
        <h2 className={styles.myposts}>Мои посты</h2>
        <Posts data={data} qwerty={qwerty} postChange={postChange} dispatch={dispatch} dataText={dataText} dataName={dataName}/>
        </>
    )
} 
export default Content