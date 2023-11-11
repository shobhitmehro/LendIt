import {useAuth0} from '@auth0/auth0-react';

export default function SignInButton(){

    return (
        <div>
            {!user && !isLoading && (
            <button 
                className='signinbutton'
                onClick={()=>loginWithRedirect()}
                >
                Log In
            </button>)}
            {user && !isLoading && (
                <button 
                    className='signinbutton'
                    onClick={()=>logout() }
                >
                Log Out
                </button>
            )} 
                

            <div>{JSON.stringify(user,null,2)}</div>
        </div>
    )
}