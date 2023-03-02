//COFLA1

// dineroCofla = prompt ("Cuanto dinero tiene Cofla?");
// //const dineroRoberto = prompt ("Cuanto dinero tiene Roberto?");
// //const dineroPedro = prompt ("Cuanto dinero tiene Pedro?");

// dineroCofla = parseInt(dineroCofla);

// if (dineroCofla >= 0.6 && dineroCofla < 1) {
// 	alert("Compra el helado de agua");
// 	alert("te sobran " + (dineroCofla - 0.6));
// }


// else if (dineroCofla >= 1 && dineroCofla < 1.6) {
// 	alert("Compra el helado de crema");
// 	alert("te sobran " + (dineroCofla - 1));
// }


// else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
// 	alert("Compra el helado de heladix");
// 	alert("te sobran " + (dineroCofla - 1.6));
// }


// else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
// 	alert("Compra el helado de heladovich");
// 	alert("te sobran " + (dineroCofla - 1.7));
// }


// else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
// 	alert("Compra el helado de helardo");
// 	alert("te sobran " + (dineroCofla - 1.8));
// }

// else if (dineroCofla >= 2.9) {
// 	alert("Compra el helado con confites o el pote de 1/4kg");
// 	alert("te sobran " + (dineroCofla - 2.9));

// }


// else {
// 	alert("No te alcanza para ningun helado")
// }

//COFLA2

// let free = false;

//const validarCliente = (time) => {
// 	let edad = prompt("Cual es tu edad?");
// 	if(edad >= 18) {
// 		if (time >= 2 && time < 7 && free == false) {
// 			alert ("podes pasar gratis porque sos la primer persona");
// 			free = true;
// 		} else {
// 			alert (`podes pasar porque son las ${time}:00am, pero tenes que pagar`);
// 		}
// 	}else{
// 		alert("Sos menor, no podes pasar");
// 	}
// }

// validarCliente(2);
// validarCliente(5);
// validarCliente(8);
// validarCliente(3);

let cantidad = prompt("Cuantos alumnos son?");
let alumnosTotales = [];

for (i = 0; i < cantidad; i++) {
	alumnosTotales[i] = [prompt("Nombre del alumno" + (i+1)),0]
}

const tomarAsistencia = (nombre,p)=>{
	let presencia = prompt(nombre);
	if (presencia == "p" || presencia == "p"){
		alumnosTotales[p][1]++;
	}
} 

for (i = 0; i < 30; i++){
	for(alumno in alumnosTotales) {
		tomarAsistencia(alumnosTotales[alumno][0],alumno);
	}
}

for (alumno in alumnosTotales) {
	let resultado = `${alumnosTotales[alumno][0]}:<br>
	________Presentes: ${alumnosTotales[alumno][1]}<br>
	________Ausencias: ${30 - alumnosTotales[alumno][1]}`;
	if(30 - alumnosTotales[alumno][1] > 18){
		resultado+= "<b style='color:red'>REPROBADO POR INASISTENCIAS</b><br><br>";
	} else {
		resultado+= "<br><br>"
	} document.write(resultado);
}