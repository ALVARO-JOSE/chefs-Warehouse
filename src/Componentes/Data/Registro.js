import React, { useState, useEffect } from "react";
import Axios from "../../Services/conexionaxios";


function Registro() {

    const variablesInicio = {
        Nombre: "",
        email: "",
        password: "",
    };

    const [values, setValues] = useState(variablesInicio);

    const CambioEstado = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

//Crear método para guardar información
const Guardar=async()=>{
    Axios.post('/persona/guardar',{
        Nombre:values.Nombre,
        password:values.password,
        email:values.email
    }).then(()=>{
      console.log('Registro guardado con exito');
    })
    }


    const Enviar = (e) => {
        e.preventDefault();
        Guardar();
    };

    useEffect(() => { }, []);

    return (


        <div className="regi">
            <form onSubmit={Enviar}>

                <div class="form-floating mb-3">
                    <input
                        type="Nombre"
                        class="form-control"
                        id="floatingInput"
                        name="Nombre"
                        value={values.Nombre}
                        onChange={CambioEstado}
                        placeholder="Nombre" />
                    <label for="floatingInput">Nombre</label>
                </div>


                <div class="form-floating mb-3">
                    <input
                        type="email"
                        class="form-control"
                        id="floatingInput"
                        name="email"
                        value={values.email}
                        onChange={CambioEstado}
                        placeholder="name@example.com" />
                    <label for="floatingInput">Email address</label>
                </div>




                <div class="form-floating">
                    <input
                        type="password"
                        class="form-control"
                        id="floatingPassword"
                        name="password"
                        value={values.password}
                        onChange={CambioEstado}
                        placeholder="Password" />
                    <label for="floatingPassword">Password</label>
                </div>

                
                  
                        <button type="input-submit" className="input-submit" >Iniciar</button>
                    
                
            </form>
        </div>




    );
}





export default Registro