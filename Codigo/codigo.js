//const frutas = ["banana", "manzana", "pera"];
//document.write(frutas[0]);

//arrays asociativos (objetos)

// const setUp = {
// 	compu: "lenovo legion",
// 	teclado: "hyperX",
// 	mouse: "logitech 180",
// 	pad: "pestana"
// };

// let compu = setUp["compu"];
// let teclado = setUp["teclado"];
// let mouse = setUp["mouse"];
// let pad = setUp["pad"];

// const frase = `la compu es: ${compu} <br>
//              el teclado es: ${teclado} <br>
//              el mouse es: ${mouse} <br>
//              el pad es: ${pad} <br>`;

// document.write(frase)

//const autos = [
//{nombre: "fiat", modelo: "brio"},
//{nombre: "renault", modelo: "clio"},
//{nombre: "chevrolet", modelo:"corsa"}
//	] 

//bucles e iteracion

//IF

// const numero = 5;

// if (numero <= 6) {
// 	document.write("numero es menor a 6")
// }

//WHILE

 //let nuevoNumero = 0;

// while (nuevoNumero  < 6){

// 	nuevoNumero++;

// 	document.write(nuevoNumero);
// }

//DO WHILE

// do {
// 	document.write(nuevoNumero);
// 	nuevoNumero++;
// } while (nuevoNumero <= 6)

//BREAK

// while (nuevoNumero < 100) {
// 	nuevoNumero++;
// 	document.write(nuevoNumero);
// 	if (nuevoNumero == 10) {
// 		break;
// 	}
// }
// document.write (" fin de bucle");

//FOR (variable, condicion, ejecucion)


// for ( let  i =  0;  i < 10; i++ ) {
// 	if(i == 3) {
// 		//break;
// 		continue;
// 	}

// 	document.write(i + "<br>")

// }

//FOR IN / OF

//let animales = ["gato", "perro", "pez"];

//recorre y muestra la posición
// for (animal in animales){
// 	document.write(animal + "<br>")
// }

// document.write("<br>")

// //recorre y muestra el valor
// for (animal of animales){
// 	document.write(animal + "<br>")
// }

// array1 = ["maria", "josefa", "veronica"];
// array2 = ["pedro", "juan", [array1], "lucas"];

// forArrays:
// for (let array in array2) {
// 	if (array == 2) {
// 		for (let array of array1){
// 			break;
// 			document.write(array + "<br>")

// 		}
// 	}else {
// 		//continue;
// 		document.write(array2[array] + "<br>")
// 	}
// }

//FUNCIONES

//Una funcion es una procion de codigo
// RETURN: lo que devuelve la funcion, no lo que hace. finaliza la función.
//function sumar(num1,num2) es como declarar las variables de manera tradicional.


// function sumar(num1,num2){
// let resultado = num1 + num2;
// return resultado;
// }

// let res = sumar(10,50);

// console.log(res);

//function saludar(nombre){
    //let frase = `Hola ${nombre} como estas?`
    //return frase;
    //document.write(frase)
//}

//console.log(saludar("Gaston"));
//saludar("Eliseo");

// const saludar = function (nombre) {
//     let frase = `Hola ${nombre}`;
//     document.write(frase);
// };

// saludar("Lola");

//FUNCIONES FLECHA 

// const saludar = nombre => {
//     let frase = `Hola ${nombre}`;
//     document.write(frase);
// }
// saludar("Gaston")

