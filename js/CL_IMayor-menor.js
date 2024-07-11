export default class CL_IMayorMenor {
    leerNumero1() {
        return prompt("Ingresa el primer numero");
    }
    leerNumero2() {
        return prompt("Ingresa el segundo numero");
    }
    leerNumero3() {
        return prompt("Ingresa el tercer numero");
    }

    reporteNumero(n1, n2, n3, m) {
        return `
        <br>Numeros: ${n1}, ${n2}, ${n3}
        <br>Mayor: ${m}
        `
    }
}