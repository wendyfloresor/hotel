// archivos
function subirFoto(foto) {
            var options = new FileUploadOptions();
            options.fileKey="file";
            options.fileName="Wendy";
            options.mimeType="image/jpeg";

            var params = {};
            params.value1 = "test";
            params.value2 = "param";

            options.params = params;

            var ft = new FileTransfer();
            ft.upload(foto, "http://www.igitsoft.com/pgtest.php", function(r){ 
		         navigator.notification.confirm("Se ha registrado satisfactoriamente",function(btn){
					 if(btn==1)
					 	navigator.notification.vibrate(500);
					if(btn==2)
					    navigator.notification.beep(2);
					altaUsuario();
					window.location.href="#page";
						
				 }, "Registro", "Vibrar, Sonar, Cancelar");

        },

           function(error) {
              alert("An error has occurred: Code = " + error.code);
        },    options);

 }
