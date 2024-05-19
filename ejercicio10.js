// 10. Crear una función takeWhile que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// • devuelva un array con los elementos hasta el primer callback que devolvió false
// • (Inverso del dropWhile)

// Definir la función takeWhile que acepta un array y un callback
function takeWhile(array, callback) {
    // Inicializar un array vacío para almacenar los elementos tomados
    const takenArray = [];
    
    // Iterar sobre cada elemento del array
    for (let i = 0; i < array.length; i++) {
        // Ejecutar el callback para cada elemento
        // Si el callback devuelve false, detener la iteración
        if (!callback(array[i])) {
            break; // detiene la iteración
        }
        
        // Si el callback devuelve true, agregar el elemento al array tomado
        takenArray.push(array[i]);
    }
    
    // Devolver el array tomado
    return takenArray;
}

// Ejemplo de uso con un arreglo de números
const numeros = [2, 4, 6, 7, 8, 9, 10];

// Definir una función de callback que verifica si un número es par
function esPar(numero) {
    return numero % 2 === 0;
}

// Usar la función takeWhile con el arreglo de números y el callback
const resultado = takeWhile(numeros, esPar);

// Imprimir el resultado: [2, 4, 6]
console.log(resultado);


// Este ejercicio solicita la creación de una función llamada takeWhile que acepte un array y un callback y que 
// realice lo siguiente:

// Por cada elemento del array, la función debe ejecutar el callback pasándole dicho elemento como argumento.
// La función debe devolver un nuevo array que contenga los elementos del array original hasta que el primer callback
// que devolvió false.
// Esta función se describe como el "inverso del dropWhile", lo que significa que mientras dropWhile elimina elementos 
// del inicio del array hasta que el callback devuelve false, takeWhile debería hacer lo opuesto, es decir, mantener 
// elementos del inicio del array hasta que el callback devuelve false.
// En resumen, la función takeWhile permite tomar elementos del array original hasta que el primer callback devuelva
// false, devolviendo así un nuevo array con los elementos tomados hasta ese punto.

// Creación de la función takeWhile: Se define una función llamada takeWhile que acepta dos argumentos: un array y un 
// callback. Esto cumple con el requisito del ejercicio de crear una función que acepte un array y un callback.

// Iteración sobre cada elemento del array: Se utiliza un bucle for para iterar sobre cada elemento del array de entrada.

// Ejecución del callback para cada elemento: En cada iteración del bucle, se ejecuta el callback pasándole el elemento
// actual del array como argumento. Esto cumple con la especificación del ejercicio de ejecutar el callback para cada 
// elemento del array.

// Detención de la iteración si el callback devuelve false: Dentro del bucle, se verifica si el resultado del callback
// para el elemento actual es false. Si es false, se detiene la iteración usando break. Esto cumple con la especificación 
// del ejercicio de detener la iteración cuando el primer callback devuelve false.

// Agregar elementos al array tomado si el callback devuelve true: Si el callback devuelve true para el elemento actual,
// se agrega ese elemento al array takenArray. Esto se realiza utilizando el método push. Así, se va construyendo el
// array con los elementos tomados hasta el momento.

// Devolver el array tomado: Una vez que la iteración se detiene, se devuelve el array takenArray, que contiene los
// elementos tomados hasta el primer callback que devolvió false. Esto cumple con la especificación del ejercicio de
// devolver un array con los elementos hasta el primer callback que devolvió false.

// En resumen, la función takeWhile recorre el array de entrada y agrega elementos al nuevo array hasta que el callback 
// devuelve false, devolviendo así un array con los elementos tomados hasta ese punto, lo que es el inverso del 
// comportamiento de dropWhile.

// Definición del arreglo de números: Se crea un arreglo llamado numeros que contiene una serie de números, algunos 
// pares y otros impares.

// Definición de la función de callback esPar: Esta función toma un número como argumento y devuelve true si el número 
// es par, es decir, si su resto al dividirlo por 2 es igual a 0.

// Uso de la función takeWhile con el arreglo de números y el callback: Se utiliza la función takeWhile para tomar los 
// elementos del arreglo numeros hasta que se encuentre un número impar. La función takeWhile recibe como argumentos 
// el arreglo numeros y la función de callback esPar.

// Imprimir el resultado: Se imprime en la consola el resultado obtenido, que es un nuevo arreglo que contiene los 
// números tomados hasta el primer número impar encontrado en el arreglo original.

// En resumen, el código muestra cómo usar la función takeWhile para tomar elementos de un arreglo hasta que una 
// condición especificada por la función de callback sea falsa. En este caso, la función de callback esPar se 
// utiliza para tomar solo los números pares del arreglo numeros.