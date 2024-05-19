// 12. La función incorporada setTimeout utiliza callbacks. Crea una alternativa basada en promesas.
// La función delay(ms) debería devolver una promesa. Esa promesa debería resolverse
// después de ms milisegundos, para que podamos agregarle. then, así:

// La función delay(ms) devuelve una promesa que se resolverá después de ms milisegundos
function delay(ms) {
    // La función constructora Promise se utiliza para crear una nueva promesa
    return new Promise(resolve => {
        // setTimeout se utiliza para establecer un temporizador que resuelve la promesa después de ms milisegundos
        setTimeout(resolve, ms);
    });
}

// Uso de la función delay para esperar 3 segundos antes de mostrar un mensaje de alerta
delay(3000).then(() => alert("Se ejecuta después de 3 segundos"));


// En el ejercicio se pide crear una función llamada delay que devuelva una promesa. Esta promesa debe resolverse después 
// de una cantidad especificada de milisegundos (ms). La idea es simular el comportamiento de setTimeout, pero utilizando 
// promesas en lugar de callbacks. Luego, se pide demostrar el uso de esta función esperando 3 segundos antes de mostrar 
// un mensaje de alerta.

// function delay(ms) {: Esto define una función llamada delay que toma un parámetro ms, que representa el número de
// milisegundos que se deben esperar antes de que se resuelva la promesa.

// return new Promise(resolve => {: Aquí se crea una nueva instancia de la clase Promise. La función de constructor de 
// Promise toma una función de callback que tiene dos parámetros: resolve y reject. En este caso, solo se utiliza 
// resolve, que es una función que se llama para resolver la promesa cuando se completa la operación asincrónica.

// setTimeout(resolve, ms);: Esta línea utiliza la función setTimeout para establecer un temporizador que ejecutará la 
// función resolve después de ms milisegundos. Esto simula un retraso antes de que se resuelva la promesa.
    
// });: Cierra la definición de la función de la promesa.
    
// delay(3000).then(() => alert("Se ejecuta después de 3 segundos"));: Aquí se llama a la función delay con un argumento
// de 3000 milisegundos (3 segundos). Esto devuelve una promesa. La función then se encadena a la promesa, lo que 
// significa que se ejecutará después de que la promesa se resuelva. En este caso, la función then ejecutará una 
// alerta que muestra el mensaje "Se ejecuta después de 3 segundos" cuando la promesa se resuelva después de 3 segundos.