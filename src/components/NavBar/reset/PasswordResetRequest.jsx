import React, { useState } from "react";
import { toast } from "react-toastify";


const PasswordResetRequest = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const csrftoken = document.cookie
                .split('; ')
                .find((row) => row.startsWith('csrftoken'))
                ?.split('=')[1]; // Obtener el token CSRF de la cookie
    
            const response = await fetch('http://127.0.0.1:8000/password_reset/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': csrftoken, // Agregar el token CSRF al header
                },
                credentials: 'include', // Incluir las cookies en la solicitud
                body: JSON.stringify({ email }),
            });
    
            const data = await response.json();
            if (response.ok) {
                toast.success("Se ha enviado un enlace para restablecer tu contraseña.");
            } else {
                toast.error(data.error || "Hubo un error.");
            }
        } catch (error) {
            toast.error("Hubo un error al intentar enviar el correo.");
        }
    };

    return (
        <div>
            <h2>Restablecer Contraseña</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Correo electrónico:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="Ingresa tu correo electrónico"
                    />
                </label>
                <button type="submit">Enviar enlace para restablecer</button>
            </form>
        </div>
    );
};

export default PasswordResetRequest;
