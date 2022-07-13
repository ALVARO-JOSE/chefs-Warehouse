import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../Componentes/Layout/Layout';
import Home from '../Paginas/Home';
import About from '../Paginas/About';
import App from '../App';
import NotFound from '../Paginas/NotFound';
import Cat1 from '../Paginas/Categorias/Cat1';
import Cat2 from '../Paginas/Categorias/Cat2';
import Cat3 from '../Paginas/Categorias/Cat3';
import Cat4 from '../Paginas/Categorias/Cat4';
import Cat5 from '../Paginas/Categorias/Cat5';






function Rutas() {
  return (
    <div>

<Router>
       
        <Layout>
          <Routes>

            
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Cat1" element={<Cat1 />} />
            <Route exact path="/Cat2" element={<Cat2 />} />
            <Route exact path="/Cat3" element={<Cat3 />} />
            <Route exact path="/Cat4" element={<Cat4 />} />
            <Route exact path="/Cat5" element={<Cat5 />} />
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