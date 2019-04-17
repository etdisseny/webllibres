//cargo despues se carge la página

window.addEventListener('load', function(){

    //funciones comunes a todas las validaciones
    //Añadir clase segun el estado
    function claseNew(variable,nombreClass, text){
        variable.classList.add(nombreClass);
        variable.append(text);  
    }
    //funcion para limpiar formulario
    function clearErrors(nombre, clase1, clase2){
        nombre.classList.remove(clase1, clase2);
        nombre.innerHTML= "";
    }
    
    
//validación formulario search

    var boxAlert=document.querySelector('.boxAlert');
    var formSearch = document.querySelector('#formSearch');
  
    function validarSearch(event){
        event.preventDefault();//nos evita el envio va lo primero
        clearErrors(boxAlert, 'is-invalid'); //borrar errores
        //creo todas las variables que necesito
        var errores = true;
        
        var iSearch=document.querySelector('#inputSearch').value;
       
        if(iSearch.trim() ==null || iSearch.trim().length <3){
            boxAlert.style.display='block';
            claseNew(boxAlert,'is-invalid','El campo debe contener almenos 3 caractéres');
            errores = false;
            return errores;
        }else{
            
            boxAlert.style.display='none';
           
        } 
        if (errores == true) {
            formSearch.submit();
        }

    };

    formSearch.addEventListener('submit', validarSearch);


     

//Validar correo...NO funciona
    function validarCorreo(valor){ 
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(valor)) {
            return true;
        } else {
            return false;
        }
    }


    //Validar Formulario de registro
    var formularioRegistro= document.querySelector('#formularioRegistro');

    function validarFormularioRegistro(event) {
        event.preventDefault();//evitar envio
        var nombre=document.querySelector('#nombre').value; 
        var email=document.querySelector('#email').value; 
        var sinErrores = true;

        var boxErrores = document.querySelector('#boxErrores');
        clearErrors(boxErrores, 'is-invalid');
        //validar nombre
            if (nombre == null || nombre.length == 0) { 
                claseNew(boxErrores,'is-invalid','el campo nombre no puede estar vacio');    
                sinErrores = false;
                return sinErrores;
                    
                }else{
                    boxErrores.style.display="none";  
                }
            

        //validar email
        
            if (email == null || email.length == 0) { 
                boxErrores.style.display="block";  
                claseNew(boxErrores,'is-invalid','el campo email no puede estar vacio');    
                sinErrores = false;
                return sinErrores;

                }else{

                   if( validarCorreo(email)){
                    boxErrores.style.display="none";  
                   }else{
                    boxErrores.style.display="block"; 
                    claseNew(boxErrores,'is-invalid','el correo no es correcto');    
                    sinErrores = false;
                    return sinErrores;
                   }
   
                }
   
       
        if (sinErrores == true) {
            formularioRegistro.submit();
        }
    }

    formularioRegistro.addEventListener('submit', validarFormularioRegistro);

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

            if( validarCorreo(user)){
                claseNew(validUser, 'valid-feedback', 'El usuario es correcto');
               }else{
                validUser.style.display="block"; 
                claseNew(validUser, 'invalid-feedback', 'El usuario debe ser un correo electrónico');
                error++;
               }


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
        if(pass2 == "null" || pass2.length <=0 || pass2 != pass){ 
         validPass2.style.display='block';   
         claseNew(validPass2, 'invalid-feedback', 'Contraseña incorrecta');
         error++;
  
        }else{
            claseNew(validPass2, 'valid-feedback', 'El contraseña es correcta');
            
        }

       console.log(error);

            if(error>0){
                return false;
            }else{
              return true;
               
            }

    });
    

});//final del Load




