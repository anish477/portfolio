function validation(){
    var username = document.getElementById("user").value;
    var password = document.getElementById("pass").value;
    if (username==""){
    alert("user name is empty");
    return false;}
    else if(password==""){
        alert("password name is empty");
        return false;

    }
    else if(password.length<5){
        alert("pass must have more than five charcater")
        return false;
    }
    else{
        alert("logined succefully ");
        return true;
    }

}

