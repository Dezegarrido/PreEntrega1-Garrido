import './App.css';
import NavBar from './Components/NavBar';
import CartWidget from './Components/CartWidget';
import ItemListContainer from './Components/ItemListContainer';
import { BrowserRouter } from 'react-router-dom';
import styles from './App.module.css'

function App() {
  return (
    <>
        <BrowserRouter>
        <NavBar/>
      
        </BrowserRouter>

      <ItemListContainer/>
    </>
  );
}

export default App;
