
function cargarEstilos() {
    datosEstilos.forEach((elemento) => {
        estilo.innerHTML += `<option value="${elemento.factor}">${elemento.tipo}</option>`
    });
}
cargarEstilos()


const datosCompletos = ()=>{
    if (estilo.value !== "..." &&
        parseInt(metros2.value) > 0) {
            return true
        } else {
            return false
        }
}

const realizarCotizacion = () => {
if (datosCompletos()){
    const cotizacion = new Cotizador(estilo.value, metros2.value)
                console.log(cotizacion.cotizar())
                valor.innerText = cotizacion.cotizar()
} else {
    alert("⛔️Completa todos los valores solicitados para recibir una cotizacion")
}
}


const enviarPorEmail = ()=>{
    if (datosCompletos()){
    const enviarCotizacion = {
        fechaCotizacion: new Date().toLocaleString(),
        estilo: estilo[estilo.selectedIndex].text,
        metrosCuadrados: metros2.value,
        importe: valor.innerHTML
    }
    localStorage.setItem("UltimaCotizacion", JSON.stringify(enviarCotizacion))
    alert("Cotizacion enviada, le responderemos a la brevedad!")
} else {
    alert("⛔️Completa todos los valores solicitados para recibir una cotizacion")
}
}

btnCotizar.addEventListener("click", realizarCotizacion)
btnEnviar.addEventListener("click", enviarPorEmail)