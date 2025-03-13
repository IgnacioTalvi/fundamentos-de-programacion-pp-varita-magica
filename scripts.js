//Ejercicio 1

const allLinks = document.querySelectorAll("a");

for (let i = 0; i < allLinks.length; i++) {
  allLinks[i].href = "";
}

//Ejercicio 2.1

// const allImages =

// function changeImage() {
const allImages = document.querySelectorAll("img");

for (let i = 0; i < allImages.length; i++)
  allImages[i].addEventListener("click", function () {
    allImages[i].src = "./assets/magic-1.gif";
  });

//2.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.

const colorParrafos = document.querySelectorAll("p");
for (let i = 0; i < colorParrafos.length; i++) {
  colorParrafos[i].style.color = "white";
}

const colorFondo = document.querySelector("body");
colorFondo.style.backgroundColor = "Red";

//2.3

const changeArticlesBgColor = document.querySelectorAll("article");
changeArticlesBgColor.style.backgroundColor = "White";

// function cambiarImagen() {
//   for (let i = 0; i < allImages.length; i++)
//     allImages[i].src = "assets/magic-1.gif";
// }

// allImages.addEventListener("click", function () {
//   allImages.src = "assets/magic-1.gif";
// });

// allImages.addEventListener("click", function () {
//   for (let i = 0; i < allImages.length; i++)
//     allImages[i].src = "assets/magic-1.gif";
// });

// allImages.addEventListener("click", function () {
//   for (let i = 0; i < allImages.length; i++)
//     allImages[i].src = "assets/magic-1.gif";
// });

// for (let i = 0; i < allImages.length; i++) {
//   allImages[i].src = "assets/magic-1.gif";

//   .addEventListener("click", function () {
//     return (allImages.src = "hello.png");
//   });

// const allImages = document
//   .querySelectorAll("img")
//   .addEventListener("click", function () {
//     allImages.src = "";
//   });

// const allImages = document
//   .querySelectorAll("a")
//   .addEventListener("click", function () {
//     allImages.src === "../magic-1.gif";
//   });

//   ("click", function () {});

// const clickDisabled = document.getElementsByTagName("a").onclick = function() {
//     clickDisabled.removeAttribute("onclick");
// }

// const clickDisabled = document.getElementsByTagName("a");

// document.getElementsByTagName("a").addEventListener ("click", function () {
//     a.removeAttribute("onclick");
// }

// const clickDisabled = document
//   .getElementsByTagName("a")
//   .addEventListener("click", function () {
//     clickDisabled.disable = true;
//   });

// const clickDisabled = document
//   .getElementsByTagName("a")
//   .setAttribute("disabled", true);

// const allLinks = document.getElementById("span");
// allLinks.disabled = true;

// function disableClick() {
//     var input = document.getElementById('textInput').value;
//     var button = document.getElementById('submitButton');
//     button.disabled = input === '';
//   }

// allLinks.disabled = true;

// document.getElementsByTagName("a").disabled = "disabled";

//clickDisabled.disabled = true;

// const linkDisabled = document.getElementsByTagName("a");
// function clickDisabled() {
//   linkDisabled.removeAttribute("onclick");
// }

// for (let i = 0; i < clickDisabled.length; i++) {
//     clickDisabled.removeAttribute("onclick");
// }

// const clickDisabled = document.getElementsByTagName("link").onclick = function() {
//     clickDisabled.removeAttribute("onclick");
// }

// for(var i=0; i<clickDisabled.length; i++){
//     clickDisabled[i].addEventListener("click", clickFunction);
//   }

// document.getElementById("btn").onclick = function(){
//     document.getElementById("chip-filterTags").ej2_instances[0].removeEventListener("click"); }
