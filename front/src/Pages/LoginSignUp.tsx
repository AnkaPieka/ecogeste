import { useLocation } from 'react-router-dom'
import SignUp from '../components/Organisms/SignUp/SignUp';
import Login from '../components/Organisms/Login/Login';

const LoginSignUp = () => {
  const location = useLocation();
  const showLogin = new URLSearchParams(location.search).get('show') === 'login';

  return (
    <div className="signup-page">
      {showLogin ? (
        <Login />
      ) : (
        <SignUp />
      )}
    </div>
  )
}

export default LoginSignUp