import logo from '../../assets/logoecogeste.png'
import ButtonLogin from '../Atoms/ButtonLogin';
import ButtonSignUp from '../Atoms/ButtonSignUp';

const NavBar = () =>{
  return (
    <div className="navBar">
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>
        <div className="btnsNav">
            <ButtonLogin />
            <ButtonSignUp />
            <a href="/challengeDashboard" className="btnNav">Challenges</a>
        </div>
    </div>
  )
}

export default NavBar;
