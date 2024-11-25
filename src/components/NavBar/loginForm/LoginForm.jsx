/*
import { FaShoppingCart } from "react-icons/fa";

import { useGlobalContext } from "@/components/GlobalContext/GlobalContext";
import { Link } from "react-router-dom";
import "./Account.css";

const Account = () => {
  // let { store } = useGlobalContext();
  let { auth, store, modal } = useGlobalContext();
  const cartTotal = store.state.cartQuantity;

  const handleShowModal = () => {
    modal.openModal(false);
  };

  const handleLogout = () => {
    auth.logout();
  };

  return (
    <div className="account">
      <div className="cart">
        <Link to={"/cart"} className="contains-link-to-accounts">
          {auth.state.user == null ? (
            <span className="account-user">Guest</span>
          ) : (
            <span className="account-user">
             {auth.state.user.username}
            </span>
          )}
          <span className="account-details">
            <FaShoppingCart></FaShoppingCart>
            <span className="items-in-cart">{cartTotal}</span>
          </span>
        </Link>
      </div>
      <div className="login">
        {auth.state.user == null ? (
          <button
            className="btn-rounded small-rounded"
            onClick={handleShowModal}
          >
            Login
          </button>
        ) : (
          <button className="btn-rounded small-rounded" onClick={handleLogout}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
};
export default Account;*/
import React from "react";
import './LoginForm.css';
import { FaUser,FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';

const LoginForm = () => {
    return (
        <body id="lbody">
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
        </body>
        
    );
};



export default LoginForm
