import { useNavigate } from 'react-router-dom';

const ButtonSignUp = () => {
  const navigate = useNavigate();

  const redirectToSignUpSignUpPage = () => {
    navigate('/signup?show=signup'); 
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

