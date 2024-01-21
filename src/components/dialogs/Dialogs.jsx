import styles from './Dialogs.module.css'
import Dialog from '../dialog/Dialog'
function Dialogs(){
    return(
    <>
        <h1>Диалоги</h1>
        <div className={styles.dialogs}>
            <Dialog name='Андрей' text='Привет!'/>
            <Dialog name='Мартин' text='Доброе утро!'/>
            <Dialog name='Артём' text='Добрый вечер!'/>
            <div className={styles.div}>
                <input type="text" className={styles.input} />
                <button className={styles.send}>Отправить</button>
            </div>
        </div>
    </>

    )
}
export default Dialogs