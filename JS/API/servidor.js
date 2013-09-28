//Servidor
function enviarRegistro(nombre,telefono,email,foto){
	$.ajax({
		type: "POST",
		url: "http://192.168.1.69/pgtest.php",
		data: "nom="+nombre+"&tel="+telefono+"&ema="+email
	}).done(function(msg){
		alert(msg);
		if(msg==1){
			//Subir Foto
			alert(msg);//uploadPhoto(foto,nombre);
		}else{
			navigator.notification.alert("Los datos no fueron enviados correctamente", null, "Error de Registro", "Aceptar");
		}
	});
}