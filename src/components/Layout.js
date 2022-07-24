
import Menu from "../Componentes/BarraMenu/Menu";
import Footer from '../Componentes/BarraMenu/Footer';

import "react-toastify/dist/ReactToastify.css";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
    
      <Menu/>
      
        <div className="row">
          <Outlet />
        </div>
        
        
      
      <Footer/>
    </>
  );
}

export default Layout;
