//cargo despues se carge la página

window.addEventListener('load', function(){

    //validación formulario search

   
    var formSearch= document.querySelector('#formSearch');
    var iSearch= document.querySelector('#inputSearch');
    
    formSearch.addEventListener('submit', function(){

        iSearch= iSearch.value;
        if(iSearch.trim() =="null" || iSearch.trim().length <=3){
            alert('El campo debe contener almenos 3 caractéres');
        }else{
            alert('buscando');
        }
        
        
    });

    //funcion para añadir clase segun estado
        function claseNew(variable,nombreClass, text){
            variable.classList.add(nombreClass);
            variable.append(text);
            event.preventDefault();
        }

    //Validacion formulario de registro
        var forValidation= document.querySelector('.needs-validation');

    
   
    forValidation.addEventListener('submit', function(event){
       
        //capturo las variables
            var name= forValidation.nombre.value;
            var surname= forValidation.apellido.value;
            var user= forValidation.usuario.value;
            var pass= forValidation.contra.value;
            var pass2= forValidation.contra2.value;

       forValidation.classList.add('was-validated');//clase para dar los colores de boostrap
       
       //Validar nombre
       var validNombre= document.querySelector('.validNombre');
       
       if(name == "null" || name.length <=0){ 
        claseNew(validNombre, 'invalid-feedback', 'Falta añadir el nombre');
       }else{  
        claseNew(validNombre, 'valid-feedback', 'El campo es correcto');
       }

       //validar apellido
       var validApellido= document.querySelector('.validApellido');
       if(surname == "null" || surname.length <=0){ 
        claseNew(validApellido, 'invalid-feedback', 'Falta añadir el apellido');
       }else{  
        claseNew(validApellido, 'valid-feedback', 'El campo es correcto');
       }

        //validar usuario
        var validUser= document.querySelector('.validUser');
        if(user == "null" || user.length <=0){ 
         claseNew(validUser, 'invalid-feedback', 'Falta añadir el usuario');
        }else{  
         claseNew(validUser, 'valid-feedback', 'El usuario es correcto');
        }

        //validar contraseña
        var validPass= document.querySelector('.validPass');
        if(pass == "null" || pass.length <=0){ 
         claseNew(validPass, 'invalid-feedback', 'Falta añadir el contraseña');
        }else{  
         claseNew(validPass, 'valid-feedback', 'El contraseña es correcto');
        }

        //validar contraseña2
        if(pass2 !== pass){
            alert('No coinciden las contraseñas');
        }
        var validPass2= document.querySelector('.validPass2');
        if(pass2 == "null" || pass2.length <=0){ 
         claseNew(validPass2, 'invalid-feedback', 'Contraseña incorrecta');
        }else {
         claseNew(validPass2, 'valid-feedback', 'El contraseña es correcta');
        }
       
       
       
      
       
    });

});//final del Load




