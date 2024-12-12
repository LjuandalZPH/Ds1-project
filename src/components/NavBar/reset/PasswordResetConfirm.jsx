import React, { useState, useEffect } from "react";
import { useParams, useNavigate} from "react-router-dom";
import { toast } from "react-toastify";

const PasswordResetConfirm = () => {
    const { uidb64, token } = useParams();
    const navigate = useNavigate();
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    useEffect(() => {
        // Puedes agregar alguna validación o lógica de carga si es necesario
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (newPassword !== confirmPassword) {
            toast.error("Las contraseñas no coinciden.");
            return;
        }
        try {
            const response = await fetch(`http://127.0.0.1:8000/reset/${uidb64}/${token}/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ password: newPassword }),
            });
            const data = await response.json();
            if (response.ok) {
                toast.success("Contraseña restablecida con éxito.");
                navigate('/login');  // Redirige al usuario a la página de inicio de sesión
            } else {
                toast.error(data.error || "Hubo un error.");
            }
        } catch (error) {
            toast.error("Hubo un error al restablecer la contraseña.");
        }
    };

    return (
        <div>
            <h2>Restablecer Contraseña</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Nueva contraseña:
                    <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Confirmar nueva contraseña:
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Restablecer contraseña</button>
            </form>
        </div>
    );
};

export default PasswordResetConfirm;
