const mongoose = require('mongoose');
const Usuarios = require('../models/usuarios'); 

//funcion validar correo electronico
function validarMail(Email) {
    const regexMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    
    if (!regexMail.test(Email)) {  //si no cumple con el formato entra al if
        return "El formato del correo electrónico no es válido.";
    }

    // Verifica si está en uso
    return Usuarios.findOne({ email: Email })
        .then(usuario => {
            if (usuario) {
                return "Este correo electrónico ya está registrado.";
            }
            // Todas las validaciones pasaron
            return null;
        })
        .catch(error => {
            console.error("Error al verificar el correo electrónico:", error);
            return "Error al validar el correo electrónico.";
        });
}

module.exports = {
    validarMail
};