 import { useNavigate } from "react-router-dom";
 
 const ButtonLogin = () => {
  const navigate = useNavigate();

  const redirectToSignUpLoginPage = () => {
    navigate('/signup?show=login'); // Utilisez un paramètre d'URL pour indiquer l'affichage de la page de login
  };
  return (
    <>
     <input type="button" value="Login" className="btnlogin" onClick={redirectToSignUpLoginPage}/>
    </>
  )
}

export default ButtonLogin;
