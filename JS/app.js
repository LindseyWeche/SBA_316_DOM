const Menu = document.querySelector(".menu");
const Submenu = document.querySelector(".sub-menu");

Menu.addEventListener("click",(e) =>{
    Submenu.classList.toggle("hide");
});