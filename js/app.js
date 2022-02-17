function validate(){
    var nameUser = document.getElementById('nameUser');
    if(nameUser.value.length ==0 ){
        nameUser.classList.remove('succes');
        nameUser.classList.add('error');
        document.getElementById("errorNameUser").innerHTML = 'El campo de Nombre es Obligatorio'
        return 0;
    }else{
        nameUser.classList.add('success');
        do
        var lastName = document.getElementById('lastName')
    if(lastName.value.length == 0){
        lastName.classList.add('error'); 
    }else{
        lastName.classList.add('success')
    }    
}