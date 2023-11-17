export const UserValidationData=(values)=>{
    let errors={};
    if (values.name.trim()==""){
        errors.name="username is required;"
    }
    else if(values.name.length<5){
        errors.name="you should add five characters at least;"

    }
    if (values.email.trim()==""){
        errors.email="email is required;"
    }
    else if(values.email.length<5){
        errors.email="you should add five characters at least;"

    }
    if (values.password.trim()==""){
        errors.password="password is required;"
    }
    else if(values.password.length<10){
        errors.password="you should add five characters at least;"

    }
    return errors;

}