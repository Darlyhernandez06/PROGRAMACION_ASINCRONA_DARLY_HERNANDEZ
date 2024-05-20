// 16. Crea tres Promises consecutivas, donde cada una se resuelva después de 1 segundo y
// devuelva un número diferente. Luego, encadena las tres Promises para sumar los resultados
// y mostrar el resultado final.

// Función que devuelve una Promise que se resuelve después de 1 segundo con un número dado
function createPromise(number) {
    // Crea una nueva promesa
    return new Promise((resolve) => {
      // Establece un temporizador para esperar 1 segundo (1000 milisegundos)
      setTimeout(() => {
        // Resuelve la promesa con el número dado después de 1 segundo
        resolve(number);
      }, 1000);
    });
}  

// Crear las tres Promesas
const promise1 = createPromise(1); // Crea la primera promesa que se resuelve con el número 1
const promise2 = createPromise(2); // Crea la segunda promesa que se resuelve con el número 2
const promise3 = createPromise(3); // Crea la tercera promesa que se resuelve con el número 3

// Encadenar las tres Promesas para sumar los resultados
promise1
  .then((resultado1) => {
    // Cuando la primera promesa se resuelve, se imprime el resultado
    console.log(`Promesa 1 resuelta con: ${resultado1}`);
    // Devuelve la segunda promesa y suma su resultado al de la primera promesa
    return promise2.then((resultado2) => {
      console.log(`Promesa 2 resuelta con: ${resultado2}`);
      return resultado1 + resultado2;
    });
  })
  .then((sumaParcial) => {
    // Cuando la segunda promesa se resuelve, se imprime la suma parcial
    return promise3.then((resultado3) => {
      console.log(`Promesa 3 resuelta con: ${resultado3}`);
      // Devuelve la suma de la suma parcial y el resultado de la tercera promesa
      return sumaParcial + resultado3;
    });
  })
  .then((sumaFinal) => {
    // Cuando la tercera promesa se resuelve, se imprime la suma final
    console.log(`La suma final es: ${sumaFinal}`);
});


// Crear tres promesas consecutivas:

// Cada promesa debe resolverse después de 1 segundo.
// Cada promesa debe devolver un número diferente (por ejemplo, 1, 2, y 3).
// Encadenar las tres promesas:

// Las promesas deben resolverse una después de la otra.
// Debes sumar los resultados de las tres promesas.
// Mostrar el resultado final:

// Después de que las tres promesas se hayan resuelto y sumado sus resultados, debes mostrar la suma total en la consola.

// Crear una promesa que se resuelve después de 1 segundo con el número proporcionado como argumento.
// La función recibe un argumento number.
// Retorna una nueva promesa.
// Dentro de la promesa, se establece un temporizador (setTimeout) que espera 1 segundo.
// Después de 1 segundo, la promesa se resuelve con el número proporcionado (resolve(number))

// Crear tres promesas que se resuelvan con los números 1, 2 y 3 respectivamente después de 1 segundo.
// promise1 se resuelve con el número 1.
// promise2 se resuelve con el número 2.
// promise3 se resuelve con el número 3.

// Encadenar las tres promesas para sumarlas y mostrar el resultado final.
// Primera promesa (promise1):
// Cuando se resuelve, imprime el resultado (resultado1).
// Devuelve la segunda promesa (promise2) y suma su resultado al de la primera promesa.
// Segunda promesa (promise2):
// Cuando se resuelve, imprime el resultado (resultado2).
// Devuelve la suma de resultado1 y resultado2.
// Tercera promesa (promise3):
// Cuando se resuelve, imprime el resultado (resultado3).
// Devuelve la suma de la suma parcial (resultado1 + resultado2) y resultado3.
// Resultado final:
// Cuando la tercera promesa se resuelve, imprime la suma final en la consola (sumaFinal).
// Primera promesa: Se resuelve y su resultado se maneja.
// Segunda promesa: Se encadena y su resultado se suma al resultado de la primera.
// Tercera promesa: Se encadena y su resultado se suma a la suma parcial.
// Resultado final: Se muestra la suma total de todas las promesas.

// .then es un método utilizado en las promesas (Promises) en JavaScript. Las promesas son una forma de manejar 
// operaciones asíncronas, permitiendo que el código siga ejecutándose mientras se espera a que se complete una 
// operación que puede tardar algún tiempo, como una solicitud de red o un temporizador.

// Detalles del método .then
// .then se utiliza para manejar el resultado de una promesa una vez que ésta se ha resuelto (cumplida) o rechazada.

// Sintaxis:
// promise.then(onFulfilled, onRejected);
// onFulfilled: Una función que se ejecuta si la promesa se resuelve con éxito. Recibe el valor de resolución de la 
// promesa.
// onRejected: Una función que se ejecuta si la promesa es rechazada. Recibe el motivo del rechazo.
// Cadena de promesas: Una característica poderosa de .then es que puede devolver otra promesa, lo que permite encadenar
// múltiples operaciones asíncronas de manera secuencial. Cada .then en la cadena espera a que la promesa anterior se
// resuelva antes de ejecutarse.
