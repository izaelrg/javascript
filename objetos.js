// function Punto(x, y) {
//   this.x = x
//   this.y = y
// }
//
// //********************* Tercera Forma ****************************
//
//
//
// //********************* Segunda Forma ****************************
// // Punto.prototype.moverEnX = function moverEnX(x) {
// //   this.x += x
// // };
// // Punto.prototype.moverEnY = function moverEnY(y) {
// //   this.y += y
// // };
// //
// // Punto.prototype.distancia = function distancia(p) {
// //   const x = this.x - p.x
// //   const y = this.y - p.y
// //
// //   return Math.sqrt(x * x + y * y)
// // };
// //
// // const p1 = new Punto(0, 4)
// // const p3 = new Punto(3, 0)
//
//
// //********************** Primera Forma ***************************
// // //Objeto 1
// // const p1 = {
// // //Atributos
// //   x: 0,
// //   y: 4,
// //
// // //Las funciones que se encuentran dentro de un Objeto se llaman Metodos
// //   moverEnX: function(x) { this.x += x },
// //   moverEnY: function(y) { this.y += y }
// // }
// //
// // //Objeto 2
// // const p2 = {
// //   x: 3,
// //   y: 0
// //
// //   moverEnX: function(x) { this.x += x },
// //   moverEnY: function(y) { this.y += y }
// // }
//
// // function distancia(p1, p2){
// //   const x = p1.x - p2.x
// //   const y = p1.y - p2.y
// //
// //   return Math.sqrt(x * x + y * y)
// //
// // }
//
// console.log(distancia(p1, p2));

//**********************************************************

function suma(...numeros) {
  let acum = 0
  for (let i = 0; i < numeros.length; i++) {
    acum += numeros[i]
  }
  return acum
}
