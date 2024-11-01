import React from "react";
import './RegisterForm.css';
import { useForm } from "react-hook-form";

const RegisterForm = () => {
    
    const { register, formState: {errors} , handleSubmit } = useForm({
        // defaultValues: {
        //     direccion: 'NA',
        //     telefono: 'NA'
        // }
    });

    const onSubmit = (data) => {
        console.log(data);
    }
    
    return <div id="main">
        <form id="form" onSubmit={handleSubmit(onSubmit)}>
            <h1>Registro</h1>
            <div id="rinput-box">
                <input type="text" placeholder="Nombre" {...register('nombre', {
                    required: true,
                    maxLength: 20
                })} />
                {/* {errors.nombre?.type === 'required' && <p id="alert1">El campo es requerido</p>} */}
            </div>
            <div id="rinput-box">
                <input type="text" placeholder="Direccion" {...register('direccion')}/>
            </div>
            <div id="rinput-box">
                <input type="text" placeholder="Telefono" {...register('telefono')} />
            </div>
            <div id="rinput-box">
                <input type="text" placeholder="Correo" {...register('correo', {
                    required: true
                })} />
            </div>
            <div id="rinput-box">
                <input type="password" placeholder="Contraseña" {...register('contrasena', {
                    required: true
                })} />
            </div>
            <div id="rinput-box">
                <label>Pais</label>
                <select {...register('pais', {
                    required: true
                })} >
                    <option value="co">Colombia</option>
                    <option value="us">United States</option>
                    <option value="fr">France</option>
                    <option value="ge">Germany</option>
                </select>
            </div>

            <button id="button" type="submit">Send</button>
        </form>
        <div id="presentation">
            <div>
                <p>Bienvenido a Unizone!!</p>
            </div>
        </div>
    </div>
}

export default RegisterForm