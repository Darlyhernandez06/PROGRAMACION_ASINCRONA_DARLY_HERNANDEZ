// 25.Usar un proxy para la validación de los valores de propiedades
// • Cuando declaremos que el atributo es numérico solo perimimos que ingresen números
// • Cuando declaremos que el atributo es alfanumérico solo permitimos que ingresen letras
// • Cuando declaremos que el atributo es un email, solo permitimos que ingresen correos
// • Cuando declaremos que el atributo es de tipo date, solo permitimos que ingresen fechas
// • Para todos los atributos no se puede ingresar espacios en blanco tanto al inicio como
// al final de estos y se debe mostrar el error personalizado por consola

// Función para validar si una cadena es un email válido
function esEmail(valor) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar el formato de email
    return regex.test(valor); // Retorna true si el valor coincide con el formato de email, de lo contrario retorna false
}

// Función para validar si una cadena es una fecha válida
function esFecha(valor) {
    return !isNaN(Date.parse(valor)); // Retorna true si el valor puede ser parseado como una fecha, de lo contrario retorna false
}

// Objeto original con atributos declarados
const objetoOriginal = {}; // Se crea un objeto vacío que contendrá las propiedades validadas

// Handler que define los traps
const handler = {
    // Intercepta la escritura de propiedades
    set: (objeto, propiedad, valor) => { // Método set del handler que se ejecuta cuando se intenta asignar un valor a una propiedad del objeto proxy
        // Elimina espacios en blanco al inicio y al final de los valores
        if (typeof valor === 'string') { // Verifica si el valor es una cadena
            valor = valor.trim(); // Elimina los espacios en blanco al inicio y al final de la cadena
        }

        // Validaciones personalizadas según el tipo de propiedad
        switch (propiedad) {
            case 'numero':
                if (isNaN(valor)) { // Verifica si el valor no es un número
                    console.error(`Error: La propiedad ${propiedad} debe ser un número.`); // Muestra un mensaje de error si el valor no es un número
                    return false; // Retorna false para indicar que la asignación no fue exitosa
                }
                break;
            case 'alfanumerico':
                if (!/^[a-zA-Z]+$/.test(valor)) { // Verifica si el valor contiene solo letras
                    console.error(`Error: La propiedad ${propiedad} debe contener solo letras.`); // Muestra un mensaje de error si el valor no contiene solo letras
                    return false; // Retorna false para indicar que la asignación no fue exitosa
                }
                break;
            case 'email':
                if (!esEmail(valor)) { // Verifica si el valor es un email válido utilizando la función esEmail
                    console.error(`Error: La propiedad ${propiedad} debe ser un email válido.`); // Muestra un mensaje de error si el valor no es un email válido
                    return false; // Retorna false para indicar que la asignación no fue exitosa
                }
                break;
            case 'fecha':
                if (!esFecha(valor)) { // Verifica si el valor es una fecha válida utilizando la función esFecha
                    console.error(`Error: La propiedad ${propiedad} debe ser una fecha válida.`); // Muestra un mensaje de error si el valor no es una fecha válida
                    return false; // Retorna false para indicar que la asignación no fue exitosa
                }
                break;
            default :
                if (valor.trim() !== valor) { // Verifica si hay espacios en blanco al inicio o al final del valor
                    console.error(`Error: No se permiten espacios en blanco al inicio o al final de la propiedad ${propiedad}.`); // Muestra un mensaje de error si hay espacios en blanco al inicio o al final del valor
                    return false; // Retorna false para indicar que la asignación no fue exitosa
                }
        }

        // Se asigna el valor al objeto si pasa todas las validaciones
        objeto[propiedad] = valor; // Asigna el valor a la propiedad del objeto
        return true; // Retorna true para indicar que la asignación fue exitosa
    }
};

// Crear el objeto proxy
const proxyObjeto = new Proxy(objetoOriginal, handler); // Se crea un objeto proxy que envuelve al objeto original y utiliza el handler definido para interceptar las operaciones

// Pruebas de validación
proxyObjeto.numero = 123; // Correcto: asigna un valor numérico a la propiedad 'numero'
proxyObjeto.numero = 'abc'; // Error: debe ser un número
proxyObjeto.alfanumerico = 'abc'; // Correcto: asigna un valor alfanumérico a la propiedad 'alfanumerico'
proxyObjeto.alfanumerico = 'abc123'; // Error: debe contener solo letras
proxyObjeto.email = 'correo@gmail.com'; // Correcto: asigna un valor de email válido a la propiedad 'email'
proxyObjeto.email = 'correo'; // Error: debe ser un email válido
proxyObjeto.fecha = '2024-05-22'; // Correcto: asigna una fecha válida a la propiedad 'fecha'
proxyObjeto.fecha = '22/05/2024'; // Error: debe ser una fecha válida
proxyObjeto.espacios = ' prueba '; // Correcto: asigna un valor sin espacios al inicio o al final a la propiedad 'espacios'
proxyObjeto.espacios = ' prueba  '; // Error: No se permiten espacios en blanco al inicio o al final

// Mostrar el objeto final
console.table(proxyObjeto); // Muestra el objeto proxy después de las asignaciones y validaciones


// El ejercicio está pidiendo que uses un proxy en JavaScript para validar los valores de las propiedades de un objeto
// según ciertas reglas específicas:

// Cuando declares que el atributo es numérico, solo se permitirá que ingresen números.
// Cuando declares que el atributo es alfanumérico, solo se permitirán letras.
// Cuando declares que el atributo es un email, solo se permitirán correos electrónicos válidos.
// Cuando declares que el atributo es de tipo fecha, solo se permitirán fechas válidas.
// Para todos los atributos, no se permitirá ingresar espacios en blanco ni al inicio ni al final de los valores, y 
// se debe mostrar un mensaje de error personalizado por consola en caso de fallo en la validación.
// En resumen, el objetivo es crear un proxy que intercepte las operaciones de escritura en un objeto y aplique las 
// validaciones mencionadas antes de permitir que se asignen los valores a las propiedades del objeto. Si alguna 
// validación falla, se debe mostrar un mensaje de error específico en la consola

// function esEmail(valor) {: Se define una función llamada esEmail que toma un valor como parámetro. Esta función 
// será utilizada para validar si una cadena es un email válido.

// const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;: Se declara una expresión regular (regex) que valida el formato de un 
// email. Esta expresión regular verifica que la cadena tenga un formato típico de email.
    
// return regex.test(valor);: Se devuelve true si la cadena (valor) coincide con el formato de email definido por la 
// expresión regular, de lo contrario, devuelve false.
    
// function esFecha(valor) {: Se define una función llamada esFecha que toma un valor como parámetro. Esta función 
// será utilizada para validar si una cadena es una fecha válida.
    
// return !isNaN(Date.parse(valor));: Se devuelve true si la cadena (valor) puede ser parseada como una fecha válida, 
// de lo contrario, devuelve false.
    
// const objetoOriginal = {};: Se crea un objeto vacío llamado objetoOriginal, el cual contendrá las propiedades 
// validadas.
    
// const handler = {: Se define un objeto llamado handler que contendrá los métodos interceptores (traps) para el proxy.
    
// set: (objeto, propiedad, valor) => {: Se define el método set en el handler. Este método se ejecutará cada vez que 
// se intente asignar un valor a una propiedad del objeto proxy.
    
// if (typeof valor === 'string') {: Se verifica si el valor es una cadena de texto.
    
// valor = valor.trim();: Si el valor es una cadena de texto, se eliminan los espacios en blanco al inicio y al 
// final de la cadena.
    
// Se inicia un bloque switch para aplicar validaciones específicas según la propiedad que se esté asignando.
    
// objeto[propiedad] = valor;: Si todas las validaciones pasan, se asigna el valor a la propiedad correspondiente
// del objeto.
    
// return true;: Se devuelve true para indicar que la asignación fue exitosa.
    
// const proxyObjeto = new Proxy(objetoOriginal, handler);: Se crea un objeto proxy (proxyObjeto) que envuelve al 
// objeto original (objetoOriginal) y utiliza el handler definido para interceptar las operaciones.
    
// Se realizan pruebas de validación asignando valores a diferentes propiedades del objeto proxy.
    
// console.log(proxyObjeto);: Se muestra el objeto proxy después de las asignaciones y validaciones en la consola.

// Se está verificando si el tipo de valor es una cadena de texto ('string'). Esta verificación se realiza utilizando
// el operador typeof, que devuelve una cadena que indica el tipo de operando no evaluado. En este caso, si valor es
// de tipo 'string', significa que es una cadena de texto.

// Si el tipo de valor es una cadena de texto, se ejecuta el bloque de código dentro del if. En este bloque, se llama 
// al método trim() de la cadena de texto valor. El método trim() elimina los espacios en blanco al inicio y al final 
// de la cadena, devolviendo una nueva cadena con estos espacios eliminados.

// .test() es un método de los objetos RegExp en JavaScript que se utiliza para buscar una coincidencia entre una 
// expresión regular y una cadena de texto. Devuelve true si hay una coincidencia y false si no la hay.

// Date es un objeto en JavaScript que representa una fecha y hora. Es útil para realizar operaciones relacionadas con 
// fechas y horas, como crear nuevas fechas, obtener componentes individuales de una fecha (año, mes, día, etc.), y
// realizar operaciones aritméticas con fechas.

// set en el contexto del objeto handler utilizado con la clase Proxy en JavaScript, se refiere a un trap (interceptor)
// específico que se ejecuta cuando se intenta asignar un valor a una propiedad del objeto proxy.

// Cuando se utiliza un objeto Proxy, se pueden definir traps para interceptar y personalizar el comportamiento de 
// ciertas operaciones en el objeto proxy. El trap set se activa cuando se intenta asignar un valor a una propiedad 
// del objeto proxy.