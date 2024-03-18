let numeroSecreto = 0;
let intentos = 0;
let listaNumeros = [];
let numeroMax = 10;


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    }
    
  
function condicionesIniciales(){
    asignarTextoElemento ('h1', 'Juego del Numero Secreto');
    asignarTextoElemento ('p', `Escoge un numero del 1 al ${numeroMax} ^^`)
    numeroSecreto = genNumeroSecreto ();
    intentos = 1;

}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('numeroDesignar').value);
    if (numeroSecreto===numeroUsuario) {
        asignarTextoElemento ('p', `Has acertado el numero!!, en  ${intentos} ${(intentos=== 1) ? 'intento' : 'intentos'}`); 
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroUsuario > numeroSecreto)
        asignarTextoElemento ('p', 'El numero es menor :c'); 
        else {
            asignarTextoElemento ('p', 'El numero es mayor :c')
        }
       
    }
    intentos++;
    limpiarCaja();
return;
}

function limpiarCaja() {
    document.querySelector ('#numeroDesignar').value = '';
}
function genNumeroSecreto() {
    let numeroB = Math.floor(Math.random()* numeroMax)+1
    console.log (numeroB);
    console.log (listaNumeros);

    if (listaNumeros.length == numeroMax) {
        asignarTextoElemento('p','Yan has completado todos los posibles, haz f5 c:')
    } else {
    if (listaNumeros.includes(numeroB)){
    return genNumeroSecreto();
    } else {
        listaNumeros.push(numeroB);
        return numeroB;
    }
    }
}


function repetir() {
    limpiarCaja();
    condicionesIniciales();
    document.getElementById ('reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();