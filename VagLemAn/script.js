// =========================
// CARRUSEL VAGLEMAN
// =========================

const imagenes = [

    "img/slide1.jpg",
    "img/slide2.jpg",
    "img/slide3.jpg",
    "img/slide4.jpg",
    "img/slide5.jpg"

];

let indice = 0;

const slider = document.getElementById("slider-img");

const botonSiguiente = document.getElementById("next");

const botonAnterior = document.getElementById("prev");

// =========================
// CAMBIAR IMAGEN
// =========================

function mostrarImagen(){

    slider.style.opacity = "0";

    setTimeout(() => {

        slider.src = imagenes[indice];

        slider.style.opacity = "1";

    }, 250);

}

// =========================
// BOTON SIGUIENTE
// =========================

botonSiguiente.addEventListener("click", () => {

    indice++;

    if(indice >= imagenes.length){

        indice = 0;

    }

    mostrarImagen();

});

// =========================
// BOTON ANTERIOR
// =========================

botonAnterior.addEventListener("click", () => {

    indice--;

    if(indice < 0){

        indice = imagenes.length - 1;

    }

    mostrarImagen();

});

// =========================
// AUTO PLAY
// =========================

setInterval(() => {

    indice++;

    if(indice >= imagenes.length){

        indice = 0;

    }

    mostrarImagen();

}, 5000);

// =========================
// EFECTO SUAVE
// =========================

slider.style.transition = "opacity .5s ease";

// =========================
// ANIMACION AL HACER SCROLL
// =========================

const elementos = document.querySelectorAll(
".card, .producto"
);

const observer = new IntersectionObserver(

(entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";

            entry.target.style.transform =
            "translateY(0)";

        }

    });

},

{
    threshold:0.15
}

);

elementos.forEach(elemento => {

    elemento.style.opacity = "0";

    elemento.style.transform =
    "translateY(50px)";

    elemento.style.transition =
    "all .8s ease";

    observer.observe(elemento);

});

// =========================
// HEADER DINAMICO
// =========================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    header.style.background = "#ffffff";

    header.style.boxShadow =
    "0 4px 20px rgba(0,0,0,.08)";

});