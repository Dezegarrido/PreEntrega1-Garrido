import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import CartWidget from './Components/CartWidget';
import ItemListContainer from './Components/ItemListContainer';
import styles from './App.module.css'

function App() {
  return (
    <>
      <header>
        <nav className = {styles.navbar}>
        <NavBar/>
        <CartWidget/>
        </nav>
      </header>
      <ItemListContainer/>
    </>
  );
}

export default App;
