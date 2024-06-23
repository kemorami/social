import img from '../img/fenics.jpg'
import imgg from '../img/i.webp'
import immg from '../img/ava.jpg'
import friend from '../img/friend.jpg'
import friend1 from '../img/friend1.jpg'
import friend2 from '../img/friend2.jpg'
import friend3 from '../img/friend3.jpg'
const ADD_POST = "add-post"
const POST_CHANGE = "post-change"
const SEND_MESSAGE = "send-message"
const MESSAGE_CHANGE = "message-change"
let store = {
_state : {
    dialogUser:[{name:"Андрей", text:"Привет", id:"1"},{name:"Мартин", text:"Доброе утро", id:"2"},{name:"Артём", text:"Добрый вечер", id:"3"},{name:"Олег", text:"Доброй ночи", id:"4"}],
    postsUser:[{name:"Алексей", text:"Всем привет", img:img, numberLikes:"10"},{name:"Кирилл", text:"Да", img:imgg, numberLikes:"5"},{name:"Матвей", text:"Нет", img:immg, numberLikes:"129"}],
    myFriends:[{img:friend, name:"Андрей"},{img:friend1, name:"Андрей"},{img:friend2, name:"Максим"},{img:friend3, name:"Марк"}],
    text:"",
    name:""
},
// addPosts(postText, postsName){
    // let newPost = {name:postsName, text:postText, img:img, numberLikes:"11230"}
    // this._state.postsUser.unshift(newPost)
    // console.log(this._state.postsUser);
    // render(this._state)
// },
// sendMessage(dialogsText, dialogsName){
    // let newDialog = {name:dialogsName, text:dialogsText, id:"10"}
    // this._state.dialogUser.unshift(newDialog)
    // console.log(this._state.dialogUser);
    // render(this._state)
// },
// dialogChange(text){
    // this._state.text += text
    // render(this._state)
// },
// postChange(text){
    // this._state.text += text
    // render(this._state)
// },
render(){
    console.log("привет");
},
subscribe(obs){
    this.render = obs
},
getState(){
    return this._state
},
dispatch(action){
    if(action.type === ADD_POST){
        let newPost = {name:this._state.name, text:this._state.text, img:img, numberLikes:"11230"}
        this._state.postsUser.unshift(newPost)
        this._state.text = ""
        // console.log(this._state.postsUser);
        this.render(this._state)
    }else if (action.type === POST_CHANGE){
        this._state.text = action.text
        this._state.name = action.name
        this.render(this._state)
    }else if (action.type === SEND_MESSAGE){
        let newDialog = {name:this._state.name, text:this._state.text, id:"10"}
        this._state.dialogUser.unshift(newDialog)
        this._state.text = ""
        this.render(this._state)
    }else if (action.type === MESSAGE_CHANGE){
        this._state.text = action.text
        this._state.name = action.name
        this.render(this._state)
    }
}
}
export let addPostAC = ()=>{
    return{type: "add-post", id:1}
}
export let postChangeAC = (text, name)=>{
    return{type: "post-change", text:text, name:name}
}
export let sendMessageAC = ()=>{
    return{type: "send-message", id:1}
}
export let messageChangeAC = (text, name)=>{
    return{type: "message-change", text:text, name:name}
}
export default store;