import React from 'react'
import '../Data/Login.css';
import loginn from '../Data/Login.jpg'
import Rutas from '../../Rutas/Rutas';
function Login() {




    
    return (



        <div className="Login">

            <br />


            <form class="form">
                <h2 class="form-title"> INICIAR SESIÓN</h2>
                <div class="error block">
                    <p class="error"> </p>
                </div>

                <div class="input-block">
                    <label for="username" class="label">Nombre de Usuario</label>
                    <input type="text" name="username" class="input username-input" />
                </div>



                <div class="input-block">
                    <label for="password" class="label">Password</label>
                    <input type="password" name="password" class="input pw-input" />
                    <p class="input-info">
                        Debe tener al menos 8 caracteres de longitud</p>
                </div>




                <div className="input-block">
                    <form method="get" action="">
                        <button type="input-submit" className="input-submit">Iniciar</button>
                    </form>
                </div>


                <div className="input-block">
                    <form method="get" action="/">
                        <button type="input-submit" className="input-submit-a">Atras</button>
                    </form>
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