const Menu = document.querySelector(".menu");
const Submenu = document.querySelector(".sub-menu");

Menu.addEventListener("click",(e) =>{
    Submenu.classList.toggle("hide");
});

const mainContent = (c) => document.createElement(c);
const Footer = document.getElementById("bottom");


const para = Footer.appendChild(mainContent("bottom"));
para.innerHTML = 
`<p> &copy;Author: Lindsey Weche</p>
<p>
  <ahref="mailto:lindseyhaishanw22@icloud.com">lindseyhaishanw22@icloud.com</a>
</p>`;



