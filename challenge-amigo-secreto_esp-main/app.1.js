const amigos = [];
let nombreSeleccionado = '';

function asignarTextoElemento(elemento, texto) {
    const elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function agregarAmigo() {
    const nombreAmigo = document.getElementById("amigo").value.trim(); //Se investigo la funcion de trim que sirve para eliminar espacios extra
    if (nombreAmigo === "") {
        alert('Por favor, ingresa el nombre de alguno de tus amigos en la cajita de abajo por favor.');
    } else {
        amigos.push(nombreAmigo);
        mostrarListaAmigos();
        limpiarCaja();
    }
}

// Función para mostrar la lista de amigos en la pantalla del programa
function mostrarListaAmigos() {
    const listaElement = document.getElementById("listaAmigos");
    listaElement.innerHTML = ''; 

    amigos.forEach(function (amigo) {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaElement.appendChild(li);
    });
}

// Aqui se genera el sorteo mediante la funcion de Math.Random
function sortearAmigo() {
    if (amigos.length > 0) {
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        nombreSeleccionado = amigos[indiceAleatorio];
        asignarTextoElemento('#resultado', `El amigo secreto es: ${nombreSeleccionado}`);
    } else {
        alert('No hay amigos para realizar el sorteo. Añade el nombre de los participantes.');
    }
}

function limpiarCaja() {
    document.getElementById("amigo").value = '';
}


function condicionesIniciales() {
    amigos.length = 0; 
    document.getElementById('resultado').innerHTML = ''; 
}


function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
}

condicionesIniciales();
