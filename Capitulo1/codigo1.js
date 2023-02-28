

dineroCofla = prompt ("Cuanto dinero tiene Cofla?");
//const dineroRoberto = prompt ("Cuanto dinero tiene Roberto?");
//const dineroPedro = prompt ("Cuanto dinero tiene Pedro?");

dineroCofla = parseInt(dineroCofla);

if (dineroCofla >= 0.6 && dineroCofla < 1) {
	alert("Compra el helado de agua");
	alert("te sobran " + (dineroCofla - 0.6));
}


else if (dineroCofla >= 1 && dineroCofla < 1.6) {
	alert("Compra el helado de crema");
	alert("te sobran " + (dineroCofla - 1));
}


else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
	alert("Compra el helado de heladix");
	alert("te sobran " + (dineroCofla - 1.6));
}


else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
	alert("Compra el helado de heladovich");
	alert("te sobran " + (dineroCofla - 1.7));
}


else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
	alert("Compra el helado de helardo");
	alert("te sobran " + (dineroCofla - 1.8));
}

else if (dineroCofla >= 2.9) {
	alert("Compra el helado con confites o el pote de 1/4kg");
	alert("te sobran " + (dineroCofla - 2.9));

}


else {
	alert("No te alcanza para ningun helado")
}