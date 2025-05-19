// login form

let logEmail = document.getElementById("email-1");
let logPass = document.getElementById("pass-1");

let logBtn = document.querySelector("#log-btn");

//register form

let regName = document.getElementById("reg-name");
let regEmail = document.getElementById("reg-email");
let regPass = document.getElementById("reg-pass");
let regCnfPass = document.getElementById("reg-cnf-pass");

let regBtn = document.querySelector("#reg-btn");


logBtn.addEventListener("click",()=>{

if(logEmail.value=== "admin@gmail.com" && logPass.value ==="123"){
    alert("Login Successful");
}else{
    alert("wrong information")
}

});

regBtn.addEventListener("click",()=>{
    alert("name: " + regName.value + "\nEmail: "  + regEmail.value +
          "\nRegistered !!"      
    )
});





