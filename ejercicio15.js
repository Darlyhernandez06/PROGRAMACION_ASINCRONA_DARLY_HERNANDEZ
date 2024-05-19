// 15. Crea una Promise que se rechace después de 2 segundos y captura el error para imprimir 
// "Error: Promise rechazada"

// Crear una promesa que se rechace después de 2 segundos
const promesaRechazada = new Promise((resolve, reject) => {
    // Se define una nueva promesa con el constructor Promise, que recibe una función de inicialización con los parámetros resolve y reject.
    setTimeout(() => {
        // Se establece un temporizador que ejecutará la función de rechazo después de 2000 milisegundos (2 segundos).
        reject("¡Error: Promise rechazada después de 2 segundos!");
        // La función reject se invoca con el mensaje "Error: Promise rechazada".
    }, 2000);
});

// Capturar el error utilizando el método catch
promesaRechazada.catch(error => {
    // Se llama al método catch de la promesa promesaRechazada para manejar cualquier error que ocurra durante la ejecución de la promesa.
    console.log(error); // Imprimir el mensaje de error en la consola
    // Se imprime el mensaje de error en la consola.
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