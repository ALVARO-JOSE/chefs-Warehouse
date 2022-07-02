import React from 'react'
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
import Layout from '../Componentes/Layout/Layout';
import Home from '../Paginas/Home';
import Login from '../Componentes/Data/Login';
import About from '../Paginas/About';
import App from '../App';
import NotFound from '../Paginas/NotFound';
import Soporte from '../Paginas/Soporte';

function Rutas() {
  return (
    <div>

<Router>
       
        <Layout>
          <Routes>

            
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Soporte" element={<Soporte />} />
            <Route exact path="/Login" element={<Login />} />
            <Route exact path="/About" element={<About />} />
            <Route exact path='/app' element={<App/>}/>
            <Route exact path="*" element={<NotFound />} />



          </Routes>
        </Layout>
      </Router>





    </div>
  )
}

export default Rutas