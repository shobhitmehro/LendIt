import {useAuth0} from '@auth0/auth0-react';

export default function SignInButton(){
    const {loginWithRedirect, logout, isLoading, user} = useAuth0()

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
        </div>
    )
}