const hamburger = document.querySelector("#hamburger");
const abrir = document.querySelector("#openHamburger");
const cerrar = document.querySelector("#closeHamburger");

abrir.addEventListener("click", () => {
    hamburger.classList.add("visible");
})

cerrar.addEventListener("click", () =>{
    hamburger.classList.remove("visible");
})
