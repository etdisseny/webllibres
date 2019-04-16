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

                   /*if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email) ){
                        boxErrores.style.display="none";  
                    } else {
                        boxErrores.style.display="block"; 
                        claseNew(boxErrores,'is-invalid','el correo no es correcto');    
                        sinErrores = false;
                        return sinErrores;
                    }*/
                    
                }
   
       
        if (sinErrores == true) {
            formularioRegistro.submit();
        }
    }

    formularioRegistro.addEventListener('submit', validarFormularioRegistro);



    

});//final del Load




