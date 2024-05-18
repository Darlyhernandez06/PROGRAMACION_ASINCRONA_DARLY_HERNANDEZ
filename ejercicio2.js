// 2. En el siguiente código hay una llamada programada setTimeout, luego se ejecuta un cálculo
// pesado que demora más de 100 ms en finalizar.
// ¿Cuándo se ejecutará la función programada y por qué se ejecutará?
// a) Después del bucle.
// b) Antes del bucle.
// c) Al comienzo del bucle.

// Declara una variable i y la inicializa en 0
let i = 0;

// Programa una función para mostrar una alerta con el valor de i después de 100 milisegundos
setTimeout(() => alert(i), 100);

// Un bucle que ejecuta una tarea pesada incrementando i de 0 a 100,000,000
for (let j = 0; j < 100000000; j++) {
  i++;
}

// El alert se ejecutará después de que el bucle haya terminado,
// mostrando el valor final de i, que es 100000000
// Respuesta: a) Después del bucle. alert(i) mostrará 100000000.


// RTA:
// Llamada a setTimeout:

// setTimeout(() => alert(i), 100); programa una función para que se ejecute después de al menos 100 milisegundos.

// Ejecución del bucle:
// El bucle for incrementa i de 0 a 100,000,000, lo que tomará más de 100 milisegundos en completarse.

// Cuándo se ejecutará la función programada:
// La función programada se ejecutará después del bucle.

// Razón:
// Aunque setTimeout coloca la función en la cola de tareas después de 100 ms, esta no puede ejecutarse hasta
// que el bucle termine, porque el bucle está ocupando el procesador.
// Solo después de que el bucle termine, el JavaScript puede ejecutar la función programada.

// ¿Qué va a mostrar alert()?
// RTA:
// Cuando la función () => alert(i) se ejecute, el valor de i será 100,000,000 porque el bucle habrá terminado y 
// i se habrá incrementado hasta ese valor.

// Conclusión:
// La función programada se ejecutará después del bucle.
// alert(i) mostrará 100000000.
