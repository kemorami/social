import styles from './Dialogs.module.css'
import Dialog from '../dialog/Dialog'
function Dialogs(){
    return(
    <>
        <h1>Диалоги</h1>
        <div className={styles.dialogs}>
            <Dialog name='Андрей' text='Привет!' id='1'/>
            <Dialog name='Мартин' text='Доброе утро!' id='2'/>
            <Dialog name='Артём' text='Добрый вечер!' id='3'/>
            <div className={styles.div}>
                <input type="text" className={styles.input} />
                <button className={styles.send}>Отправить</button>
            </div>
        </div>
    </>

    )
}
export default Dialogs