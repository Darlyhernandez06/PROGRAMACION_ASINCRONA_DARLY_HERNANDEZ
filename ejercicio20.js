// 20. Crea tres Promises que se resuelvan después de diferentes intervalos de tiempo y luego
// utilice Promise.all() para mostrar un mensaje cuando todas se hayan resuelto.

// Función que devuelve una Promise que se resuelve después de un cierto intervalo de tiempo
function delayedPromise(value, delay) {
    // Crea una nueva Promise y espera a que se resuelva con el método resolve proporcionado como argumento
    return new Promise((resolve) => {
        // Crea una nueva Promise y espera a que se resuelva con el método resolve proporcionado como argumento
        setTimeout(() => {
            // Después del intervalo de tiempo, resuelve la Promise con el valor proporcionado
            resolve(value);
        }, delay);
    });
}

// Crear tres Promises que se resuelvan después de diferentes intervalos de tiempo
const promise1 = delayedPromise('Primera Promise', 2000); // Resuelta después de 2 segundos
const promise2 = delayedPromise('Segunda Promise', 3000); // Resuelta después de 3 segundos
const promise3 = delayedPromise('Tercera Promise', 4000); // Resuelta después de 4 segundos

// Array para almacenar los resultados de las Promises individuales
const results = [];

// Resuelve y muestra los resultados de la primera Promise
promise1.then((result) => {
    console.log('Resultado de la primera Promise:', result);
    results.push(result); // Agrega el resultado al array de resultados
}).catch((error) => {
    console.error('Error en la primera Promise:', error);
});

// Resuelve y muestra los resultados de la segunda Promise
promise2.then((result) => {
    console.log('Resultado de la segunda Promise:', result);
    results.push(result); // Agrega el resultado al array de resultados
}).catch((error) => {
    console.error('Error en la segunda Promise:', error);
});

// Resuelve y muestra los resultados de la tercera Promise
promise3.then((result) => {
    console.log('Resultado de la tercera Promise:', result);
    results.push(result); // Agrega el resultado al array de resultados
}).catch((error) => {
    console.error('Error en la tercera Promise:', error);
});

// Utilizar Promise.all() para esperar a que todas las Promises se resuelvan
Promise.all([promise1, promise2, promise3])
    .then((values) => {
        // Cuando todas las Promises se resuelvan, se ejecuta este bloque de código
        console.log('Todas las Promises se han resuelto:');
        // Muestra los valores de todas las Promises resueltas en la consola
        console.log(values);
    })
    .catch((error) => {
        // Manejar cualquier error que pueda ocurrir durante la ejecución de Promise.all()
        console.error('Error:', error);
});


//  pide crear tres Promises que se resuelvan después de diferentes intervalos de tiempo y luego utilizar
// Promise.all() para mostrar un mensaje cuando todas estas Promises se hayan resuelto.

// Esta línea define una función llamada delayedPromise que toma dos parámetros: value (el valor que la Promise 
// resolverá) y delay (el tiempo de espera antes de resolver la Promise).

// Aquí se crea una nueva Promise y se pasa una función como argumento al constructor de la Promise. Esta función 
// toma un parámetro llamado resolve, que es una función proporcionada por JavaScript que se utiliza para resolver
// la Promise.

// Dentro de la función que se pasa al constructor de la Promise, se utiliza setTimeout para esperar el tiempo 
// especificado en delay. Después de ese tiempo, la función resolve se llama con el value especificado, resolviendo 
// así la Promise con ese valor.

// Aquí se crean tres Promises utilizando la función delayedPromise con diferentes valores y tiempos de espera. 
// Estas Promises se almacenan en las variables promise1, promise2 y promise3.

// Array para almacenar los resultados: Se crea un array llamado results que se usará para almacenar los resultados 
// de cada Promise individual.

// Resolución de la primera Promise: Se utiliza el método then() para manejar el resultado de la primera Promise 
// (promise1). Cuando la Promise se resuelve con éxito, se ejecuta la función de retorno de llamada, que recibe el 
// resultado como argumento (result). En este caso, muestra el resultado en la consola y luego agrega ese resultado 
// al array results usando el método push().

// Resolución de la segunda Promise: Similar al paso anterior, este bloque maneja el resultado de la segunda Promise 
// (promise2). Muestra el resultado en la consola y lo agrega al array results.

// Resolución de la tercera Promise: También similar a los pasos anteriores, este bloque maneja el resultado de la tercera

// Promise.all() toma un array de Promises y devuelve una nueva Promise que se resuelve cuando todas las Promises 
// en el array se han resuelto o se rechaza si alguna de las Promises es rechazada. En este caso, se pasa un array 
// que contiene las tres Promises creadas anteriormente.

// Promise.all() es un método estático que toma un array de Promises como argumento y devuelve una nueva Promise. 
// Esta nueva Promise se resolverá cuando todas las Promises en el array original se hayan resuelto, o se rechazará 
// si alguna de ellas es rechazada.

// En otras palabras, Promise.all() espera a que todas las Promises en el array se completen, y luego devuelve un array 
// con los valores resueltos de cada Promise en el mismo orden en que se proporcionaron las Promises originales. 
// Si una de las Promises es rechazada, la Promise devuelta por Promise.all() también se rechazará inmediatamente
// y no se esperará a que se completen las Promises restantes.

// El método .then() se encadena a Promise.all() y toma una función de callback que se ejecutará cuando todas las 
// Promises se hayan resuelto. Recibe un parámetro values, que es un array que contiene los valores resueltos de cada
// Promise.

// El método .catch() se encadena a Promise.all() para manejar cualquier error que pueda ocurrir durante la ejecución 
// de las Promises. Recibe una función de callback que se ejecutará si alguna de las Promises es rechazada, y recibe 
// el error que causó el rechazo como parámetro. En este caso, simplemente imprime el error en la consola.