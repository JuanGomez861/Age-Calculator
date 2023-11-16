const fechaActual = new Date()
const añoActual = fechaActual.getFullYear()
let mesActual = fechaActual.getMonth()
mesActual += 1
const diaActual = fechaActual.getDate()
let monthUser = null

export function fechaUser([dia, mes, año]) {
    let yearUser = parseInt(añoActual) - parseInt(año)
    let dias = diaActual - dia
    if (mesActual < mes) {
        yearUser--
        monthUser = mesActual - 1
    } else if (mesActual > mes) {
        monthUser = (mesActual - 1) - mes
    } else if (mesActual == mes) {
        monthUser = mesActual - mes
    }

    if (diaActual < dia) {
        dias = contarDias(dia, diaActual)

    } else if (diaActual > dia) {
        dias = diaActual - dia
        monthUser += 1
    }

    return [yearUser, monthUser, dias]
}


function contarDias(inicio, fin) {
    let contador = 0
    let resta = 31 - inicio
    let long = resta + fin
    for (let i = 0; i < long; i++) {
        contador++
    }
    return contador
}

