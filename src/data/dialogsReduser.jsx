const SEND_MESSAGE = "send-message"
const MESSAGE_CHANGE = "message-change"
let dialogsReduser = (action, state)=> {
  if (action.type === SEND_MESSAGE){
    let newDialog = {name:this._state.name, text:this._state.text, id:"10"}
    this._state.dialogUser.unshift(newDialog)
    this._state.text = ""
    this.render(this._state)
  }else if (action.type === MESSAGE_CHANGE){
    this._state.text = action.text
    this._state.name = action.name
    this.render(this._state)
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