import logo from './logo.svg';
import './App.css';
import Menu from "./Menu";

function App() {
  return (    
    <div className='container'>
      
      <div className='content-menu'>
        <Menu />
      </div>
      <div className='content-footer'>
        <div className='content-text'>
          <p>Copyright 2023 | Todos los derechos reservados</p>
        </div>
      </div>
    </div>
  );
}

export default App;
