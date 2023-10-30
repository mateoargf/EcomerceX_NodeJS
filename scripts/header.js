const hamburger = document.querySelector("#hamburger");
const abrir = document.querySelector("#openHamburger");
const cerrar = document.querySelector("#closeHamburger");


const bag = document.querySelector("#menuBag");
const abrirBag = document.querySelector("#openBag");
const cerrarBag = document.querySelector("#closeBag");


const plus = document.querySelector("#plus");
const abrirPlus = document.querySelector("#openPlus");
const cerrarPlus = document.querySelector("#closePlus");


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



abrirPlus.addEventListener("click", () =>{
    plus.classList.add("visible");
})

cerrarPlus.addEventListener("click", () =>{
    plus.classList.remove("visible");
})



