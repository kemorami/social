import './App.css';
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import Content from './components/content/Content'

function App() {
  return (
    <div className='wrapper'>
    <Header/>
    <Navbar/>
    <Content/>
    </div>
  );
}

export default App;
