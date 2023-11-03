import { Routes, Route } from 'react-router-dom';
import './App.css';

// import LoginSignUp from './Pages/LoginSignUp';
import HomePage from './Pages/HomePage';
import Dashboard from './Pages/Dashboard';
import LoginSignUp from './Pages/LoginSignUp';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginSignUp />} />
        <Route path="/signup" element={<LoginSignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
