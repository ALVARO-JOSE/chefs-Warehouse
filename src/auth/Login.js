import * as React from 'react';

import { signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../fire';
import '../auth/Login.css';
function Login({
    setAuthState,
    setUser
}) {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');


    const handleLogin = () => {
        if(email !== null && password !== null) {
            signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                setUser(email)
                setAuthState('home')
            })
            .catch((err) => alert(err));
        }
    }

  return (

    <header>
    
    <div className="Login">
      <div className="formm">
      
            <h1 className='text-5xl font-semibold'>Bienvenido de nuevo</h1>
            <p className='font-medium text-lg text-gray-500 mt-4'>¡Bienvenido de nuevo! Por favor, introduzca sus datos.</p>
            <div className='mt-8'>



            <div className="input-block">
                    <label for="username" class="label">Email</label>
                    <input 
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     placeholder="Enter your email"
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
                    placeholder="Enter your email"
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
                        type="input-submit" 
                        className="input-submit"
                        onClick={handleLogin}
                        >Iniciar sesión</button>
                    
                </div>







                <div className='mt-8 flex justify-center items-center'>
                    <p className='font-medium text-base'>¿No tienes una cuenta?</p>
                    <button 
                        onClick={() => setAuthState('register')}
                        className='ml-2 font-medium text-base text-violet-500'>Inscribirse</button>
                </div>




            </div>
        </div>
      
      
    </div>
    </header>
  );
}

export default Login;