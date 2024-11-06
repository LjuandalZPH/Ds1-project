// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/loginForm/LoginForm'
import RegisterForm from './components/registerForm/RegisterForm'
import MainForm from './components/mainScreen/mainForm';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

