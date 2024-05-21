// 21. Realiza tres Promises, algunas de las cuales se resuelvan y otras se rechacen. Utiliza
// Promise.allSettled() para obtener información sobre el estado de todas las Promises.

// Función que devuelve una Promise resuelta después de un cierto intervalo de tiempo
function delayedResolve(value, delay) {
    // Crea una nueva Promise que se resolverá con el valor proporcionado después del intervalo de tiempo especificado
    return new Promise((resolve) => {
        // Establece un temporizador para esperar el tiempo especificado
        setTimeout(() => {
            // Resuelve la Promise con el valor proporcionado
            resolve(value);
        }, delay);
    });
}

// Función que devuelve una Promise rechazada después de un cierto intervalo de tiempo
function delayedReject(reason, delay) {
    // Crea una nueva Promise que se rechazará con la razón proporcionada después del intervalo de tiempo especificado
    return new Promise((resolve, reject) => {
        // Establece un temporizador para esperar el tiempo especificado
        setTimeout(() => {
            // Rechaza la Promise con la razón proporcionada
            reject(reason);
        }, delay);
    });
}

// Crear tres Promises con diferentes estados
const promise1 = delayedResolve('Primera Promise Resuelta', 2000); // Resuelta después de 2 segundos
const promise2 = delayedReject('Segunda Promise Rechazada', 3000); // Rechazada después de 3 segundos
const promise3 = delayedResolve('Tercera Promise Resuelta', 4000); // Resuelta después de 4 segundos

// Resuelve y muestra los resultados de la primera Promise
promise1.then((result) => {
    console.log('Resultado de la primera Promise:', result);
}).catch((error) => {
    console.error('Error en la primera Promise:', error);
});

// Resuelve y muestra los resultados de la segunda Promise
promise2.then((result) => {
    console.log('Resultado de la segunda Promise:', result);
}).catch((error) => {
    console.error('Error en la segunda Promise:', error);
});

// Resuelve y muestra los resultados de la tercera Promise
promise3.then((result) => {
    console.log('Resultado de la tercera Promise:', result);
}).catch((error) => {
    console.error('Error en la tercera Promise:', error);
});

// Utilizar Promise.allSettled() para obtener información sobre el estado de todas las Promises
Promise.allSettled([promise1, promise2, promise3])
    .then((results) => {
        // Cuando todas las Promises se han resuelto o rechazado, se ejecuta este bloque de código
        console.log('Estado de todas las Promises:');
        results.forEach((result, index) => {
            // Muestra el estado de cada Promise y su valor o razón en la consola
            console.log(`Promise ${index + 1}: Estado - ${result.status}, Valor o Razón -`, result.value || result.reason);
        });
    })
    .catch((error) => {
        // Manejar cualquier error que pueda ocurrir durante la ejecución de Promise.allSettled()
        console.error('Error:', error);
});


// está pidiendo que se creen tres Promises, algunas de las cuales se resolverán y otras se rechazarán. Luego, se debe 
// utilizar Promise.allSettled() para obtener información sobre el estado de todas las Promises, independientemente 
// de si se resuelven o se rechazan.

// function delayedResolve(value, delay) {: Define una función llamada delayedResolve que toma dos parámetros: value, 
// que es el valor con el que se resolverá la Promise, y delay, que es el tiempo de espera en milisegundos antes de que 
// se resuelva la Promise.

// return new Promise((resolve) => {: Crea una nueva Promise que se resolverá con el valor proporcionado después del
// intervalo de tiempo especificado.
    
// setTimeout(() => {: Establece un temporizador para esperar el tiempo especificado.
    
// resolve(value);: Resuelve la Promise con el valor proporcionado.
    
// function delayedReject(reason, delay) {: Define una función llamada delayedReject que toma dos parámetros: reason,
// que es la razón con la que se rechazará la Promise, y delay, que es el tiempo de espera en milisegundos antes de que
// se rechace la Promise.
    
// return new Promise((resolve, reject) => {: Crea una nueva Promise que se rechazará con la razón proporcionada 
// después del intervalo de tiempo especificado.
    
// setTimeout(() => {: Establece un temporizador para esperar el tiempo especificado.
    
// reject(reason);: Rechaza la Promise con la razón proporcionada.
    
// const promise1 = delayedResolve('Primera Promise Resuelta', 2000);: Crea la primera Promise que se resolverá después
// de 2 segundos.
    
// const promise2 = delayedReject('Segunda Promise Rechazada', 3000);: Crea la segunda Promise que se rechazará 
// después de 3 segundos.
    
// const promise3 = delayedResolve('Tercera Promise Resuelta', 4000);: Crea la tercera Promise que se resolverá después
// de 4 segundos.

// promise1.then((result) => { ... }).catch((error) => { ... });: Esta línea significa que después de que promise1 se
// resuelva correctamente, se ejecutará la función que se pasa a then, que toma el resultado de la promesa como 
// argumento (result). Si promise1 se rechaza, se ejecutará la función que se pasa a catch, que toma el error como 
// argumento (error). En este caso, el resultado o el error se imprimirán en la consola, dependiendo de si la promesa
// se resuelve o se rechaza.

// promise2.then((result) => { ... }).catch((error) => { ... });: Similar a promise1, pero aplicado a promise2.

// promise3.then((result) => { ... }).catch((error) => { ... });: Similar a promise1, pero aplicado a promise3.
    
// Promise.allSettled([promise1, promise2, promise3]): Utiliza Promise.allSettled() para obtener información sobre el 
// estado de todas las Promises creadas anteriormente.
    
// .then((results) => {: Cuando todas las Promises se han resuelto o rechazado, se ejecuta este bloque de código.
    
// console.log('Estado de todas las Promises:');: Muestra un mensaje indicando que se mostrará el estado de todas las 
// Promises.
    
// results.forEach((result, index) => {: Itera sobre cada resultado de las Promises.
    
// console.log(Promise ${index + 1}: Estado - ${result.status}, Valor o Razón -, result.value || result.reason);:
// Muestra el estado de cada Promise y su valor o razón en la consola.

// console.log(Promise ${index + 1}: Estado - ${result.status}, Valor o Razón -, result.value || result.reason);

// Promise ${index + 1}:: Imprime un mensaje indicando el número de la Promise, donde index + 1 representa el índice 
// de la Promise en el array de resultados más 1, ya que los índices en JavaScript comienzan desde 0.

// Estado - ${result.status}: Imprime el estado de la Promise, donde result.status representa el estado de la Promise,
// que puede ser "fulfilled" si se resolvió o "rejected" si fue rechazada.

// , Valor o Razón -: Añade un texto indicando que se mostrará el valor en caso de que la Promise se haya resuelto,
// o la razón en caso de haber sido rechazada.

// result.value || result.reason: Muestra el valor si la Promise se resolvió (result.value), o la razón si fue rechazada
// (result.reason). El operador lógico || (OR) se utiliza para mostrar el valor si está presente y, si no lo está, 
// mostrar la razón.
    
// .catch((error) => {: Captura cualquier error que pueda ocurrir durante la ejecución de Promise.allSettled().
    
// console.error('Error:', error);: Muestra un mensaje de error en la consola si ocurre algún error durante la 
// ejecución de Promise.allSettled().

