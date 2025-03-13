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

//Ejercicio 3.3 - Bloques de article o section: Color de fondo distinto al de párrafo.

for (let i = 0; i < seleccionArticlesSections.length; i++) {
  seleccionArticlesSections[i].addEventListener("mouseover", () => {
    seleccionArticlesSections[i].style.backgroundColor = "blue";
  });
  {
    seleccionArticlesSections[i].addEventListener("mouseout", () => {
      seleccionArticlesSections[i].style.backgroundColor = "black";
    });
  }
}

//Ejercicio 4 - Crea una función de nombre getRandom que acepte un array con valores y devuelva uno de ellos de manera aleatoria.

const colors = ["red", "blue", "green"];
const getRandom = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};
console.log(getRandom(colors));
// imprime 'red', 'blue' o 'green'
