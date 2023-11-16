const input = document.querySelectorAll('.input')
const inputContainer = document.querySelectorAll('.input_container')
const inputTitle = document.querySelectorAll('.input_title')
const ERRROR = ["Must be a valid day", "Must be a valid month", "Must be in the post"]

export function validar(fecha) {
    let contadorErrores = 0
    let mensajes = ['', '', '']
    input.forEach((x, y) => {
        if (x.value == '') {
            contadorErrores++
            mensajes[y] = 'This field is required'
        }
    })

    const [day, month, year] = fecha


    if (Number(day) > 30 || Number(day) < 1 && day != '') {
        contadorErrores++
        mensajes[0] = ERRROR[0]
    }

    if (Number(month) >12  || Number(month) < 1 && month != '') {
        contadorErrores++
        mensajes[1] = ERRROR[1]
    }
    if(Number(year)>2023){
        mensajes[2]=ERRROR[2]
    }
    console.log(mensajes)
    if (contadorErrores > 0) {
        dibujarError(mensajes)
    } else {
        return true
    }

}

function dibujarError(message) {
    input.forEach((x, y) => {
        x.classList.add('input_error')
        inputTitle[y].classList.add('title_error')
        let mensaje = document.createElement('p')
        mensaje.classList.add('mensaje')
        mensaje.innerText = message[y]
        inputContainer[y].appendChild(mensaje)
    })
    setTimeout(() => {
        input.forEach((x, y) => {
            x.classList.remove('input_error')
            inputTitle[y].classList.remove('title_error')
            let hijo = inputContainer[y].lastChild
            inputContainer[y].removeChild(hijo)
        })
    }, 2000);
}