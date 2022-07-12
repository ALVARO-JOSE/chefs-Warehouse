import React from 'react'
import '../Data/Login.css';

function Login() {


    
    return (







        <div className="Login">

            <br />


            <form className="form">
                <h2 className="form-title"> INICIAR SESIÓN</h2>
                <div className="error block">
                    <p className="error"> </p>
                </div>

                <div className="input-block">
                    <label for="username" className="label">Nombre de Usuario</label>
                    <input 
                    type="email" 
                    className="form-control" 
                    id="floatingInput" 
                    placeholder="name@example.com"/>
                </div>



                <div className="input-block">
                    <label for="password" className="label">Password</label>
                    <input
                     type="password"
                     className="form-control" 
                     id="floatingPassword"
                     placeholder="Password"/>

                </div>     
                <br />  
                    <p class="input-info">
                        Debe tener al menos 8 caracteres de longitud</p>
                




                <div className="input-block">
                    <form method="get" action="">
                        <button type="input-submit" className="input-submit">Iniciar</button>
                    </form>
                </div>


                <div className="row-texto">
                    <div className='texto-Atras'>
                        <label><a href="/">Atras</a></label>
                    </div>
                 </div>



                <div className="input-block">
                    <form method="get" action="/Registro">
                        <button type="input-submit" className="input-submit-b">Registrar</button>
                    </form>
                </div>


            </form>









        </div>
    )
}

export default Login