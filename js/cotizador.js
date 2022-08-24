class Cotizador {
    constructor(m2, fEstilo) {
        this.m2 = parseInt(m2)
        this.factorEstilo = parseInt(fEstilo)
    }
    cotizar() {
        let resultado = (this.factorEstilo * this.m2).toFixed(2)
            return resultado.toLocaleString()
    }
}

