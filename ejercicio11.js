// 11. ¿Cuál es el resultado del código a continuación?

// Se inicializa la variable i con el valor 0
let i = 0;

// Se establece un temporizador para ejecutar una función de devolución de llamada después de 100 milisegundos
// La función de devolución de llamada mostrará una alerta con el valor de i en ese momento
setTimeout (() => alert(i), 100); // ?

// Se inicia un bucle for que se ejecutará 10,000,000 veces
// En cada iteración del bucle, se incrementa la variable i
for (let j = 0; j < 10000000; j++) {
    i++;
}


// La respuesta al enunciado es que la alerta mostrará el valor de i después de que se complete el bucle for, 
// por lo que el valor que mostrará será 10000000.

// El resultado del código será 10000000.

// "En este código, primero establecemos un temporizador usando la función setTimeout. Esto significa que queremos 
// que ocurra algo después de un cierto tiempo, en este caso, 100 milisegundos. Lo que queremos que suceda es que se 
// muestre un valor, en este caso, el valor de i, en una alerta.

// Luego, tenemos un bucle for que se ejecuta 10,000,000 de veces. En cada iteración, incrementamos el valor de i. 
// Ahora, aquí está el truco: JavaScript es de un solo hilo, lo que significa que solo puede hacer una cosa a la vez. 
// Cuando ejecutamos este bucle, bloquea la ejecución de otras tareas, incluida la alerta que debería ocurrir después 
// de 100 milisegundos.

// Entonces, cuando se ejecuta este código, la alerta no aparecerá después de 100 milisegundos como esperamos. 
// En su lugar, solo se mostrará después de que se complete todo el bucle for. Esto significa que el valor de i 
// habrá sido incrementado en 10,000,000 antes de que veamos la alerta. Por lo tanto, el resultado de la alerta 
// será 10000000."
