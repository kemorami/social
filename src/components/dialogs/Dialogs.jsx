import styles from './Dialogs.module.css'
import Dialog from '../dialog/Dialog'

let dialogUser = [{name:"Андрей", text:"Привет", id:"1"},{name:"Мартин", text:"Доброе утро", id:"2"},{name:"Артём", text:"Добрый вечер", id:"3"},{name:"Олег", text:"Доброй ночи", id:"4"}]
function Dialogs(){
    return(
    <>
        <h1>Диалоги</h1>
        <div className={styles.dialogs}>
            {/* <Dialog name={dialogUser[0].name} text={dialogUser[0].text} id={dialogUser[0].id}/>
            <Dialog name={dialogUser[1].name} text={dialogUser[1].text} id={dialogUser[1].id}/>
            <Dialog name={dialogUser[2].name} text={dialogUser[2].text} id={dialogUser[2].id}/> */}
            {dialogUser.map((item,idx)=> <Dialog name={item.name} text={item.text} id={idx} key={idx}/>)}
            <div className={styles.div}>
                <input type="text" className={styles.input} />
                <button className={styles.send}>Отправить</button>
            </div>
        </div>
    </>

    )
}
export default Dialogs