import { useNavigate } from 'react-router-dom';

const ButtonSignUp = () => {
  const navigate = useNavigate();

  const redirectToSignUpSignUpPage = () => {
    navigate('/signup?show=signup'); // Utilisez un paramètre d'URL pour indiquer l'affichage de la page d'inscription
  };

  return (
    <>
      <input
        type="button"
        value="Sign Up"
        className="btnsignup"
        onClick={redirectToSignUpSignUpPage}
      />
    </>
  );
};

export default ButtonSignUp;

