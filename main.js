let form = document.getElementById('form')
let curp = document.getElementById('curp')
let correo = document.getElementById('correo')
let container_curp = document.getElementById('container_curp')
let container_correo = document.getElementById('container_correo')

form.onsubmit = function (event) {
  event.preventDefault(event)
  validar_curp(curp)
  validar_correo(correo)
}

function template_campo_correcto(container_box, text) {
  const campo_correcto = `
    <p class='correct'>${text} válido</p>
  `
  container_box.innerHTML = campo_correcto
}

function template_campo_incorrecto(container_box, text) {
  const campo_incorrecto = `
    <p class='incorrect'>${text} inválido</p>
  `
  container_box.innerHTML = campo_incorrecto
}

function validar_curp(curp) {
  const valor_curp = curp.value
  const curp_correcto = /^[a-zA-Z]{4}[1-9]{1}[0-9]{1}[0-9]{1}[1-9]{1}[0-9]{1}[1-9]{1}[a-zA-Z]{6}[0-9]{1}[1-9]{1}$/
  curp_correcto.test(valor_curp)
    ? template_campo_correcto(container_curp, text = 'curp')
    : template_campo_incorrecto(container_curp, text = 'curp')
}

function validar_correo(correo) {
  const valor_correo = correo.value
  const correo_correcto = /^[a-zA-Z0-9\-\_]{4,30}@[a-zA-Z0-9\-\_\.]{2,25}\.[a-zA-Z]{2,4}$/
  correo_correcto.test(valor_correo)
    ? template_campo_correcto(container_correo, text = 'correo')
    : template_campo_incorrecto(container_correo, text = 'correo')
}