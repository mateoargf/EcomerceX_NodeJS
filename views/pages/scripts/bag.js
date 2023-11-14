document.addEventListener("DOMContentLoaded", function() {
    const carritoBtn = document.querySelector("#carritoBtn");
    const carritoMenu = document.querySelector("#carritoMenu");
    const comprarAhoraBtn = document.querySelector("#comprarAhoraBtn");
    const cerrarCarritoBtn = document.querySelector("#cerrarCarritoBtn");
    const confirmacionCompra = document.querySelector("#confirmacionCompra");

    let total = 0;

    carritoBtn.addEventListener("click", function() {
        carritoMenu.style.display = "block";
    });

    cerrarCarritoBtn.addEventListener("click", function() {
        carritoMenu.style.display = "none";
    });

    comprarAhoraBtn.addEventListener("click", function() {
        if (total === 0) {
            alert("Usted no tiene ningún producto, por favor agregue uno.");
        } else {
            confirmacionCompra.style.display = "block";
        }
    });
});

