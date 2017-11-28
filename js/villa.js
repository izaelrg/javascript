// var z
//
// for (var i = 0; i < 10; i++) {
//   z = aleatorio(10, 20)
//   document.write(`${z}, `)
// }

var teclas = {
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  LEFT: 37
}

document.addEventListener('keydown', moverCerdo)
var vp = document.getElementById("lavilla")
var papel = vp.getContext("2d")

// Objetos JSON, donde cargaOK es false para luego en la funcion dibujar cargarlos como true
var fondo = {
  url: "img/tile.png",
  cargaOK: false
}

var vaca = {
  url: "img/vaca.png",
  cargaOK: false
}

var cerdo = {
  url: "img/cerdo.png",
  cargaOK: false
}

var pollo = {
  url: "img/pollo.png",
  cargaOK: false
}

fondo.objeto = new Image()
fondo.objeto.src = fondo.url
fondo.objeto.addEventListener("load", cargarFondo)

vaca.objeto = new Image()
vaca.objeto.src = vaca.url
vaca.objeto.addEventListener("load", cargarVacas)

cerdo.objeto = new Image()
cerdo.objeto.src = cerdo.url
cerdo.objeto.addEventListener("load", cargarCerdos)

pollo.objeto = new Image()
pollo.objeto.src = pollo.url
pollo.objeto.addEventListener("load", cargarPollos)

function cargarFondo() {
    fondo.cargaOK = true
    dibujar()
}

function cargarVacas() {
  vaca.cargaOK = true
  dibujar()
}

function cargarCerdos() {
  cerdo.cargaOK = true
  dibujar()
}

function cargarPollos() {
  pollo.cargaOK = true
  dibujar()
}

function dibujar() {
  if (fondo.cargaOK) {
    papel.drawImage(fondo.objeto, 0, 0)
  }
  if (vaca.cargaOK) {
    var x = aleatorio(0, 420)
    var y = aleatorio(0, 420)
    papel.drawImage(vaca.objeto, x, y)
  }
  if (cerdo.cargaOK) {
    var x = aleatorio(0, 420)
    var y = aleatorio(0, 420)
    papel.drawImage(cerdo.objeto, x, y)
  }
  if (pollo.cargaOK) {
    // "for" para dibujar 10 pollos
    for (var i = 0; i < 10; i++) {
    var x = aleatorio(0, 420)
    var y = aleatorio(0, 420)
    papel.drawImage(pollo.objeto, x, y)
  }
}
}


function moverCerdo(e) {
  var movimiento = 10
  var x = 250
  var y = 250
  switch (e.keyCode) {
    case teclas.UP:
          console.log('arriba')
          moverCerdo(cerdo, x, y, x, y - movimiento, papel)
          y = y - movimiento
      break;
    case teclas.RIGHT:
          //console.log('derecha')
          moverCerdo(x, y, x + movimiento, y, papel)
          x = x + movimiento
      break;
      case teclas.DOWN:
            //console.log('abajo')
            moverCerdo(x, y, x, y + movimiento, papel)
            y = y + movimiento
        break;
        case teclas.LEFT:
              //console.log('izquierda')
              moverCerdo(x, y, x - movimiento, y, papel)
              x = x - movimiento
          break;
        }
}

function aleatorio(min, maxi) {
  let resultado
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min
// con return devolvemos el valor de resultado
  return resultado
}
