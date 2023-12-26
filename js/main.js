var signupNameInput =document.getElementById("signupNameInput");
var signupEmailInput =document.getElementById("signupEmailInput");
var signupPasswordInput =document.getElementById("signupPasswordInput");
var msgalert = document.getElementById("msg-alert");    
var msgSuccess = document.getElementById("msg-success");    
var existEmail = document.getElementById("existEmail");
var loginEmailInput =document.getElementById("loginEmailInput");
var loginPasswordInput =document.getElementById("loginPasswordInput");
var signUpBtn = document.getElementById("signUpBtn")

signUpBtn.addEventListener("click",addUser)
var users =[]
if(localStorage.getItem("users")!= null)
{
    users = JSON.parse(localStorage.getItem("users"))
}

// SIGN UP START
function addUser(){
            if(validForm() ==true || validateEmail() == false)
            {
                var user={
                    name :signupNameInput.value,
                    email:signupEmailInput.value,
                    password:signupPasswordInput.value
                }
                users.push(user)
                localStorage.setItem("users",JSON.stringify(users))
                clearForm();
            }
            else{
                msgalert.classList.replace("d-none","d-block")
                msgSuccess.classList.replace("d-block","d-none")
            }
}
function clearForm(){
    signupNameInput.value ="";
    signupEmailInput.value="";
    signupPasswordInput.value="";
}
function validateEmail(){
    for(var i =0;i<users.length;i++)
        {   if(localStorage.getItem("users")!= null)
            {
                if(signupEmailInput.value == users[i].email)
                {
                    existEmail.classList.replace("d-none","d-block")
                    return true
                }
                else{
                    existEmail.classList.replace("d-block","d-none")
                }
            }
            else{
                existEmail.classList.replace("d-block","d-none")
                return false
            }
        }
}
function validForm(){
    regexName =/^\w{3,15}\s?(\w{3,15})*$/gi
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
        msgSuccess.classList.replace("d-none","d-block")
        msgalert.classList.replace("d-block","d-none")
        return true
    }
}
// SIGN UP START
// ============================================


// LOG IN START
var logInfo = document.getElementById("log-info"); 
var signInBtn = document.getElementById("signInBtn")
signInBtn.addEventListener("click",userLog)
function userLog(){

    for(var i =0 ; i<users.length;i++)
    {
        if(users[i].email== loginEmailInput.value&& users[i].password== loginPasswordInput.value)
        {
            logInfo.classList.replace("d-block","d-none")
            msgalert.classList.replace("d-block","d-none")
            window.location.href="home.html"
        }
        else if(loginEmailInput.value != "" || loginPasswordInput.value != "")
        {
            logInfo.classList.replace("d-none","d-block")
        }
    }
    isEmptyLog()
}

function isEmptyLog(){
    if(loginEmailInput.value == ""||loginPasswordInput.value =="")
    {
        msgalert.classList.replace("d-none","d-block")
        logInfo.classList.replace("d-block","d-none")

    }
    else{
        msgalert.classList.replace("d-block","d-none")
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
