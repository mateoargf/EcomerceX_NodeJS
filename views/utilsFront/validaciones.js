  console.log("validaciones.js cargado");
  
  function validarTexto() {
    let inputElement = document.getElementById("usernameInputRegistro");
    console.log("inputElement: ", inputElement);
    let mensajeErrorElement = document.getElementById("mensajeErrorRegistro");

    // Validar el valor del input (solo texto, sin números ni caracteres especiales)
    let valorInput = inputElement.value;
    if (!/^[a-zA-Z\s]+$/.test(valorInput)) {
        mensajeErrorElement.textContent = "Por favor, ingresa un texto válido (sin números ni caracteres especiales).";
        mensajeErrorElement.style.display = "block"; // Muestra el mensaje de error
        inputElement.classList.add("invalid-input");
    } else {
        mensajeErrorElement.textContent = ""; // Limpiar el mensaje de error si el valor es válido
        mensajeErrorElement.style.display = "none"; // Oculta el mensaje de error
        inputElement.classList.remove("invalid-input");
    }
}

// Agregar evento clic al documento para ocultar el mensaje de error al hacer clic fuera del input
document.addEventListener("click", function(event) {
    let inputElement = document.getElementById("usernameInputRegistro");
    let mensajeErrorElement = document.getElementById("mensajeErrorRegistro");

    if (event.target !== inputElement) {
        mensajeErrorElement.style.display = "none"; // Oculta el mensaje de error
        inputElement.classList.remove("invalid-input");
    }
});



function validarPassword() {
   let passwordInput = document.getElementById("passwordInput");
   let mensajeErrorPassword = document.getElementById("mensajeErrorPasswordRegistro");

   let regexRequerimientos = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

   if (!regexRequerimientos.test(passwordInput.value)) {
       mensajeErrorPassword.textContent = "Minimo 8 caracteres, 1 caracter especial, al menos 1 numero, al menos 1 mayus y 1 minúscula";
       mensajeErrorPassword.style.display = "block"; // Muestra el mensaje de error
       passwordInput.classList.add("invalid-input");
   } else {
       mensajeErrorPassword.textContent = ""; // Limpiar el mensaje de error si la contraseña es válida
       mensajeErrorPassword.style.display = "none"; // Oculta el mensaje de error
       passwordInput.classList.remove("invalid-input");
   }
}

// Agregar evento clic al documento para ocultar el mensaje de error al hacer clic fuera del input
document.addEventListener("click", function(event) {
   let passwordInput = document.getElementById("passwordInput");
   let mensajeErrorPassword = document.getElementById("mensajeErrorPasswordRegistro");

   if (event.target !== passwordInput) {
       mensajeErrorPassword.style.display = "none"; // Oculta el mensaje de error
       passwordInput.classList.remove("invalid-input");
   }
});


function validarEmail() {
   let emailInput = document.getElementById("emailInput");
   let mensajeErrorEmail = document.getElementById("mensajeErrorEmailRegistro");

   let regexEmail = /@/;
   let regexEspacios = /\s/;

   if (!regexEmail.test(emailInput.value)) {
       mensajeErrorEmail.textContent = "Ingresa al menos un carácter '@' en el correo electrónico.";
       mensajeErrorEmail.style.display = "block"; // Muestra el mensaje de error
       emailInput.classList.add("invalid-input");
   } else if (regexEspacios.test(emailInput.value)) {
       mensajeErrorEmail.textContent = "No se permiten espacios en el correo electrónico.";
       mensajeErrorEmail.style.display = "block"; // Muestra el mensaje de error
       emailInput.classList.add("invalid-input");
   } else {
       mensajeErrorEmail.textContent = ""; // Limpiar el mensaje de error si el email es válido
       mensajeErrorEmail.style.display = "none"; // Oculta el mensaje de error
       emailInput.classList.remove("invalid-input");
   }
}