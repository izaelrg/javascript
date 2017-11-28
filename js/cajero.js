//Creamos la clase Billete
class Billete {
  constructor(v, c) {
    this.valor = v
    this.cantidad = c
  }
}

//Funcion extraerDinero
function entregarDinero() {
  let t = document.getElementById('dinero')
  dinero = parseInt(t.value)
  for(var bi of caja) {
    if (dinero > 0) {
      //El valor de "div" será el resultado de la siguiente operación
      div = Math.floor(dinero / bi.valor)
      //Si 0 es mayor a la cantidad de billetes que tenemos disponibles
      if (div > bi.cantidad) {
        //
        papeles = bi.cantidad
      }
      //
      else {
        papeles = div
      }
      entregado.push(new Billete(bi.valor, papeles))
      dinero = dinero - (bi.valor * papeles)
    }
  }
  if (dinero > 0) {
    // console.log(`Lo siento no tengo esa cantidad de dinero :(`);
    // document.write(`Lo siento no tengo esa cantidad de dinero :(`)
    resultado.innerHTML = `Lo siento no tengo esa cantidad de dinero :(`
  }
  else {
    for (e of entregado) {
      if (e.cantidad > 0) {
        // console.log(entregado);
        // document.write(`${e.cantidad} billetes de $ ${e.valor}<br>`)
        resultado.innerHTML += `${e.cantidad} billetes de $ ${e.valor}<br>`
      }
    }
  }
}

//Array con el valor y la cantidad de billetes
let caja = []
let entregado = []
caja.push(new Billete(50, 3))
caja.push(new Billete(20, 2))
caja.push(new Billete(10, 2))

let dinero = 0
let div = 0
let papeles = 0
let resultado = document.getElementById('resultado')

//Tomamos el valor de la caja Input con id="extraer"
let b = document.getElementById('extraer')
//Agregamos el evento click y la funcion extraerDinero
b.addEventListener('click', entregarDinero)
