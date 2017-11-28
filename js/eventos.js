// var yourYear = document.getElementById('your_year')
// var boton = document.getElementById('btn')
//
// // addEventListener solicita dos parametros: ("nombreEvento", funcion_a_lanzar)
// boton.addEventListener("click", edad)
//
// function edad () {
//   // con "parseInt" convertimos el texto en número, con *value* obetenemos el valor de la
//   // caja de texto yourYear
//   let hisYear = parseInt(yourYear.value)
//   alert (`Tu año es ${hisYear}`)
// }

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(`Todo bien!`)

// Objeto JSON
var teclas = {
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  LEFT: 37
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath()
  lienzo.strokeStyle = color
  lienzo.lineWidth = 3
  lienzo.moveTo(xinicial, yinicial)
  lienzo.lineTo(xfinal, yfinal)
  lienzo.stroke()
  lienzo.closePath()
}

// con "keydown" le decimos al evento que se ejecute cuando se presione la tecla
// si se utiliza "keyup" el evento se ejecuta cuando se suelta la tecla
document.addEventListener('keydown', dibujarTeclado)
var cuadrito = document.getElementById("area_de_dibujo")
var papel = cuadrito.getContext("2d")
var x = 150
var y = 150
// Eventos con "mousedown" se ejecuta cuando presionas click y
// "mouseup" cuando presionas y sueltas el click
cuadrito.addEventListener('mousedown', hacerClick)

// al presionar sobre el canvas del html se ejecuta lo siguiente
function hacerClick (e) {
    console.log('Estas jugando con el mouse?');
  }

dibujarLinea("red", 149, 149, 151, 151, papel)

// con el parametro "evento" vamos a conocer la tecla que se esta presionando en el teclado
function dibujarTeclado(evento) {
// con el atributo "keyCode" podemos conocer el número(keyCode) de la tecla que se presiona
  //console.log(evento.keyCode)
var colorcito = "darkblue"
var movimiento = 10
  switch (evento.keyCode) {
    case teclas.UP:
          //console.log('arriba')
          dibujarLinea(colorcito, x, y, x, y - movimiento, papel)
          y = y - movimiento
      break;
    case teclas.RIGHT:
          //console.log('derecha')
          dibujarLinea(colorcito, x, y, x + movimiento, y, papel)
          x = x + movimiento
      break;
      case teclas.DOWN:
            //console.log('abajo')
            dibujarLinea(colorcito, x, y, x, y + movimiento, papel)
            y = y + movimiento
        break;
        case teclas.LEFT:
              //console.log('izquierda')
              dibujarLinea(colorcito, x, y, x - movimiento, y, papel)
              x = x - movimiento
          break;
    default:
      console.log('esta tecla no funciona');
  }
}
