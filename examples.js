//++++++++++++++++++CALCULAR AREA DE TRIANGULO++++++++++++++++++++++
//Con *let* definimos una variable
//Con *prompt* pedimos un dato al usuario
let base = 10
let height = prompt(`Altura del Triangulo`)


//Con *const* definimos una variable que no va a cambiar no se puede asignar un nuevo valor
//triangleArea va a recibir dos parametros base y height y nos va a retornar base * height / 2
const triangleArea = (base, height) => base * height / 2

console.log(`El área de un triángulo de base
${base} y altura ${height} es: ${triangleArea(base, height)}`)



// +++++++++++++++QUIEN PUEDE VER UNA PELICULA++++++++++++++++++++++++++++
// Definimos el nombre de la película y la edad para entrar a verla
const starWars7 = 'Star Wars: El Despertar de la Fuerza'
const pgStarWars7 = 13

const nameIzael = 'IzAEL'
const ageIzael = 32

const nameSanti = 'Santi'
const ageSanti = 12

// Definimos una función para revisar si una persona puede pasar o no.
// isWithAdult se define como false para definir que no esta acompañado de un adulto
// Sin Arrow Functions ** function canWatchStarWars7(name, age, isWithAdult = false)
const canWatchStarWars7 = (name, age, isWithAdult = false) =>  {
  // Si la persona es mayor o igual a 13
  if(age >= pgStarWars7) {
    alert(`${name} puede pasar a ver ${starWars7}`)

  // Se valida que isWithAdult sea true
  } else if(isWithAdult) {
    alert(`${name} puede pasar a ver ${starWars7}.
      Aunque su edad es ${age}, se encuentra acompañado por un adulto`)

  // Si ninguna de las dos condiciones pasa se ejecuta lo siguiente
  } else {
    alert(`${name} no puede pasar a ver ${starWars7}.
      Tiene ${age} años y necesita tener ${pgStarWars7}`)
  }
}

canWatchStarWars7(nameIzael, ageIzael)
canWatchStarWars7(nameSanti, ageSanti, true)

//++++++++++++++++INVENTAR IDIOMA++++++++++++++++++++++++++++++++
// definimos una función con un parametro string
function platzom(str) {
  let translation = str

  /* Si la palabra es un palíndromo(que se lee igual izquierda a derecha y al reves)
  ninguna regla anterior cuenta y se devuelve la misma palabra intercalando
  mayusculas y minusculas  */
  /* Con *reverse* comenzamos el string de derecha a izquierda, con *split* separamos
  la palabra en un array, con *join* volvemos a unir la palabra */
  const reverse = (str) => str.split('').reverse().join('')

  function minMay(str) {
    const length = str.length
    let translation = ''
    let capitalize = true
    for (let i = 0; i < length; i++) {
      const char = str.charAt(i)
      translation += capitalize ? char.toUpperCase() : char.toLowerCase()
      capitalize = !capitalize
    }
    return translation
  }

  if (str == reverse(str)) {
    return minMay(str)
  }

  // Si la palabra inicia con Z, se le añade "pe" al final
  if (str.toLowerCase().startsWith('z')) {
    // con += agregamos el valor que se encuentra al lado derecho
    translation += 'pe'
  }

  /* Si la palabra traducida tiene 10 o más letras, se debe oartur a la mitad y
  unir con un guiópn en medio.
  Con *length* medimos la longitud del string */
  const length = translation.length
  if (length >= 10) {
    // Partimos la palabra desde el inicio hasta la mitad
    const firstHalf = translation.slice(0, Math.round(length / 2))
    // Desde la mitad y si no hay segundo parametro es hasta el final
    const secondHalf = translation.slice(Math.round(length / 2))
    translation = `${firstHalf}-${secondHalf}`
  }

  /* Si la palabra termina en "ar", se le quitan esos dos caracteres
   toLowerCase convierte el string en minusculas */
  if (str.toLowerCase().endsWith('ar')) {
  /* slice nos permite cortar caracteres, indicamos que comience desde el cero y que corte
 dos caracteres antes del final */
    translation = str.slice(0, -2)
  }

  return translation
}

console.log(platzom("Programar")) // Program
console.log(platzom("Zorro")) // Zorrope
console.log(platzom("abecedario")) // abece-dario
console.log(platzom("sometemos")) // SoMeTeMoS


//+++++++++++++++++CUANTO CORRE UNA PERSONA+++++++++++++++++++

const nombre = "IzAEL"
const dias = [
    "lunes",
    "martes",
    "miércoles",
    "jueves",
    "viernes",
    "sábado",
    "domingo"
]


function correr() {
    const min = 5
    const max = 15
    // *Math.random()* nos da un número aleatorio entre 0 y 1
    // *Math.round* redondea el número
    return Math.round(Math.random() * (max - min)) + min
}

// *dias.length* representa el número del array dias
// Con *dias[i]* recorremos el array
let totalkms = 0

// Definimos la variable length para no repetir tantas veces dias.length
const length = dias.length
for (let i = 0; i < length; i++) {
    const kms = correr()
    totalkms = kms
    document.write(`El día ${dias[i]}, ${nombre} corrió ${kms}kms<br>`)
}

const promedioKms = totalkms / length
console.log(`En promedio, ${nombre} corrió ${promedioKms.toFixed(2)}kms`)


//+++++++++++++++++QUIEN GANA UNA PELEA++++++++++++++++++++++++++++++++++

let vidaGoku = 100
let vidaSuperman = 80

const MIN_POWER = 5
const MAX_POWER = 12

const ambosSiguenVivos = () => vidaGoku > 0 && vidaSuperman > 0
const calcularGolpe = () => Math.round(Math.random() * (MAX_POWER - MIN_POWER)) + MIN_POWER
const gokuSigueVivo = () => vidaGoku > 0

let round = 0

// la funcion ambosSiguenVivos nos devuelve si es verdadero o falso
while (ambosSiguenVivos()) {
    round++
    document.write(`<strong>Round ${round}<br></strong>`)

    const golpeGoku = calcularGolpe()
    const golpeSuperman = calcularGolpe()

    if (golpeGoku > golpeSuperman) {
        // ataca Goku
        document.write(`Goku ataca a Superman con un golpe de ${golpeGoku}<br>`)
        // La vidaSuperman se resta lo que tiene golpeGoku
        vidaSuperman -= golpeGoku
        document.write(`Superman queda en ${vidaSuperman} de vida<br>`)
    } else {
        // ataca Superman
        document.write(`Superman ataca a Goku con un golpe de ${golpeSuperman}<br>`)
        vidaGoku -= golpeSuperman

        document.write(`Goku queda en ${vidaGoku} de vida<br>`)
    }
}

if (gokuSigueVivo()) {
    console.log(`Goku ganó la pelea. Su vida es de: ${vidaGoku}`)
} else {
    console.log(`Superman ganó la pela. Su vida es de: ${vidaSuperman}`)
}



//++++++++++++++++++++++++++++CUANTO TIEMPO HA PASADO++++++++++++++++++++++++++++++++++++++++

// 25 Septiembre 1984
// Definimos la fecha con *Date()*
const diasSemana = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado"
]
const mesYear = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
]
const nacimiento = new Date(1984, 8, 25)
const hoy = new Date()

const tiempo = hoy - nacimiento

// tiempo en segundos
const tiempoSegundos = tiempo / 1000

// tiempo en minutos
const tiempoMinutos = tiempoSegundos / 60

// tiempo hora
const tiempoHora = tiempoMinutos / 60

// tiempo dias
const tiempoDias = Math.round(tiempoHora / 24)

const proximoCumple = new Date(hoy.getFullYear(), nacimiento.getMonth(), nacimiento.getDate())

console.log(`Tu cumpleaños sera el ${diasSemana[proximoCumple.getDay()]} (${proximoCumple.getDate()})
de ${mesYear[proximoCumple.getMonth()]} del ${proximoCumple.getFullYear()}`)
