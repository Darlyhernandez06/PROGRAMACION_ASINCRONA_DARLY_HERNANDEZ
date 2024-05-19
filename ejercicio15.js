// 15. Crea una Promise que se rechace después de 2 segundos y captura el error para imprimir 
// "Error: Promise rechazada"

// Crear una promesa que se rechace después de 2 segundos
const promesaRechazada = new Promise((resolve, reject) => {
    // Dentro de la función de inicialización de la promesa, configurar un temporizador que se ejecute después de 2000 milisegundos (2 segundos)
    setTimeout(() => {
        // Al cumplirse el temporizador, llamar al método reject de la promesa y pasar el mensaje "¡Error: Promise rechazada después de 2 segundos!"
        reject("¡Error: Promise rechazada después de 2 segundos!");
    }, 2000);
});

// Capturar el error utilizando el método catch
promesaRechazada.catch(error => {
    // Dentro del bloque catch, imprimir el mensaje de error en la consola
    console.log(error); // Imprimir el mensaje de error
});


// En este código se está solicitando crear una promesa que se rechace después de 2 segundos. Luego, se debe capturar 
// el error generado por el rechazo de la promesa y se imprime el mensaje "¡Error: Promise rechazada después de 2 segundos!".

// Se crea una nueva promesa llamada promesaRechazada.
// Dentro de la función de inicialización de la promesa, se configura un temporizador utilizando setTimeout que se 
// ejecutará después de 2000 milisegundos (2 segundos).
// Cuando se cumple el temporizador, se llama al método reject de la promesa y se pasa el mensaje "Error: Promise 
// rechazada".
// Se captura el error utilizando el método catch de la promesa promesaRechazada.
// Dentro del bloque catch, se imprime el mensaje de error en la consola utilizando console.log(error).