function validarContrasena(contrasena, usuario) {
    
    if (contrasena.length < 8) {
        return "La contraseña debe tener al menos 8 caracteres.";
    }

    // Caracteres especiales
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(contrasena)) {
        return "La contraseña debe contener al menos un carácter especial.";
    }

    // Números
    if (!/\d/.test(contrasena)) {
        return "La contraseña debe contener al menos un número.";
    }

    // Mayúsculas y minúsculas
    if (!/[A-Z]/.test(contrasena) || !/[a-z]/.test(contrasena)) {
        return "La contraseña debe contener al menos una letra mayúscula y una minúscula.";
    }

    // Evitar información personal (ejemplo: no permitir el "usuario" en la contraseña)
    if (contrasena.toLowerCase().includes(usuario.toLowerCase())) {
        return "La contraseña no puede ser igual al nombre del usuario.";
    }

    // No permitir contraseñas comunes (puedes tener una lista de contraseñas comunes y verificar contra ella)
    const contrasenasComunes = ["123456", "password", "qwerty", "admin"];
    if (contrasenasComunes.includes(contrasena.toLowerCase())) {
        return "La contraseña es demasiado común. Por favor, elige una contraseña más segura.";
    }

    // Todas las validaciones pasaron
    return null;
}

module.exports = {
    validarContrasena
};