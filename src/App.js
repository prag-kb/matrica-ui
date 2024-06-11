import './App.css';
import SideBar from './components';
import Cards from './components/cards';
import Header from './components/header';

function App() {
  return (
    <div className='App'>
      <div className="body_main">
        <div>
          <div className='sideBar_parent'>
            <div className='title'>Matrica</div>
            <SideBar/>
          </div>
        </div>
        <div>
          <Header/>
          <Cards/>
        </div>
      </div>
    </div>
  );
}

export default App;
