import './App.css';
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import Content from './components/content/Content'
import { BrowserRouter,Route } from 'react-router-dom';
import Dialogs from './components/dialogs/Dialogs';
import Error from './components/error/Error'
import img from './img/fenics.jpg'
import imgg from './img/i.webp'
import immg from './img/ava.jpg'
let postsUser = [{name:"Алексей", text:"Всем привет", img:img, numberLikes:"10"},{name:"Кирилл", text:"Да", img:imgg, numberLikes:"5"},{name:"Матвей", text:"Нет", img:immg, numberLikes:"129"}]
let dialogUser = [{name:"Андрей", text:"Привет", id:"1"},{name:"Мартин", text:"Доброе утро", id:"2"},{name:"Артём", text:"Добрый вечер", id:"3"},{name:"Олег", text:"Доброй ночи", id:"4"}]

function App() {
  return (
    <div className='wrapper'>
    <BrowserRouter>
      <Header/>
      <Navbar/>
      <div className={"content"}>
        <Route path="/" render={()=><Content data={postsUser}/>} exact/>
        <Route path="/content" render={()=><Content data={postsUser}/>} exact/>
        <Route path="/dialogs" render={()=><Dialogs data={dialogUser}/>} exact/>
        {/* <Route paht="*" component={Error} exact/> */}
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
