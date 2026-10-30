// 1. agarrar:   const algo = document.querySelector(".selector");
// 2. escuchar:  algo.addEventListener("click", function () { ... });
// 3. cambiar:   otroAlgo.classList.toggle("nombreClase");


console.log("Hola toro");
const nombre = "Otro";
const edad = 32;
console.log(nombre, edad);
/*
const boton = document.querySelector(".btnPrueba");
console.log (boton);

boton.addEventListener("click", function(){
    console.log("Me tocaste");
    document.body.classList.toggle("oscuro");
})
*/

const botonHamburguesa = document.querySelector(".btnMenu");
const listaMenu = document.querySelector(".listaMenu");

botonHamburguesa.addEventListener("click", function(){
    listaMenu.classList.toggle("abierto");
});







/*
Paso 2: que el ☰ abra el menú

JS: ya sabés hacerlo. Al tocar el .btnMenu, prendé y apagá una clase abierto en .listaMenu. Escribilo vos, sin mirar.

CSS: acá hay algo nuevo. Necesitás una regla que diga “la .listaMenu que además tiene la clase abierto”. Se escribe así, todo pegado, sin espacio:

.listaMenu.abierto {
  display: flex;
}
Con espacio (.listaMenu .abierto) significa “algo con la clase abierto adentro de la listaMenu”. Es lo que venías usando.
Sin espacio (.listaMenu.abierto) significa “el mismo elemento tiene las dos clases”.

Esa diferencia de un espacio es de las que más confunden, así que fijate bien.

Cuando lo pruebes en celu, el menú va a aparecer medio apretado al lado del logo. Es normal; en el paso 3 lo acomodamos para que baje abajo del nav. Por ahora solo fijate que aparezca y desaparezca con el ☰.
*/