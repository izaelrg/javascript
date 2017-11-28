// // Prototipo
// function Punto(x, y){
// // Constructor
//   this.x = x
//   this.y = y
// }
//
// // Asignamos un nuevo metodo "moverEnX" a Punto
// Punto.prototype.moverEnX = function moverEnX(x) {
// // Con this hacemos referencia al objeto p1
//   this.x += x
// };
// Punto.prototype.moverEnY = function moverEnY(y) {
//   this.y += y
// };
//
// Punto.prototype.distancia = function distancia(p) {
//   const x = this.x - p.x
//   const y = this.y - p.y
//
//   return Math.sqrt(x * x + y * y)
// };
//
// // Creamos un nuevo objeto y va asignar los valores del Prototipo Punto
// const p1 = new Punto(0, 4)
//
// const p2 = new Punto(3, 0)
//
// function distancia(p1, p2) {
//   const x = p1.x - p2.x
//   const y = p1.y - p2.y
// }
//
// console.log(distancia(p1, p2));
// p1.moverEnX(10)
// console.log(distancia(p1, p2));
// p2.moverEnY(-4)
// console.log(distancia(p1, p2));
var x = 1
var y = 2
var z = x + y
alert("El valor de Z es " + z)
