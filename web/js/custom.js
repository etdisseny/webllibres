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
            
        }
    //funcion para limpiar formulario
        function clearErrors(nombre, clase1, clase2){
            nombre.classList.remove(clase1, clase2);
            nombre.innerHTML= "";
        }


    //Validacion formulario de registro
        var forValidation= document.querySelector('.needs-validation');

    
   
    forValidation.addEventListener('submit', function(event){
        event.preventDefault();
        //capturo las variables
            var name= forValidation.nombre.value;
            var surname= forValidation.apellido.value;
            var user= forValidation.usuario.value;
            var pass= forValidation.contra.value;
            var pass2= forValidation.contra2.value;
            var provincia=forValidation.provincia.value;
            

            var error=0;

       forValidation.classList.add('was-validated');//clase para dar los colores de boostrap

       
       
       //Validar nombre
       var validNombre= document.querySelector('.validNombre');
       clearErrors(validNombre, 'invalid-feedback','valid-feedback');
       
       if(name == "null" || name.length <=0){ 
        claseNew(validNombre, 'invalid-feedback', 'Falta añadir el nombre');
        error++;
       }else{  
        claseNew(validNombre, 'valid-feedback', 'El campo es correcto');

       }

       //validar apellido
       var validApellido= document.querySelector('.validApellido');
       clearErrors(validApellido, 'invalid-feedback','valid-feedback');

       if(surname == "null" || surname.length <=0){ 
        claseNew(validApellido, 'invalid-feedback', 'Falta añadir el apellido');
        error++;
       }else{  
        claseNew(validApellido, 'valid-feedback', 'El campo es correcto');
        
       }

         //validar provincia
         var validProvincia= document.querySelector('.validProvincia');
         clearErrors(validProvincia, 'invalid-feedback','valid-feedback');
  
         if(provincia == ''){ 
             alert('falta provincia');
          claseNew(validProvincia, 'invalid-feedback', 'Falta añadir provincia');
          error++;
         }else{  
          claseNew(validProvincia, 'valid-feedback', 'El campo es correcto');
          
         }



        //validar usuario
        var validUser= document.querySelector('.validUser');
        clearErrors(validUser, 'invalid-feedback','valid-feedback');
        if(user == "null" || user.length <=0){ 
         claseNew(validUser, 'invalid-feedback', 'Falta añadir el usuario');
         error++;
        }else{  
         claseNew(validUser, 'valid-feedback', 'El usuario es correcto');
        }

        //validar contraseña
        var validPass= document.querySelector('.validPass');
        clearErrors(validPass, 'invalid-feedback','valid-feedback');
        if(pass == "null" || pass.length <=0){ 
         claseNew(validPass, 'invalid-feedback', 'Falta añadir el contraseña');
         error++;
        }else{  
         claseNew(validPass, 'valid-feedback', 'El contraseña es correcto');
        }

        //validar contraseña2
      
        var validPass2= document.querySelector('.validPass2');
        clearErrors(validPass2, 'invalid-feedback','valid-feedback');
        if(pass2 == "null" || pass2.length <=0 ){ 
            
         claseNew(validPass2, 'invalid-feedback', 'Contraseña incorrecta');
         error++;
        }else{
             if(pass2 !== pass){
                claseNew(validPass2, 'invalid-feedback', 'No coinciden las contraseñas');
                validPass2.append( 'No coinciden las contraseñas');
                error++;
             }else{
                claseNew(validPass2, 'valid-feedback', 'El contraseña es correcta');
             }
        }

       console.log(error);

            if(error>=1){
                return false;
            }else{
                return true;
            }
         
      
       
    });

});//final del Load




