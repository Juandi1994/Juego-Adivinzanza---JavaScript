
// El juego selecciona un numero al azar
let numeroAzar = Math.floor(Math.random() * 100) + 1;

let numeroEntrada = document.getElementById('numeroEntrada');

let mensaje = document.getElementById('mensaje');

let intento = document.getElementById('intento');

let intentos = 0;
//Esta accion se va ejecutar cuadno se toque el boton comprobar
function resultado() {

    intentos++;
    intento.textContent = intentos;
    let numeroIngresado = parseInt(numeroEntrada.value);

    if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)) {
        mensaje.textContent = 'Por favor ingresa un numero valido entre 1 y 100';
        return
    }
    if (numeroIngresado === numeroAzar) {
        mensaje.textContent = 'Felicitaciones, has adivinado el numero';
        mensaje.style.color = 'green';
        numeroEntrada.disabled = true;
    }
    else if (numeroIngresado < numeroAzar) {
        mensaje.textContent = 'El numero es mayor';
        mensaje.style.color = 'blue';
    }
    else {
        mensaje.textContent = 'El numero es menor'
        mensaje.style.color = 'red';
    }
}