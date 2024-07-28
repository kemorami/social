const SEND_MESSAGE = "send-message"
const MESSAGE_CHANGE = "message-change"
let dialogsReduser = (state, action)=> {
  if (action.type === SEND_MESSAGE){
    let newDialog = {name:state.name, text:state.text, id:"10"}
    state.users.unshift(newDialog)
    state.text = ""
    
  }else if (action.type === MESSAGE_CHANGE){
    state.text = action.text
    state.name = action.name
    
}
  return state
}
export default dialogsReduser
export let sendMessageAC = ()=>{
  return{type: "send-message", id:1}
}
export let messageChangeAC = (text, name)=>{
  return{type: "message-change", text:text, name:name}
}