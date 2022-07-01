import React from 'react';
import Menu from '../BarraMenu/Menu';
import Footer from '../BarraMenu/Footer';
import './Layout.css';

function Layout({ children }) {
  return (
    <div className='Layout'>



      <Menu/>
      {children}
      <Footer />
    </div>
  
  )
}

export default Layout