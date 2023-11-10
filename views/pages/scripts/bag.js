const bag = document.querySelector("#menuBag");
const abrirBag = document.querySelector("#openBag");
const cerrarBag = document.querySelector("#closeBag");

abrirBag.addEventListener("click", () => {
    bag.classList.add ("visible");
})

cerrarBag.addEventListener("click", () =>{
    bag.classList.remove("visible");
})





