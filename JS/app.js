const Menu = document.querySelector(".menu");
const Submenu = document.querySelector(".sub-menu");

Menu.addEventListener("click",() =>{
    Submenu.classList.toggle("hide");
});


const p = document.createElement("p");
document.body.appendChild(p);
p.innerHTML =
`<p> &copy;Author: Lindsey Weche</p>
<p>
  <a> <ahref="mailto:lindseyhaishanw22@icloud.com">lindseyhaishanw22@icloud.com</a>
</p>`;



// Functionality for Form Registration
// const register = document.querySelector("#registration");
// const nameInput = document.querySelector("username");
// const emailInput = document.querySelector("email");
// const passwordInput = document.querySelector("password");
// const passwordCheckInput = document.querySelector("passwordCheck");


// const regForm = document.getElementById("registrationForm").addEventListener("click,promptMethod");
// function promptMethod () {
//     const welcome = prompt("Welcome to Lakay News _A Haitian Blog");
//     alert (welcome);
// }


// regForm.addEventListener("submit",(e) =>{
//     e.preventDefault();

//     validateInputs();
// });

// const validateInputs = () => {
//     const nameInput = username.value.trim();
//     const emailInput = email.value.trim();
//     const passwordInput = password.value.trim();
//     const passwordCheckInput = passwordCheck.value.trim();


//     if(passwordInput !== passwordCheckInput){
//         alert("Please Verify your password")
//     }
// }


// const isValid = function (register) {
//     for (let i = 0; i < register.length; i++) {
//       if (register[i].value === "") {
//         alert("Please Fill out Each Field");
//         return;
//       }
//     }
// };

// // const Form = document.querySelector("input");
// // input.addEventListener("focus",function(){
// //     console.log("input focused");
// // });

// // button.addEventListener("submit",(e){
// //     e.preventDefault()
// // });

  




