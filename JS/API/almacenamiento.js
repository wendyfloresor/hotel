// almacenamiento
 function altaUsuario() {
	
	window,localStorage.setItem('usuario',$('#regNom').val());
 }
 function usuarioExiste(){
	 if (window.localStorage.getItem('usuario')!=undefined)
	 		return true;
	  else
	  		return false;
 }
 
 function accesoBD(){
	 var db=window.openDatabase("hotel", "1.0","Hotel BD","2000000");
	 return db;
 }
 function guardarReserva(th,pr,ha,di){
	 alert(th);
	 accesoBD().transaction(function(tx){
		 tx.executeSql('CREATE TABLE IF NOT EXISTS reservas (id unique, th,pr,ha,di)');
		 tx.executeSql('INSERT INTO reservas (th,pr,ha,di)VALUES("'+th+'","'+pr+'","'+ha+'","'+di+'")');
		 },function(err){
		 alert('Error:'+err.code);
	 },function(){});
	      navigator.notification.alert('Esperando conexión a Internet',null,'Datos guardados','Aceptar');
 }
		 
		  function guardarHistorial(ht,pr,ha,di){
		      accesoBD().transaction(function(tx){
				  tx.executeSql('CREATE TABLE IF NOT EXISTS historial (id unique,th,pr,ha,di)');
				  tx.execueSql('INSERT INTO historial (th,pr,ha,di) VALUES("'+th+'","'+pr+'","'+ha+'","'+di+'")');
			  }, function(err){ 
			  		alert("Error: "+er.code);
			  }, function(){
				  navigator.notification.alert('Historial Guardado', null,'Historial','Aceptar');
			  });
 }


 function leerReserva(){
	 accesoBD().transaction(function(tx){
	     tx.executeSql('SELECT *FROM reservas',[],function(tx2,res){
			 var largo = res.rows.length;
			 for(i=0; i<largo;i++){
				 var th = res.rows.item(i).th;
				 var pr = res.row.item(i).or;
				 var ha =res.rows.item(i).ha;
				 var di =res.rows.item(i).di;
				 
				 alert(th+'\n'+pr+'\n'+ha+'\n'+di);
				 
			 }
		 },function (err){
			 alert('Error: '+err.code);
		 });
	
	 }, function(err){
		 alert('Error: '+err.code);
	 },function(){
		 var a;
	 });
 }
 
 function leerHistorial(){
	 accesoBD().transaction(function(tx){
	     tx.executeSql('SELECT *FROM historial',[],function(tx2,res){
			 var largo = res.rows.length;
			 var table ='<table>';
			 table += '<tr></td>T. Hab</td><td>Pers.</td><td>Habs.</td><td>Dias</td><tr>';
		
			 for(i=0; i<largo;i++){
				 var th = res.rows.item(i).th;
				 var pr = res.row.item(i).or;
				 var ha =res.rows.item(i).ha;
				 var di =res.rows.item(i).di;
				 
				 table += '<tr></td>'+th+'</td><td>'+pr+'</td><td>'+ha+'</td><td>'+di+'</td><tr>';
				 
				 }
				 table += '</table>';
				 $('historial div[data-role=content]').html(table);
				 
				 
		 },function (err){
			 alert('Error: '+err.code);
		 	
		 });
	 },function(err){
		 alert('Error: '+err.code);
	 },function(){
		 var a;
 	});
 }