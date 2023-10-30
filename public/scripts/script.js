const hamburger = document.querySelector("#hamburger");
const abrir = document.querySelector("#openHamburger");
const cerrar = document.querySelector("#closeHamburger");


const bag = document.querySelector("#menuBag");
const abrirBag = document.querySelector("#openBag");
const cerrarBag = document.querySelector("#closeBag");



abrir.addEventListener("click", () => {
    hamburger.classList.add("visible");
})

cerrar.addEventListener("click", () =>{
    hamburger.classList.remove("visible");
})


abrirBag.addEventListener("click", () => {
    bag.classList.add ("visible");
})

cerrarBag.addEventListener("click", () =>{
    bag.classList.remove("visible");
})