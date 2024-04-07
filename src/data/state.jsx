import img from '../img/fenics.jpg'
import imgg from '../img/i.webp'
import immg from '../img/ava.jpg'
import friend from '../img/friend.jpg'
import friend1 from '../img/friend1.jpg'
import friend2 from '../img/friend2.jpg'
import friend3 from '../img/friend3.jpg'
import {Render} from '../Render' 
export let subscribe = (obs)=>{
    render = obs
}
export let render = ()=>{
    console.log("привет");
} 
let state = {
    dialogUser:[{name:"Андрей", text:"Привет", id:"1"},{name:"Мартин", text:"Доброе утро", id:"2"},{name:"Артём", text:"Добрый вечер", id:"3"},{name:"Олег", text:"Доброй ночи", id:"4"}],
    postsUser:[{name:"Алексей", text:"Всем привет", img:img, numberLikes:"10"},{name:"Кирилл", text:"Да", img:imgg, numberLikes:"5"},{name:"Матвей", text:"Нет", img:immg, numberLikes:"129"}],
    myFriends:[{img:friend, name:"Андрей"},{img:friend1, name:"Андрей"},{img:friend2, name:"Максим"},{img:friend3, name:"Марк"}],
    text:"Hello"
}
export default state
export let addPosts = (postText, postsName)=>{
    let newPost = {name:postsName, text:postText, img:img, numberLikes:"11230"}
    state.postsUser.unshift(newPost)
    console.log(state.postsUser);
    Render(state)
}
export let sendMessage = (dialogsText, dialogsName)=>{
    let newDialog = {name:dialogsName, text:dialogsText, id:"10"}
    state.dialogUser.unshift(newDialog)
    console.log(state.dialogUser);
    Render(state)
}
export let dialogChange = (text)=>{
    state.text += text
    Render(state)
}
