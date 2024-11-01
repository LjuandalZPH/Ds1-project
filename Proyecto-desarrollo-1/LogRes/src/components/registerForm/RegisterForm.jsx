import React from "react";
import './RegisterForm.css';
import { useForm } from "react-hook-form";

const RegisterForm = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <body id="rbody">
            <div id="rcontainer">
                <div id="presentation">
                    <h2>Bienvenido a Unizone!</h2>
                </div>
                <form id="rform" onSubmit={handleSubmit(onSubmit)}>
                    <h1>Registro</h1>
                    <div id="rinput-box">
                        <input type="text" placeholder="Nombre" {...register('nombre', { required: true, maxLength: 20 })} />
                    </div>
                    <div id="rinput-box">
                        <input type="text" placeholder="Dirección" {...register('direccion')} />
                    </div>
                    <div id="rinput-box">
                        <input type="text" placeholder="Teléfono" {...register('telefono')} />
                    </div>
                    <div id="rinput-box">
                        <input type="text" placeholder="Correo" {...register('correo', { required: true })} />
                    </div>
                    <div id="rinput-box">
                        <input type="password" placeholder="Contraseña" {...register('contrasena', { required: true })} />
                    </div>
                    <div id="rinput-box">
                        <label>Pais</label>
                        <select {...register('pais', { required: true })} id="country-dropdown">
                            <option value="co">Colombia</option>
                            <option value="us">United States</option>
                            <option value="fr">France</option>
                            <option value="ge">Germany</option>
                        </select>
                    </div>
                    <button id="button" type="submit">Send</button>
                </form>
            </div>
        </body>
    );
}

export default RegisterForm;
