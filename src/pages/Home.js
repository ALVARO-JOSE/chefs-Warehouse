import * as React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../fire';
import Rutas from '../Rutas/Rutas';
export default function Home({
    user,
    setAuthState,
    setUser
}) {

    const signOutHandler = () => {
        signOut(auth)
        .then(() => {
            setUser(null);
            setAuthState('login');
        })
        .catch((err) => console.log(err));
    }

    return (
   
        <div className='flex flex-col items-center text-5xl font-bold text-center'>
     
        
            This is the home screen 
            {user}

            


<Rutas/>
            
              </div>
    )
}