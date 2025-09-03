const titulo = document.getElementById("felipe");
let JUANOTRAVEZ = true;

titulo.innerText = "¿QUIEN ES JUAN";

console.log("JUAN");

titulo.addEventListener("click", () => {
    if(JUANOTRAVEZ === true) {
    titulo.innerText = "Ahora es Felipe"
    titulo.style.color = "gray";    
}
else {
    titulo.innerText = "¿QUIEN ES JUAN";
    titulo.style.color = "violet"
}

JUANOTRAVEZ = !JUANOTRAVEZ;
});

