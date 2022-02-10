document.getElementById("submit").addEventListener("click", function(){
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    if( email.value == "sontan@bap.com" && password.value == "secret"){
        window.location.href = "bank.html";
    }
    else{
        alert("invalid email or password!");
        email.value = "";
        password.value = "";
    }
})