import * as React from 'react';
import Login from './Login';
import { auth } from '../fire';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import '../auth/Register.css';
export default function Register({
    setAuthState,
    setUser
}) {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const onSignUpHandle = () => {
        if(email !== null && password !== null) {
            createUserWithEmailAndPassword(auth, email, password)
            .then((user) => {
                setUser(user.user.email);
                setAuthState('home')
            })
            .catch((err) => {
                alert(err)
            })
        }
    }

    return (

        <div className="Register">
            <div className="form">
            <h1 className='text-5xl font-semibold'>Registro</h1>
            <p className='font-medium text-lg text-gray-500 mt-4'>¡Bienvenido de nuevo! Por favor, introduzca sus datos.</p>
            <div className='mt-8'>








            <div className="input-block">
                    <label for="username" class="label">Email</label>
                    <input 
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                     placeholder="Introduce tu correo electrónico"
                     type="text" 
                     name="username" 
                     class="input username-input" />
                </div>




               







                <div className="input-block">
                    <label for="password" class="label">Password</label>
                    <input 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                    placeholder="Introduce tu contraseña"
                    type={"password"}
                    name="password" 
                    class="input pw-input" />
                </div>






             




                <div className='mt-8 flex justify-between items-center'>
                    <div>
                        <input  type="checkbox" id='remember'/>
                        <label className='ml-2 font-medium text-base' for="remember">Remember for 30 days</label>
                    </div>
                </div>


                <div className="input-block">
                    
                    <button 
                    type="input-submit-c" 
                    className="input-submit-c"
                    onClick={onSignUpHandle}
                    >Register</button>
            </div>

                
                <div className='mt-8 flex justify-center items-center'>
                    <p className='font-medium text-base'>¡Inicia tu sesión!</p>
                    <div className="row-texto">
                        <label><a href="/Login">Sesión</a></label>
                    </div>
                 


                </div>
            </div>
            </div>
        </div>
    )
}