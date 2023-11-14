// const bag = document.querySelector("#menuBag");
// const abrirBag = document.querySelector("#openBag");
// const cerrarBag = document.querySelector("#closeBag");

// abrirBag.addEventListener("click", () => {
//     bag.classList.add ("visible");
// })

// cerrarBag.addEventListener("click", () =>{
//     bag.classList.remove("visible");
// })

// document.addEventListener("DOMContentLoaded", function() {
//     const carritoBtn = document.getElementById("carritoBtn");
//     const carritoMenu = document.getElementById("carritoMenu");
//     const comprarAhoraBtn = document.getElementById("comprarAhoraBtn");
//     const cerrarCarritoBtn = document.getElementById("cerrarCarritoBtn");
//     const confirmacionCompra = document.getElementById("confirmacionCompra");
//     const siBtn = document.getElementById("siBtn");
//     const noBtn = document.getElementById("noBtn");

//     let total = 0;

//     carritoBtn.addEventListener("click", function() {
//         carritoMenu.style.display = "block";
//     });

//     cerrarCarritoBtn.addEventListener("click", function() {
//         carritoMenu.style.display = "none";
//     });

//     comprarAhoraBtn.addEventListener("click", function() {
//         if (total === 0) {
//             mostrarMensaje("Usted no tiene ningún producto, por favor agregue uno.");
//         } else {
//             confirmacionCompra.style.display = "block";
//         }
//     });

//     siBtn.addEventListener("click", function() {
//         confirmacionCompra.style.display = "none";
//         carritoMenu.style.display = "none";
//         mostrarMensaje("Compra realizada exitosamente. Total: $" + total);
//         vaciarCarrito();
//         resetearTotal();

//         // Redirigir a checkout.html al hacer clic en el botón "SI"
//         window.location.href = "./pages/checkout.html";
//     });

//     noBtn.addEventListener("click", function() {
//         confirmacionCompra.style.display = "none";
//     });

    
// });

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