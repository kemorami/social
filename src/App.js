import './App.css';
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import Content from './components/content/Content'
import { BrowserRouter,Route } from 'react-router-dom';
import Dialogs from './components/dialogs/Dialogs';
import Error from './components/error/Error'

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
        {/* <Route paht="*" component={Error} exact/> */}
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
