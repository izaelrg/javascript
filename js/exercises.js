class Toggable {
  constructor(el) {
    // inicializar el estado interno
    this.el = el
    this.el.innerHTML = 'Off'
    this.activated = false
    this.el.addEventListener('click', this.onClick.bind(this))
  }

  onClick(ev) {
    // console para verificar que funciona onClick
    //console.log('Qué esta pasando?');
    // cambiar el estado interno, este metodo es el que se ejecuta al dar Click
    this.activated = !this.activated
    // llamar a toggleText
    this.toggleText()
  }

  toggleText() {
    // cambiar el texto con un "If"
    this.el.innerHTML = this.activated ? 'On' : 'Off'
  }

}

const button = document.getElementById('boton')

const miBoton = new Toggable(button)
