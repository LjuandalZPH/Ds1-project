// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/loginForm/loginForm'
import RegisterForm from './components/registerForm/registerForm'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <LoginForm/>
      </div> */}
      {/* <div>
        <RegisterForm/>
      </div> */}
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
