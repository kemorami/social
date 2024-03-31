import './App.css';
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import Content from './components/content/Content'
import { BrowserRouter,Route } from 'react-router-dom';
import Dialogs from './components/dialogs/Dialogs';
import Error from './components/error/Error'  

function App({data,qwerty,asdfgh,change}) {
  
  return (
    <div className='wrapper'>
    <BrowserRouter>
      <Header/>
      <Navbar data={data.myFriends}/>
      <div className={"content"}>
        <Route path="/" render={()=><Content data={data.postsUser} qwerty={qwerty}/>} exact/>
        <Route path="/content" render={()=><Content data={data.postsUser} qwerty={qwerty}/>} exact/>
        <Route path="/dialogs" render={()=><Dialogs data={data.dialogUser} asdfgh={asdfgh} text={data.text} change={change}/>} exact/>
        {/* <Route paht="*" component={Error} exact/> */}
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
