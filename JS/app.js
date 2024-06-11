// Paso 1: Obtener el DOM
let nextDom = document.getElementById('siguiente');
let prevDom = document.getElementById('anterior');

let carouselDom = document.querySelector('.slider');
let sliderDom = carouselDom.querySelector('.slider .lista');
let thumbnailBorderDom = document.querySelector('.slider .miniatura');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.elemento');
let timeDom = document.querySelector('.slider .tiempo');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let tiempoCorriendo = 3000;
let tiempoAutoSiguiente = 7000;

nextDom.onclick = function(){
    mostrarSlider('siguiente');    
}

prevDom.onclick = function(){
    mostrarSlider('anterior');    
}
let ejecutarTimeout;
let ejecutarSiguienteAuto = setTimeout(() => {
    nextDom.click();
}, tiempoAutoSiguiente)
function mostrarSlider(tipo){
    let sliderItemsDom = sliderDom.querySelectorAll('.slider .lista .elemento');
    let thumbnailItemsDom = document.querySelectorAll('.slider .miniatura .elemento');
    
    if(tipo === 'siguiente'){
        sliderDom.appendChild(sliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('siguiente');
    }else{
        sliderDom.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('anterior');
    }
    clearTimeout(ejecutarTimeout);
    ejecutarTimeout = setTimeout(() => {
        carouselDom.classList.remove('siguiente');
        carouselDom.classList.remove('anterior');
    }, tiempoCorriendo);

    clearTimeout(ejecutarSiguienteAuto);
    ejecutarSiguienteAuto = setTimeout(() => {
        nextDom.click();
    }, tiempoAutoSiguiente)
}