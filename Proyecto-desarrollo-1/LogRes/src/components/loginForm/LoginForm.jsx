import React from "react";
import './LoginForm.css'
import { FaUser,FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';

const LoginForm = () => {
    return (
        <div id="wrapper">
            <form action="">
                <h1>Iniciar Sesión</h1>
                <div id="input-box">
                    <input type="text" placeholder="Username" required />
                    <FaUser id="icon"/>
                </div>
                <div id="input-box">
                    <input type="password" placeholder="Password" required />
                    <FaLock id="icon"/>
                </div>


                <div id="remember-pass">
                    <label htmlFor=""><input type="checkbox" />Remember me</label>
                    <a href="#">Forgot password?</a>
                </div>
                    
                <button type="submit">Login</button>

                <div id="register-link">
                    <p>Don't have an account? <Link to="/Register">Registro</Link></p>
                </div>
            </form>
        </div>
    );
};



export default LoginForm