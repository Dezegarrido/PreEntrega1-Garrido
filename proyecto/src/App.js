import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import CartWidget from './Components/CartWidget';
import styles from './App.module.css'

function App() {
  return (
    <>
      <header>
        <nav className = {styles.navbar}>
        <NavBar/>
        </nav>
      </header>
      <h1>Aqui van a haber Productos</h1>
    </>
  );
}

export default App;
