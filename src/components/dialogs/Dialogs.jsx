import styles from './Dialogs.module.css'
import Dialog from '../dialog/Dialog'
import React from 'react'
let dialogsText = React.createRef()
let dialogsName = React.createRef()
let dialogChange = React.createRef()

function Dialogs({data,asdfgh,text,change}){
    let sendMessage =()=>{
        asdfgh(dialogsText.current.value, dialogsName.current.value)
    }
    // let changeDialog = ()=>{
    //     change(dialogChange.current.value)
    //     console.log(text);
    // }
    return(
    <>
        <h1>Диалоги</h1>
        <div className={styles.dialogs}>
            {/* <Dialog name={dialogUser[0].name} text={dialogUser[0].text} id={dialogUser[0].id}/>
            <Dialog name={dialogUser[1].name} text={dialogUser[1].text} id={dialogUser[1].id}/>
            <Dialog name={dialogUser[2].name} text={dialogUser[2].text} id={dialogUser[2].id}/> */}
            {data.map((item,idx)=> <Dialog name={item.name} text={item.text} id={idx} key={idx}/>)}
            <div className={styles.div}>
                <input type="text" ref={dialogsName} className={styles.input}/>
                <input type="text" ref={dialogsText} className={styles.input} />
                {/* <input type="text" ref={dialogChange} className={styles.input} onChange={changeDialog}/> */}
                <button className={styles.send} onClick={sendMessage}>Отправить</button>
            </div>
        </div>
    </>

    )
}
export default Dialogs