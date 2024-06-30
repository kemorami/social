import styles from './Dialogs.module.css'
import Dialog from '../dialog/Dialog'
import React from 'react'
import { messageChangeAC, sendMessageAC } from '../../data/dialogsReduser.jsx'
let dialogsText = React.createRef()
let dialogsName = React.createRef()
let dialogChange = React.createRef()

function Dialogs({data,asdfgh,text,dialogChange,dispatch,dataName}){
    let sendMessage =()=>{
        // asdfgh(dialogsText.current.value, dialogsName.current.value)
        if (dialogsText.current.value.length < 6){
            return false
        }
        if(dialogsName.current.value.length < 3){
            return false
        }
        dispatch(sendMessageAC())
        dialogsText.current.value = "" 
    }
    let changeDialog = ()=>{
        // dialogChange(dialogChange.current.value)
        // console.log(text);
        if (dialogsText.current.value.length < 6) {
            dialogsText.current.style.border = "1px solid red"
        } else if (dialogsText.current.value.length >= 6){
            dialogsText.current.style.border = "1px solid wheat"
        }
        if (dialogsName.current.value.length < 3) {
            dialogsName.current.style.border = "1px solid red"
        } else if (dialogsName.current.value.length >= 3){
            dialogsName.current.style.border = "1px solid wheat"
        }
        dispatch(messageChangeAC(dialogsText.current.value, dialogsName.current.value))
    }
    
    return(
    <>
        <h1>Диалоги</h1>
        <div className={styles.dialogs}>
            {/* <Dialog name={dialogUser[0].name} text={dialogUser[0].text} id={dialogUser[0].id}/>
            <Dialog name={dialogUser[1].name} text={dialogUser[1].text} id={dialogUser[1].id}/>
            <Dialog name={dialogUser[2].name} text={dialogUser[2].text} id={dialogUser[2].id}/> */}
            {data.map((item,idx)=> <Dialog name={item.name} text={item.text} id={idx} key={idx}/>)}
            <div className={styles.div}>
                <input type="text" ref={dialogsName} className={styles.input} onChange={changeDialog} value={dataName}/>
                <input type="text" ref={dialogsText} className={styles.input} onChange={changeDialog} value={text}/>
                {/* <input type="text" ref={dialogChange} className={styles.input} onChange={changeDialog}/> */}
                <button className={styles.send} onClick={()=>{
                    sendMessage()
                }} id='button'>Отправить</button>
            </div>
        </div>
    </>

    )
}
export default Dialogs