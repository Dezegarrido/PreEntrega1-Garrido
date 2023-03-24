import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import Inicio from './pages/Inicio'
import Productos from './pages/Productos'
import ComoComprar from './pages/ComoComprar'
import Informacion from './pages/Informacion'
import Contacto from './pages/Contacto'
import Error from './pages/Error'
import CartWidget from './CartWidget'

function NavBar(){
    
    return(
        <div>
            <h1>Sauco Shoes</h1>
            <div>
                <Link to="/">Home</Link>
                <Link to="/productos">Productos</Link>
                <Link to="/comocomprar">Como Comprar</Link>
                <Link to="/informacion">Informacion</Link>
                <Link to="/contacto">Contacto</Link>
                <Link to="/"><CartWidget/></Link>
            </div>
            <hr/>

            <Routes>
                <Route path='/' exact element={<Inicio/>}/>
                <Route path='/productos' exact element={<Productos/>}/>
                <Route path='/comocomprar' exact element={<ComoComprar/>}/>
                <Route path='/informacion' exact element={<Informacion/>}/>
                <Route path='/contacto' exact element={<Contacto/>}/>
                <Route path='*' exact element={<Error/>}/>
            </Routes>


        </div>
    )
}

export default NavBar