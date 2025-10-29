var password = document.getElementById("password");
var passStat = document.getElementsByClassName("passStat")[0];
var mail     = document.getElementById("mail");
var mailStat = document.getElementsByClassName("mailStat")[0];
var show = document.getElementsByClassName("showBut")[0];

var passValid = () => {
    if(password.value.length < 6){
        passStat.innerHTML = "Password should be more than 6 charactes";
        passStat.style.color = "red";
    }else{
        passStat.innerHTML = "Valid password length";
        passStat.style.color = "green";
    }
};

var clearPassWarning = () => passStat.innerHTML = "" ;

var isMailEmpty = () => {
    if(mail.value == ""){
        mailStat.innerHTML = "You have to write your mail";
        mailStat.style.color = "red";
    }else{
        mailStat.innerHTML = "";
    }
}

var isMailValid = () => {
    if(mail.value.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) == null){
        mailStat.innerHTML = "This is not an email";
        mailStat.style.color = "red";
    }else{
        mailStat.innerHTML = "";
    }
}

var showPass = () => {
    if(show.checked){
        password.type = "text";
    }else{
        password.type = "password";
    }
}