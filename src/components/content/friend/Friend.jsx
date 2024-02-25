import styles from './Friend.module.css'
function Friend({name,img}){
    return(
        <div className={styles.Friend}>

            <img src={img} alt="" className={styles.img}/>
            <p className={styles.name}>{name}</p>
        </div>
    )
}
export default Friend