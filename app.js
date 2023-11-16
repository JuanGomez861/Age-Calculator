import { validar } from "./erros.js"
import { fechaUser } from "./fecha.js"
const day = document.getElementById('day')
const month = document.getElementById('month')
const year = document.getElementById('year')
const boton = document.getElementById('boton')
const texto = document.querySelectorAll('.fecha')

console.log(texto)
boton.addEventListener('click', () => {
    let dayValue = day.value
    let monthValue = month.value
    let yearValue = year.value
    let valer=validar([dayValue,monthValue,yearValue])
    if(!valer)return;

    let fechas = fechaUser([dayValue, monthValue, yearValue])

    texto.forEach((x, y) => {
        x.innerHTML = `${fechas[y]} `
    })
})