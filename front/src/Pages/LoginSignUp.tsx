import { useLocation } from 'react-router-dom'
import SignUp from '../components/Organisms/SignUp/SignUp';

const LoginSignUp = () => {
  const location = useLocation();
  const showLogin = new URLSearchParams(location.search).get('show') === 'login';

  return (
    <div className="signup-page">
      {showLogin ? (
        <div className="login-container"> COUCOU </div>
      ) : (
        <SignUp />
      )}
    </div>
  )
}

export default LoginSignUp