document.addEventListener("DOMContentLoaded", function() {
    const carritoBtn = document.querySelector("#carritoBtn");
    const carritoMenu = document.querySelector("#carritoMenu");
    const comprarAhoraBtn = document.querySelector("#comprarAhoraBtn");
    const cerrarCarritoBtn = document.querySelector("#cerrarCarritoBtn");
    const confirmacionCompra = document.querySelector("#confirmacionCompra");
    const listaCarrito = document.getElementById('listaCarrito');


    carritoBtn.addEventListener("click", function() {
        carritoMenu.style.display = "block";
    });

    cerrarCarritoBtn.addEventListener("click", function() {
        carritoMenu.style.display = "none";
    });


    function mostrarMensaje(mensaje) {
        mensajeAgregado.textContent = mensaje;
        mensajeAgregado.style.display = "block";

        setTimeout(function() {
            mensajeAgregado.style.display = "none";
        }, 800);
    }

   
    comprarAhoraBtn.addEventListener('click', function() {
        if (listaCarrito.childElementCount === 0) {
            // alert('Usted no tiene ningún producto, por favor agregue uno.');
            mostrarMensaje("Usted no tiene ningún producto, por favor agregue uno");
        } else {
            confirmacionCompra.style.display = 'block';
        }
    })
});



