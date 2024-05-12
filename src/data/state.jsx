import img from '../img/fenics.jpg'
import imgg from '../img/i.webp'
import immg from '../img/ava.jpg'
import friend from '../img/friend.jpg'
import friend1 from '../img/friend1.jpg'
import friend2 from '../img/friend2.jpg'
import friend3 from '../img/friend3.jpg'
import {Render} from '../Render' 
let store = {
_state : {
    dialogUser:[{name:"Андрей", text:"Привет", id:"1"},{name:"Мартин", text:"Доброе утро", id:"2"},{name:"Артём", text:"Добрый вечер", id:"3"},{name:"Олег", text:"Доброй ночи", id:"4"}],
    postsUser:[{name:"Алексей", text:"Всем привет", img:img, numberLikes:"10"},{name:"Кирилл", text:"Да", img:imgg, numberLikes:"5"},{name:"Матвей", text:"Нет", img:immg, numberLikes:"129"}],
    myFriends:[{img:friend, name:"Андрей"},{img:friend1, name:"Андрей"},{img:friend2, name:"Максим"},{img:friend3, name:"Марк"}],
    text:"Hello"
},
addPosts(postText, postsName){
    let newPost = {name:postsName, text:postText, img:img, numberLikes:"11230"}
    this._state.postsUser.unshift(newPost)
    console.log(this._state.postsUser);
    Render(this._state)
},
sendMessage(dialogsText, dialogsName){
    let newDialog = {name:dialogsName, text:dialogsText, id:"10"}
    this._state.dialogUser.unshift(newDialog)
    console.log(this._state.dialogUser);
    Render(this._state)
},
dialogChange(text){
    this._state.text += text
    Render(this._state)
},
postChange(text){
    this._state.text += text
    Render(this._state)
},
render(){
    console.log("привет");
},
subscribe(obs){
    this.render = obs
},
getState(){
    return this._state
}
}
export default store;