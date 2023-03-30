
export default function validation(input){
    const errors={}
    const regexPass = new RegExp("[0,9]")

    if(!/\S+@\S+\.\S/.test(input.username)){
        errors.username="Nombre debe ser un correo valido!"
    }
    if(!input.username){
        errors.username="Nombre debe ser un nombre valido!"
    }
    if(input.username.length > 35){
        errors.username="Maximo 35 caracteres!"
    }
    if(!regexPass.test(input.password)){
        errors.password="Al menos debe tener un numero!"
    }
    if(input.password.length < 6 || input.password.length <10){
        errors.password ="Debe tener entre 6 y 10 caracteres!"
    }
    
    return errors
    

}