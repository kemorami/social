import styles from './Error.module.css'
function Error(){
    return(
        <div>
            <h1 className={styles.Error}>ERROR 404</h1>
            <p className={styles.error}>ваша страница не найдена</p>
        </div>
    )
}
export default Error