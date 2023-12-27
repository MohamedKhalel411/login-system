var signupNameInput = document.getElementById("signupNameInput");
var signupEmailInput = document.getElementById("signupEmailInput");
var signupPasswordInput = document.getElementById("signupPasswordInput");
var msgalert = document.getElementById("msg-alert");
var msgSuccess = document.getElementById("msg-success");
var existEmail = document.getElementById("existEmail");
var loginEmailInput = document.getElementById("loginEmailInput");
var loginPasswordInput = document.getElementById("loginPasswordInput");
var signUpBtn = document.getElementById("signUpBtn");
var users = [];

if (localStorage.getItem("users") != null) {
    users = JSON.parse(localStorage.getItem("users"));
}

function isEmailExists(email) {
    for (var i = 0; i < users.length; i++) {
    if (users[i].email.toLowerCase() === email.toLowerCase()) {
      return true; // Email exists
    }
    }
  return false; // Email doesn't exist
}

// SIGN UP START
function addUser() {
    if (validForm() == true) {
        var userEmail = signupEmailInput.value;
        if (isEmailExists(userEmail)) {
            existEmail.classList.replace("d-none", "d-block");
            return;
        }
        else{
            existEmail.classList.replace("d-block", "d-none");
            msgSuccess.classList.replace("d-none","d-block")

        }
        var user = {
            name: signupNameInput.value,
            email: userEmail,
            password: signupPasswordInput.value
        };
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
        clearForm();
    } else {
        msgalert.classList.replace("d-none", "d-block");
        msgSuccess.classList.replace("d-block", "d-none");
    }
}


function clearForm(){
    signupNameInput.value ="";
    signupEmailInput.value="";
    signupPasswordInput.value="";
}

function validForm(){
    regexName =/^\w{3,15}\s*(\w{3,15})*\s*(\w{3,15})*$/gi
    regexEmail =/^\w{3,15}@[a-z]{3,}.[a-z]{3}$/gi
    regexPassword=/^[0-9]{3,}|\w{3,}$/gi

    if(regexName.test(signupNameInput.value)   == false)
    {
        msgalert.classList.replace("d-none","d-block")
        msgSuccess.classList.replace("d-block","d-none")
        return false;
    }
    if(regexEmail.test(signupEmailInput.value)  == false)
    {
        msgalert.classList.replace("d-none","d-block")
        msgSuccess.classList.replace("d-block","d-none")
        return false;
    }
    if( regexPassword.test(signupPasswordInput.value)  == false)
    {
        msgalert.classList.replace("d-none","d-block")
        msgSuccess.classList.replace("d-block","d-none")
        return false;
    }
    else{
        msgalert.classList.replace("d-block","d-none")
        return true
    }
}
// SIGN UP START
// ============================================


// LOG IN START
var logInfo = document.getElementById("log-info"); 
function userLog(){

    for(var i =0 ; i<users.length;i++)
    {
        if(users[i].email.toLowerCase()== loginEmailInput.value.toLowerCase()&& users[i].password== loginPasswordInput.value)
        {
            logInfo.classList.replace("d-block","d-none")
            msgalert.classList.replace("d-block","d-none")
            msgSuccess.classList.replace("d-none","d-block")
            window.location.href="home.html"
        }
        
        else if(loginEmailInput.value == ""||loginPasswordInput.value =="")
        {
            msgalert.classList.replace("d-none","d-block")
            logInfo.classList.replace("d-block","d-none")
        }
        else if(loginEmailInput.value != ""||loginPasswordInput.value !=""){
            msgalert.classList.replace("d-block","d-none")
            logInfo.classList.replace("d-none","d-block")
        }
        else{
            msgSuccess.classList.replace("d-none","d-block")
            logInfo.classList.replace("d-block","d-none")
        }
    }
}


// LOG IN END
//HOME START 

var welcomeMsg = document.getElementById("welcomeMsg");

for(var i =0 ; i<users.length;i++)
    {
        welcomeMsg.innerHTML=users[i].name;
    }
//HOME END 
