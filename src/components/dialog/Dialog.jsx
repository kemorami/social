import styles from'./Dialog.module.css'
function Dialog({name="Имя",text="Текст"}){
    return(
        <div className={styles.dialog}>
            <p>{name}</p>
            <p>{text}</p>
        </div>
    )
}
export default Dialog