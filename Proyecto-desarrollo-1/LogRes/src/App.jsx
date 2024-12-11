// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/loginForm/LoginForm'
import RegisterForm from './components/registerForm/RegisterForm'
import MainForm from './components/mainScreen/mainForm';
import ProductList from './components/productList/ProductList';
import ShoppingCart from './components/shoppingCart/ShoppingCart';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/products" element={
               <>
               <MainForm />
               <ProductList />
             </>
             } />
           <Route path="/cart1" element={<ShoppingCart />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

