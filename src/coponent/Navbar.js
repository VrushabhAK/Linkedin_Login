import { useAuth0 } from "@auth0/auth0-react";
const LoginButton = () => {
    const { loginWithRedirect,isAuthenticated ,logout} = useAuth0();
  
    return(
    <>
        {!isAuthenticated ?(

    <li>
     <button onClick={() => loginWithRedirect()}>Log In</button>;
     </li>
    ):(
    <li>
     <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
    Log Out
  </button>
  </li>)
    }
   </> )
  };
  
  export default LoginButton;