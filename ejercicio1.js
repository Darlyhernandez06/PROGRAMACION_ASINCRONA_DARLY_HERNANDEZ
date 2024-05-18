// 1. Escriba una función imprimirNumeros(desde, hasta) que genere un número cada segundo,
// comenzando desde desde y terminando con hasta.
// Haz dos variantes de la solución describiendo el paso a paso de cada una de ellas:

// • Usando setInterval.

// Definir la función imprimirNumeros, esta función recibirá dos parámetros: desde y hasta
function imprimirNumeros(desde, hasta) {
    // Declara una variable para rastrear el número actual que se va a imprimir
    let NumeroActual = desde;

    // Definir un intervalo que se ejecutará cada 1000 milisegundos (1 segundo)
    const intervalo = setInterval(() => {
        // Imprime el número actual en la consola
        console.log(NumeroActual);

        // Verifica si el número actual es igual al número final
        if (NumeroActual === hasta) {
            // Si es igual, se detiene el intervalo para que deje de ejecutarse
            clearInterval(intervalo);
        }

        // Incrementa el número actual en 1
        NumeroActual++;
    }, 1000);
}

// Llamar a la función con los argumentos 1 y 10
imprimirNumeros(1, 10);



// • Usando setTimeout anidado

// Definir la función imprimirNumeros, esta función recibirá dos parámetros: desde y hasta
function imprimirNumeros(desde, hasta) {
    // Declara una variable para rastrear el número actual que se va a imprimir
    let NumeroActual = desde;

    // Definir una función interna que se encargará de imprimir y planificar la siguiente impresión
    function imprimir() {
        // Imprime el número actual en la consola
        console.log(NumeroActual);

        // Verifica si el número actual es menor que el número final
        if (NumeroActual < hasta) {
            // Incrementa el número actual en 1
            NumeroActual++;

            // Planifica la siguiente ejecución de la función imprimir después de 1000 milisegundos (1 segundo)
            setTimeout(imprimir, 1000);
        }
    }

   // Llama a la función interna por primera vez para iniciar el proceso
    imprimir();
}

// Llamar a la función con los argumentos 1 y 10
imprimirNumeros(1, 10);


// Este código implementa dos formas diferentes de imprimir números en la consola, desde un número inicial hasta un 
// número final, con un intervalo de 1 segundo entre cada número.

// Usando setInterval:
// Se define una función llamada imprimirNumeros que toma dos parámetros: desde (el número inicial) y hasta 
// (el número final).
// Se inicializa una variable NumeroActual con el valor de desde.
// Se establece un intervalo que ejecuta una función cada 1000 milisegundos (1 segundo).
// En cada ejecución de la función del intervalo, se imprime el número actual en la consola y se comprueba si el número
// actual es igual al número final. Si son iguales, se detiene el intervalo. Si no, se incrementa el número actual en 1.
// Finalmente, se llama a la función imprimirNumeros con los argumentos 1 y 10, lo que imprimirá los números del 1 al 10
// en la consola con un intervalo de 1 segundo entre cada número.

// Usando setTimeout anidado:
// Se redefine la función imprimirNumeros para implementar una lógica similar, pero utilizando setTimeout de manera 
// anidada en lugar de setInterval.
// Se define una función interna llamada imprimir que se encarga de imprimir el número actual en la consola y planificar
// la próxima impresión después de 1 segundo.
// Dentro de imprimir, se verifica si el número actual es menor que el número final. Si es así, se incrementa el número
// actual y se planifica la próxima ejecución de imprimir después de 1 segundo.
// Se llama a la función interna imprimir para iniciar el proceso.
// Al igual que con el primer método, se llama a la función imprimirNumeros con los argumentos 1 y 10, lo que imprimirá 
// los números del 1 al 10 en la consola con un intervalo de 1 segundo entre cada número.