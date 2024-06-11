let mostrador = document.getElementById("mostrador");
let seleccion = document.getElementById("seleccion");
let imgSeleccionada = document.getElementById("img");
let modeloSeleccionado = document.getElementById("modelo");
let descripSeleccionada = document.getElementById("descripcion2");
let precioSeleccionado = document.getElementById("precio");

function cargar(item){
    quitarBordes();
    mostrador.style.width = "60%";
    seleccion.style.width = "40%";
    seleccion.style.opacity = "1";
    item.style.border = "2px solid red";

    imgSeleccionada.src = item.getElementsByTagName("img")[0].src;

    modeloSeleccionado.innerHTML =  item.getElementsByTagName("p")[0].innerHTML;

    descripSeleccionada.innerHTML = "Descripción del modelo ";

    // Obtener el precio original
    let precioOriginal = parseFloat(item.getElementsByClassName("precio")[0].innerHTML.replace("$ ", "").replace(",", ""));

    // Calcular el descuento del 12%
    let descuento = precioOriginal * 0.12;
    let precioConDescuento = precioOriginal - descuento;

    // Mostrar el precio original y el precio con descuento en la consola
    console.log("Precio original: $" + precioOriginal);
    console.log("Precio con descuento: $" + precioConDescuento);

    // Mostrar el precio con descuento
    precioSeleccionado.innerHTML = "$ " + precioConDescuento.toFixed(2); // Mostrar el precio con 2 decimales
}

function cerrar(){
    mostrador.style.width = "100%";
    seleccion.style.width = "0%";
    seleccion.style.opacity = "0";
    quitarBordes();
}

function quitarBordes(){
    var items = document.getElementsByClassName("item");
    for(i=0;i <items.length; i++){
        items[i].style.border = "none";
    }
}