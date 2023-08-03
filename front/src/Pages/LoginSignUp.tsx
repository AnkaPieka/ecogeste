import { useLocation } from 'react-router-dom'

const LoginSignUp = () => {
  const location = useLocation();
  const showLogin = new URLSearchParams(location.search).get('show') === 'login';

  return (
    <div className="signup-page">
      {showLogin ? (
        <div className="login-container"> COUCOU </div>
      ) : (
        <div className="signup-container"> AUREVOIR </div>
      )}
    </div>
  )
}

export default LoginSignUp