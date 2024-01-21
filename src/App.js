import './App.css';
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import Content from './components/content/Content'
import { BrowserRouter,Route } from 'react-router-dom';
import Dialogs from './components/dialogs/Dialogs';

function App() {
  return (
    <div className='wrapper'>
    <BrowserRouter>
      <Header/>
      <Navbar/>
      <div className={"content"}>
        <Route path="/" component={Content} exact/>
        <Route path="/content" component={Content} exact/>
        <Route path="/dialogs" component={Dialogs} exact/>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
