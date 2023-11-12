import {useAuth0} from '@auth0/auth0-react';
import './SignInButton.scss'


export default function SignInButton(){
   const {loginWithRedirect, logout, isLoading, user} = useAuth0()


   return (
       <div>
           {isLoading && (
               <button
                   className='sign-in-button'
                   style={{backgroundColor: "transparent",
                           pointerEvents: "none",
                           color: "#ffffff",
                           border: "none"}}
               >
               Please Wait...
               </button>
           )}
           {!user && !isLoading && (
               <button
                   className='sign-in-button'
                   onClick={()=>loginWithRedirect()}
               >
               LOG IN
               </button>)}
           {user && !isLoading && (


               <button
                   className='sign-in-button'
                   onClick={()=>logout() }
               >
               LOG OUT
               </button>
           )}
       </div>
   )
}
