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
    if (monthValue == 0 || monthValue > 12 || dayValue > 31 || dayValue == 0) return;
    let fechas = fechaUser([dayValue, monthValue, yearValue])

    texto.forEach((x,y)=>{
        x.innerHTML=fechas[y]
    })
})