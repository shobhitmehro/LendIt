import {useAuth0} from '@auth0/auth0-react';

export default function SignInButton(){
    const {loginWithRedirect, logout, isLoading, user} = useAuth0()

    return (
        <div>
            {isLoading && (
                <button 
                    className='sign-in-loading-button'
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
                    style={{backgroundColor: "transparent",
                    color: "#ffffff",
                    border: "none"}}
                    onClick={()=>loginWithRedirect()}
                >
                LOG IN
                </button>)}
            {user && !isLoading && (

                <button 
                    style={{backgroundColor: "transparent",
                    color: "#ffffff",
                    border: "none"}}
                    onClick={()=>logout() }
                >
                LOG OUT
                </button>
            )} 
        </div>
    )
}