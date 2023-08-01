import { Routes, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
