import { Routes, Route } from 'react-router-dom';
import './App.css';
// import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/HomePage';
import NavBar from './components/Organisms/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/login" element={<LoginPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
