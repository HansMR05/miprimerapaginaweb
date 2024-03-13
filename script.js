// alert("Hola este es mi Javascript")

// let nombre = "RICARDO";
// var nombre1="Ricardo";
// const nombre2 = "Ricardo";

// console.log(nombre);
// console.log(nombre1);
// console.log(nombre2);

let menu_responsive = document.querySelector(".checkbtn");
menu_responsive.onclick = function () {
  navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
};