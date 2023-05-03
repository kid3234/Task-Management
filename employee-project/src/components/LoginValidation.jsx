function Validation(values){
    let error={}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern =/^(?=.*[a-z])(?=.*[A-Z])[a-aA-Z0-9]{8,}$/

    if(values.email ===""){
        error.email="Name should not be email"
    }else if(!email_pattern.test(values.email)){
        error.email="Email Didn't match"
    }else(
        error.email=""
    )

    // if(values.password === ""){
    //     error.password ="password should not be empty"
    // }else if(!password_pattern.test(values.password)){
    //     error.password="password didn't natch"
    // }else{
    //     error.password=""
    // }
    return error
}
export default Validation