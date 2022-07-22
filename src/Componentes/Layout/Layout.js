import React from 'react';
import Menu from '../BarraMenu/Menu';
import Footer from '../BarraMenu/Footer';


function Layout({ children }) {
  return (
    <div className='Layout'>



     
      {children}
      <Footer />
    </div>
  
  )
}

export default Layout