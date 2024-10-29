import React from "react";
import './RegisterForm.css';
import { useForm } from "react-hook-form";

const RegisterForm = () => {
    
    const { register, formState: {errors} , handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }
    
    return <div>
        <h2>Registro</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Nombre</label>
                <input type="text" {...register('nombre', {
                    required: true,
                    maxLength: 20
                })} />
                {errors.nombre?.type === 'required' && <p>El campo es requerido</p>}
            </div>
            <div>
                <label>Dirección</label>
                <input type="text" {...register('direccion')}/>
            </div>
            <div>
                <label>Telefono</label>
                <input type="text" {...register('telefono', {
                    required: true
                })} />
            </div>
            <div>
                <label>Correo</label>
                <input type="text" {...register('correo', {
                    required: true
                })} />
            </div>
            <div>
                <label>Contraseña</label>
                <input type="password" {...register('contrasena', {
                    required: true
                })} />
            </div>
            <div>
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
            <input type="submit" value="Send" />
        </form>
    </div>
}

export default RegisterForm