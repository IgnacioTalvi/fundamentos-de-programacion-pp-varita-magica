//Ejercicio 1 - Evita el comportamiento por defecto al hacer click. Por ejemplo, si hago click sobre un enlace, este no me llevará a otra página.
const allLinks = document.querySelectorAll("a");

for (let i = 0; i < allLinks.length; i++) {
  allLinks[i].href = "";
}

//Ejercicio 2 - Al hacer click sobre un elemento van a ocurrir varias cosas. Todo depende del tipo de elemento:

//Ejercicio 2.1 - Imágenes: Cambia la imagen por uno de los gif que tienes en la carpeta assets con el nombre magic-*.
const allImages = document.querySelectorAll("img");

for (let i = 0; i < allImages.length; i++)
  allImages[i].addEventListener("click", function () {
    allImages[i].src = "./assets/magic-1.gif";
  });

//2.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.

const seleccionarParrafos = document.querySelectorAll("p");

for (let i = 0; i < seleccionarParrafos.length; i++) {
  seleccionarParrafos[i].style.color = "yellow";
  seleccionarParrafos[i].style.backgroundColor = "green";
}

//Ejercicio 2.3 - Bloques de article o section: Cambia el color de fondo.

const seleccionArticlesSections = document.querySelectorAll("article, section");

for (let i = 0; i < seleccionArticlesSections.length; i++) {
  seleccionArticlesSections[i].style.backgroundColor = "red";
}

//Ejercicio 3 - Cuando el cursor esté sobre alguno de los siguientes elementos, seguir las instrucciones siguientes, y devolver dicho elemento a su estado original cuando salga el cursor.

//Ejercicio 3.1 - Imágenes: Cambia la imagen por el gif abracadabra.gif.

for (let i = 0; i < allImages.length; i++) {
  const imageDefault = allImages[i].src;

  allImages[i].addEventListener("mouseover", () => {
    allImages[i].src = "./assets/abracadabra.gif";
  });
  {
    allImages[i].addEventListener("mouseout", () => {
      allImages[i].src = imageDefault;
    });
  }
}

//Ejercicio 3.2 - Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.

for (let i = 0; i < seleccionarParrafos.length; i++) {
  seleccionarParrafos[i].addEventListener("mouseover", () => {
    seleccionarParrafos[i].style.color = "blue";
  });
  {
    seleccionarParrafos[i].addEventListener("mouseout", () => {
      seleccionarParrafos[i].style.color = "purple";
    });
  }
}

// allImages[i].addEventListener("click", function () {
//   allImages[i].src = "./assets/magic-1.gif";
// });

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
