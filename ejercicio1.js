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