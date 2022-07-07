import React from 'react'
import '../Data/Login.css';

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
                    <input 
                    type="email" 
                    class="form-control" 
                    id="floatingInput" 
                    placeholder="name@example.com"/>
                </div>



                <div class="input-block">
                    <label for="password" class="label">Password</label>
                    <input
                     type="password"
                     class="form-control" 
                     id="floatingPassword"
                     placeholder="Password"/>

                </div>     
                
                    <p class="input-info">
                        Debe tener al menos 8 caracteres de longitud</p>
                




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