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
    
    var boxAlert=document.querySelector('.boxAlert');
    //validación formulario search

    formSearch.addEventListener('submit', function(e){
        event.preventDefault(e);//nos evita el envio va lo primero
        clearErrors(boxAlert, 'is-invalid','is-valid'); //borrar errores
        //creo todas las variables que necesito
        var formSearch= document.querySelector('#formSearch');
        var iSearch=document.querySelector('#inputSearch').value;
       
        if(iSearch.trim() =="null" || iSearch.trim().length <3){
            boxAlert.style.display='block';
            claseNew(boxAlert,'is-invalid','El campo debe contener almenos 3 caractéres');
            return false;
        }else{
            
            boxAlert.style.display='none';
            return true;
        } 
    });

     //Validacion del formulario de registro (de una vez...)
     

    var formularioRegistro= document.querySelector('#formularioRegistro');


    function validarCorreo(valor){ 
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(valor)) {
            alert('la direccion ' + valor + ' es correcta');
            return true;
        } else {
            alert('la direccion ' + valor + ' es incorrecta');
            return false;
        }
    }






    function validarFormulario(event) {
        event.preventDefault();//evitar envio
        var sinErrores = true;

        for (var i = 0; i < formularioRegistro.length; i++) {

            var clase=formularioRegistro[i].name;//creo una clase que coincide con el name del input
            var boxContent=document.getElementsByClassName('boxContentReg');
            var div = document.createElement('div');//creo elemto
            div.classList.add(clase);//le doy clase que coincida con el nombre el input

            if (formularioRegistro[i].type == 'text') { //solo los campos tipo text

                if (formularioRegistro[i].value == 'null' || formularioRegistro[i].value.length == 0) {
                    

                    div.innerHTML='el Campo no puede estar vacio';
                    boxContent[i].append(div);
                    div.style.display="block";


                    if (formularioRegistro[i].name == 'email') {
                        validarCorreo(formularioRegistro[i].value);
                    }

                    sinErrores = false;
                    return sinErrores;

                }else{

                  
                    clase.style.display="none";
                }
            }
        }
        if (sinErrores == true) {
            formularioRegistro.submit();
        }
    }

    formularioRegistro.addEventListener('submit', validarFormulario);




/*

    //FORMULARIO DE REGISTRO

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
       clearErrors(validNombre, 'is-invalid','is-valid');
       
       if(name == "null" || name.length <=0){ 
        claseNew(validNombre, 'is-invalid', 'Falta añadir el nombre');
        error++;
       }else{  
        claseNew(validNombre, 'is-valid', 'El campo es correcto');

       }

       //validar apellido
       var validApellido= document.querySelector('.validApellido');
       clearErrors(validApellido, 'is-invalid','is-valid');

       if(surname == "null" || surname.length <=0){ 
        claseNew(validApellido, 'is-invalid', 'Falta añadir el apellido');
        error++;
       }else{  
        claseNew(validApellido, 'is-valid', 'El campo es correcto');
        
       }

         //validar provincia
         var validProvincia= document.querySelector('.validProvincia');
         clearErrors(validProvincia, 'is-invalid','is-valid');
  
         if(provincia == ''){ 
             alert('falta provincia');
          claseNew(validProvincia, 'is-invalid', 'Falta añadir provincia');
          error++;
         }else{  
          claseNew(validProvincia, 'is-valid', 'El campo es correcto');
          
         }



        //validar usuario
        var validUser= document.querySelector('.validUser');
        clearErrors(validUser, 'is-invalid','is-valid');
        if(user == "null" || user.length <=0){ 
         claseNew(validUser, 'is-invalid', 'Falta añadir el usuario');
         error++;
        }else{  
         claseNew(validUser, 'is-valid', 'El usuario es correcto');
        }

        //validar contraseña
        var validPass= document.querySelector('.validPass');
        clearErrors(validPass, 'is-invalid','is-valid');
        if(pass == "null" || pass.length <=0){ 
         claseNew(validPass, 'is-invalid', 'Falta añadir el contraseña');
         error++;
        }else{  
         claseNew(validPass, 'is-valid', 'El contraseña es correcto');
        }

        //validar contraseña2
      
        var validPass2= document.querySelector('.validPass2');
        clearErrors(validPass2, 'is-invalid','is-valid');
        if(pass2 == "null" || pass2.length <=0 ){ 
            
         claseNew(validPass2, 'is-invalid', 'Contraseña incorrecta');
         error++;
        }else{
             if(pass2 !== pass){
                claseNew(validPass2, 'is-invalid', 'No coinciden las contraseñas');
                validPass2.append( 'No coinciden las contraseñas');
                error++;
             }else{
                claseNew(validPass2, 'is-valid', 'El contraseña es correcta');
             }
        }

       console.log(error);

            if(error>=1){
                return false;
            }else{
                return true;
            }
         
      
       
    });

    */

});//final del Load




