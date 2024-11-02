import React from "react";
import './RegisterForm.css';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const RegisterForm = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <body id="rbody">
            <div id="rcontainer">
                <div id="presentation">
                    <h2>Welcome to Unizone!</h2>
                </div>
                <form id="rform" onSubmit={handleSubmit(onSubmit)}>
                    <h1>Register</h1>
                    <div id="rinput-box">
                        <input type="text" placeholder="Name" {...register('nombre', { required: true, maxLength: 20 })} />
                    </div>
                    <div id="rinput-box">
                        <input type="text" placeholder="Address" {...register('direccion')} />
                    </div>
                    <div id="rinput-box">
                        <input type="text" placeholder="Phone" {...register('telefono')} />
                    </div>
                    <div id="rinput-box">
                        <input type="text" placeholder="Email" {...register('correo', { required: true })} />
                    </div>
                    <div id="rinput-box">
                        <input type="password" placeholder="password" {...register('contrasena', { required: true })} />
                    </div>
                    <div id="rinput-box">
                        <label>Country</label>
                        <select {...register('pais', { required: true })} id="country-dropdown">
                            <option value="co">Colombia</option>
                            <option value="us">United States</option>
                            <option value="fr">France</option>
                            <option value="ge">Germany</option>
                        </select>
                    </div>
                    <div id="login-link">
                        <Link to="/" id="already-have-account">Already have an account?</Link>
                    </div>
                    <button id="button" type="submit">Send</button>
                </form>
            </div>
        </body>
    );
}

export default RegisterForm;
