//Solicitamos al usuario que ingrese un numero valido
let numero = parseInt(prompt("Ingrese un numero entre 1 y 20"));

//Pruebas
/* let validacion = (numero) => {
    while (numero < 1 || numero > 20) {
        return alert("Número fuera del rango");
    }
}

let mensaje = validacion(numero);
console.log(mensaje); */

/* Función para obtener las tablas de multiplicar desde el 1 hasta el número ingresado por el usuario.
Además, mostrar el factorial para los mismos números */
let multiplicacion = (numero) => {
    if (numero < 1 || numero > 20) {
        console.log("Número fuera del rango");
    }
    else if (numero >= 1 || numero <= 20) {
        for (i = 1; i <= numero; i++) {
            console.log(i + " x " + numero + " = " + (i * numero));
        }

        var fact = 1;
        for (i = 1; i <= numero; i++) {
            console.log("Factorial de " + i + " es: " + (fact = fact * i));
        }
    }
}

multiplicacion(numero);

//Pruebas
/* let factorial= (numero) => {
    if (numero < 1 || numero > 20) {
        console.log("Número fuera del rango");
    }
    else if (numero >= 1 || numero <= 20) {
        var fact = 1;
        for (i = 1; i <= numero; i++) {
            console.log("Factorial de " + i + " es: " + (fact = fact * i));
        }
    }
}

factorial(numero); */