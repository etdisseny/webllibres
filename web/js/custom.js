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

    //Validacion formulario de registro
    var forValidation= document.querySelector('.needs-validation');
   
    forValidation.addEventListener('submit', function(event){
       //capturo los datos
       var name= document.querySelector('#nombre').value;
       var surname= document.querySelector('#apellido').value;
       var user= document.querySelector('#usuario').value;
       var pass= document.querySelector('#contra').value;
       var pass2= document.querySelector('#contraRep').value;
       forValidation.classList.add('was-validated');//clase para dar los colores de boostrap
       var validacion= document.querySelector('.validation');

       if(name === "null" || name.length <=0){  
        validacion.classList.add('invalid-feeback');
        validacion.append('Añadir nombre');
        event.preventDefault();
        
        return false;
       }else{
        validacion.classList.add('valid-feeback');
        validacion.append('Nombre correcto');
        event.preventDefault();
        return true;
       }
      
       
    });

});//final del Load




