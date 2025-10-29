var pass = document.getElementById("pass");
var valid = true;

function nameValid(input){
    var inputVal = input.value;
    var prevEle  = input.previousElementSibling;

    if(inputVal.length < 3){
        prevEle.innerHTML = "The name is too short";
        prevEle.classList.add("text-danger");
        prevEle.classList.remove("text-primary");

        valid = false;

    }else if(inputVal[0] != inputVal[0].toUpperCase()){
        prevEle.innerHTML = "The name should start with capital letter";
        prevEle.classList.add("text-danger");
        prevEle.classList.remove("text-primary");

        valid = false;

    }else if(inputVal.includes(" ")){
        if(inputVal.endsWith(" ")){
            prevEle.innerHTML = "The name should not contain any spaces (There is a space at the end of the name)";
        }else{
            prevEle.innerHTML = "The name should not contain any spaces";
        }
        prevEle.classList.add("text-danger");
        prevEle.classList.remove("text-primary");

        valid = false;

    }else{
        prevEle.innerHTML = prevEle.id; /* We can take it from data attr but I will not do that because I forget how to do it*/
        prevEle.classList.add("text-primary");
        prevEle.classList.remove("text-danger");

        valid = true;

    }
}

function mailValid(input){
    var prevEle = input.previousElementSibling;

    if(input.value.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) == null){
        prevEle.innerHTML = "Write valid Email";
        prevEle.classList.add("text-danger");
        prevEle.classList.remove("text-primary");

        valid = false;


    }else{
        prevEle.innerHTML = prevEle.id;
        prevEle.classList.add("text-primary");
        prevEle.classList.remove("text-danger");

        valid = true;

    }
}

function includeSpecial(str){
    var arr = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "=", "{", "}", "[", "]", "|", "\\", ":", ";", "\"", "'", "<", ">", ",", ".", "?", "/", "~", "`"];

    for(var i = 0; i < arr.length;i++){
        if(str.includes(arr[i])){
            return true;
        }
    }

    return false;
}

function passValid(input){
    var inputVal = input.value;
    var prevEle  = input.previousElementSibling;

    if(inputVal.length < 6 ){
        prevEle.innerHTML = "The password must be more than 5 characters";
        prevEle.classList.add("text-danger");
        prevEle.classList.remove("text-primary");

        valid = false;

    }else if(!includeSpecial(inputVal)){
        prevEle.innerHTML = "The password must contain special characters like !,@,#";
        prevEle.classList.add("text-danger");
        prevEle.classList.remove("text-primary");

        valid = false;

    }else{
        prevEle.innerHTML = prevEle.id
        prevEle.classList.add("text-primary");
        prevEle.classList.remove("text-danger");

        valid = true ;
    }
}

function confirmPass(input){
    var inputVal = input.value;
    var prevEle  = input.previousElementSibling;
    if(inputVal != pass.value){
        prevEle.innerHTML = "Password is not the same";
        prevEle.classList.add("text-danger");
        prevEle.classList.remove("text-primary");

        valid = false;

    }else{
        prevEle.innerHTML = prevEle.id
        prevEle.classList.add("text-primary");
        prevEle.classList.remove("text-danger");

        valid = true;

    }
}

function allOkay(){
    var all        = document.getElementsByClassName("check");
    var checkBoxes = document.getElementsByClassName("gender");

    if(!valid){
        return false;
    }

    for(var i = 0;i < all.length;i++){
        if(all[i].value == ""){
            all[i].previousElementSibling.innerHTML = "Fill This Field";
            all[i].previousElementSibling.classList.add("text-danger");
            all[i].previousElementSibling.classList.remove("text-primary");
            return false;
        }
    }

    var isChecked ;

    for(var i = 0;i < checkBoxes.length;i++){
        if(checkBoxes[i].checked){
            console.log(true);
            isChecked = true;
            break;
        }else{
            console.log(false);
            isChecked = false;
        }
    }

    if(isChecked == false){
        var genderVal = document.querySelector("#gender");
        genderVal.innerHTML = "Choose gender";
        genderVal.classList.add("text-danger");
        genderVal.classList.remove("text-primary");

        return false;
    }

    return true;
}

function reset(){
    var all        = document.getElementsByClassName("check");
    var checkBoxes = document.getElementsByClassName("gender");

    for(var i = 0;i < all.length;i++){
        all[i].previousElementSibling.innerHTML = all[i].previousElementSibling.id;
        all[i].value = "";
        all[i].previousElementSibling.classList.add("text-primary");
        all[i].previousElementSibling.classList.remove("text-danger");
    }

    for(var i = 0;i < checkBoxes.length;i++){
        checkBoxes[i].checked = false;
    }
}