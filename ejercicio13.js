// 13. Crea una Promise que se resuelva después de 3 segundos y luego imprima "Promise resuelta" cuando se cumpla.

// Definición de la función promesa que devuelve una nueva Promise
function promesa() {
    // Se crea una nueva Promise que recibe una función de resolución como argumento
    return new Promise(resolve => {
        // Se utiliza setTimeout para esperar 3000 milisegundos (3 segundos)
        setTimeout(() => {
            // Después de 3 segundos, se imprime "¡Promise resuelta después de 3 segundos!"
            console.log("¡Promise resuelta después de 3 segundos!");
            // Se resuelve la Promise llamando a la función resolve()
            resolve();
        }, 3000);
    });
}

// Uso de la función promesa
promesa();


// En el ejercicio se está pidiendo crear una Promise que se resuelva después de 3 segundos y luego imprima 
// "Promise resuelta" cuando se cumpla esa Promise. Esto significa que se debe crear una función que devuelva una
// Promise que se resuelva automáticamente después de 3 segundos, y cuando se resuelva, debe imprimir el mensaje 
// "Promise resuelta"

// function promesa() {: Se define una función llamada promesa que no toma ningún argumento.

// return new Promise(resolve => {: Dentro de esta función, se crea una nueva Promise utilizando el constructor 
// Promise, que toma una función como argumento. Esta función recibe un parámetro resolve, que es una función 
// proporcionada por JavaScript que se utiliza para resolver la Promise.
    
// setTimeout(() => {: Se utiliza la función setTimeout para establecer un temporizador que ejecutará una función 
// después de un cierto período de tiempo. En este caso, después de 3000 milisegundos (3 segundos).
    
// console.log("¡Promise resuelta!");: Dentro de la función del temporizador, se imprime el mensaje 
// "¡Promise resuelta!" en la consola.
    
// resolve();: Luego, se llama a la función resolve(), que resuelve la Promise, indicando que la operación asincrónica
// ha sido completada con éxito.
    
// }, 3000);: El valor 3000 pasado como segundo argumento a setTimeout especifica el tiempo de espera en milisegundos 
// antes de que se ejecute la función del temporizador.
    
// });: Se cierran las llaves y los paréntesis de la función setTimeout y la Promise.
    
// promesa();: Se llama a la función promesa() para iniciar el proceso de espera de 3 segundos y luego imprimir 
// "¡Promise resuelta!" en la consola.