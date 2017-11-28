//Creamos un Array para relacionar el nombre con las imagenes
var imagenes = []
imagenes[`Cauchin`] = "img/vaca.png"
imagenes[`Pokacho`] = "img/pollo.png"
imagenes[`Tocinauro`] = "img/cerdo.png"



//Creamos el Objeto
class Pakiman {
  constructor(n, v, a) {
    this.imagen = new Image()
    this.nombre = n
    this.vida = v
    this.ataque = a

    this.imagen.src = imagenes[this.nombre]
  }
  //Cuando se escriben funciones dentro de una clase no se requiere "function"
  hablar() {
    alert(`Hola yo soy ${this.nombre}`)
  }
  mostrar() {
  //"document" contiene todas las etiquetas visibles de la pagina
  //En la siguiente linea mostramos la imagen dentro de "body"
    document.body.appendChild(this.imagen)
    document.write(`<br><strong>${this.nombre}</strong>`)
    document.write(`<br>Vida: ${this.vida}`)
    document.write(`<br>Ataque: ${this.ataque}<hr>`)
  }
}

// //Se crea el nuevo objeto del Pakiman
// var cauchin = new Pakiman("Cauchin", 100, 30)
// var pokacho = new Pakiman("Pokacho", 30, 50)
// var tocinauro = new Pakiman("Tocinauro", 120, 40)
//
// //Mostramos en pantalla la imagen y los datos del Pakiman
// pokacho.mostrar()
// cauchin.mostrar()
// tocinauro.mostrar()

var coleccion = []
//Con el "push" indicamos que se agregue al final del array
coleccion.push(new Pakiman("Cauchin", 100, 30))
coleccion.push(new Pakiman("Pokacho", 30, 50))
coleccion.push(new Pakiman("Tocinauro", 120, 40))

// Este ciclo va a funcionar por la cantidad de objetos que hay dentro del Array "coleccion"
// el objeto se va a colocar dentro de la variable pakimanes.
for (var pakiman of coleccion) {
  pakiman.mostrar()
}

//
for (var x in coleccion) {
  console.log(x);
}
