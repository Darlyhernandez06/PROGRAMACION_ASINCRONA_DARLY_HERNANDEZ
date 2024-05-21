// 24. Crear un objeto proxy usando la clase Proxy

// Crear un objeto proxy en JavaScript usando la clase Proxy te permite interceptar y redefinir operaciones 
// fundamentales para un objeto, como leer una propiedad, escribir en una propiedad, llamar a una función, entre otros.

// El ejercicio "Crear un objeto proxy usando la clase Proxy" te pide que crees un objeto en JavaScript que utilice 
// la clase Proxy para interceptar y posiblemente modificar las operaciones sobre el objeto original. Esto incluye la
// capacidad de controlar el acceso a las propiedades del objeto, validarlas, o realizar acciones adicionales cuando 
// se accede o modifica una propiedad.

// Requisitos del Ejercicio
// Crear un Objeto Original: Un objeto básico con algunas propiedades.
// Definir un Handler: Un objeto que contiene los traps (métodos interceptores) para las operaciones que deseas 
// interceptar (como leer, escribir, etc.).
// Crear el Proxy: Utilizar la clase Proxy para envolver el objeto original con el Handler.
// Realizar Operaciones con el Proxy: Acceder y modificar las propiedades del objeto a través del proxy, observando 
// cómo se interceptan estas operaciones.

// El objeto original
const persona = {
    nombre: 'Darly Hernandez', // Definimos la propiedad 'nombre' con el valor 'Darly Hernandez'
    edad: 18                  // Definimos la propiedad 'edad' con el valor 18
};

// El handler define los traps (métodos interceptores)
const handler = {
    // Intercepta la lectura de propiedades
    get: (objeto, propiedad) => {
        console.log(`Leyendo la propiedad ${propiedad}`); // Muestra un mensaje en la consola indicando qué propiedad se está leyendo
        return objeto[propiedad]; // Devuelve el valor de la propiedad solicitada del objeto original
    }
};

// Creamos el objeto proxy
const proxyPersona = new Proxy(persona, handler); // Creamos un nuevo Proxy que envuelve el objeto 'persona' con el 'handler' definido

// Accedemos a las propiedades del proxy
console.log(proxyPersona.nombre); // Accedemos a la propiedad 'nombre' a través del proxy, lo que dispara el trap 'get'
console.log(proxyPersona.edad);   // Accedemos a la propiedad 'edad' a través del proxy, lo que dispara el trap 'get'

// Intentamos acceder a una propiedad inexistente
console.log(proxyPersona.correo); // Accedemos a la propiedad 'correo' a través del proxy, que no existe en el objeto original


// Objeto Original (persona):

// const persona = { nombre: 'Darly Hernandez', edad: 18 };
// Se crea un objeto persona con dos propiedades: nombre y edad.

// Handler (handler):
// const handler = { ... };
// Se define un objeto handler que contiene métodos para interceptar operaciones en el objeto proxy.

// get: (objeto, propiedad) => { ... };
// Se define el método get que intercepta las lecturas de propiedades.
// console.log(Leyendo la propiedad ${propiedad});
// Muestra un mensaje en la consola cuando se accede a una propiedad.
// return objeto[propiedad];
// Devuelve el valor de la propiedad solicitada del objeto original.

// Creación del Proxy (proxyPersona):
// const proxyPersona = new Proxy(persona, handler);
// Se crea un nuevo objeto proxy proxyPersona que envuelve el objeto persona con el handler definido. Todas las
// operaciones en proxyPersona serán interceptadas por el handler.

// Uso del Proxy:
// console.log(proxyPersona.nombre);
// Accede a la propiedad nombre a través del proxy, lo que activa el método get del handler y muestra el mensaje
// "Leyendo la propiedad nombre" en la consola, luego devuelve Darly Hernandez.
// console.log(proxyPersona.edad);
// Accede a la propiedad edad a través del proxy, lo que activa el método get del handler y muestra el mensaje 
// "Leyendo la propiedad edad" en la consola, luego devuelve 18.
// console.log(proxyPersona.correo);
// Intenta acceder a la propiedad correo a través del proxy, que no existe en el objeto original, lo que activa el 
// método get del handler y muestra el mensaje "Leyendo la propiedad correo" en la consola, luego devuelve undefined.

// Handler: El objeto handler es un objeto que contiene los métodos (también llamados traps) que serán llamados cuando
// se realicen operaciones en el proxy. Estos métodos definen el comportamiento del proxy para diferentes tipos de 
// operaciones, como leer propiedades, escribir en propiedades, entre otros.

// get: get es uno de los métodos del handler. Se utiliza para interceptar la operación de lectura de una propiedad 
// en el proxy. Cuando se accede a una propiedad del proxy, el método get se activa, permitiendo ejecutar código
// personalizado antes de devolver el valor de la propiedad solicitada.

// En resumen, al crear un objeto proxy utilizando la clase Proxy, puedes personalizar y controlar el comportamiento 
// de un objeto, lo que te permite implementar lógica adicional, como la validación de datos, el registro de 
// operaciones, el manejo de errores, entre otras funcionalidades.