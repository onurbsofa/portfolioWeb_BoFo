const icon = document.getElementById("lightDarkMode");
const body = document.getElementById("body");
const iconoMenu = document.querySelector(".icono_menu");
const menu = document.getElementById("elem_menu");
const header = document.getElementById("header");


//Change the color of the WebPage------------------------------------------------------------//

icon.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
      icon.src = "./images/sun.png";
    } else {
      icon.src = "./images/moon.png";
    }
};
  
body.addEventListener("", () => {});

/*Library for scroll animations*/

AOS.init({
  duration: 800,
});

///MENU
iconoMenu.addEventListener("click", () => {
  menu.classList.toggle("active");
});


function cambiarTitulo() {
  if (
    screen.width < 1200
      ? (footerTitle.textContent = "Get in touch")
      : (footerTitle.textContent = "If you want to be in contact with me")
  );
}

window.addEventListener("resize", cambiarTitulo);


cambiarTitulo();