import React from 'react'
import { BrowserRouter as Link, } from 'react-router-dom';
//import logo from '../imagenes//logos/logo.png';
import logo from '../imagenes/logos/logo.png';
import '../Paginas/Home.css';
function Home() {
    const Login = "/Login";
    return (

        <div className='Home'>
            <header className="Home-header">
                <img src={logo} className="Home-logo" alt="logo" />
                <div className="input-block">
                    <form method="get" action={Login}>
                        <button type="submit" className="input-submit">Enter</button>
                    </form>

                </div>


                
            </header>
        </div>



    )
}

export default Home