const Menu = document.querySelector(".menu");
const Submenu = document.querySelector(".sub-menu");

Menu.addEventListener("click",() =>{
    Submenu.classList.toggle("hide");
});

function text(){
    document.getElementById("text-container").firstElementChild.innerHTML.style.color = "red"
}


const p = document.createElement("p");
document.body.appendChild(p);
p.innerHTML =
`<p> &copy;Author: Lindsey Weche</p>
<p>
  <a> <ahref="mailto:lindseyhaishanw22@icloud.com">lindseyhaishanw22@icloud.com</a>
</p>`;

function promptMethod() {
    const inputPrompt = promptMethod("Welcome to Lakay News _A Haitian Blog");
    alert ("Hello" +inputPrompt);
}

function mouseOver (){
document.getElementById("heading").style.color = "red";
}

function mouseOut (){
    document.getElementById("heading").style.color = "black";
}

// Functionality for Form Registration

const Form = document.querySelector("input");
input.addEventListener("focus",function(){
    console.log("input focused");
});


const register = document.querySelector("#button");
const nameInput = document.querySelector("username");
const emailInput = document.querySelector("email");
const passwordInput = document.querySelector("password");
const passwordCheckInput = document.querySelector("passwordCheck");

const isValid = function (validateInputs) {
    for (let i = 0; i <isValid.length; i++) {
      if (validateInputs[i].value === "") {
        alert("Please Fill out Each Field");
        return;
      }
    }
};

const validateInputs = () => {
    const nameInput = username.value.trim();
    const emailInput = email.value.trim();
    const passwordInput = password.value.trim();
    const passwordCheckInput = passwordCheck.value.trim();


    if(passwordInput !== passwordCheckInput){
        alert("Please Verify your password")
        passwordInput.focus()
        return false;
    }
    if (passwordInput === ""){
        alert ("Please fill the field")
        passwordInput.focus()
        return false;
    }
    return true;
}





