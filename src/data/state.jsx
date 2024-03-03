import img from '../img/fenics.jpg'
import imgg from '../img/i.webp'
import immg from '../img/ava.jpg'
import friend from '../img/friend.jpg'
import friend1 from '../img/friend1.jpg'
import friend2 from '../img/friend2.jpg'
import friend3 from '../img/friend3.jpg'
let state = {
    dialogUser:[{name:"Андрей", text:"Привет", id:"1"},{name:"Мартин", text:"Доброе утро", id:"2"},{name:"Артём", text:"Добрый вечер", id:"3"},{name:"Олег", text:"Доброй ночи", id:"4"}],
    postsUser:[{name:"Алексей", text:"Всем привет", img:img, numberLikes:"10"},{name:"Кирилл", text:"Да", img:imgg, numberLikes:"5"},{name:"Матвей", text:"Нет", img:immg, numberLikes:"129"}],
    myFriends:[{img:friend, name:"Андрей"},{img:friend1, name:"Андрей"},{img:friend2, name:"Максим"},{img:friend3, name:"Марк"}]
}
export default state
export let addPosts = (postText)=>{
    let newPost = {name:"ffff", text:postText, img:img, numberLikes:"11230"}
    state.postsUser.push(newPost)
    console.log(state.postsUser);
}
