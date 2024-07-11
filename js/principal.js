import CL_MayorMenor from "./CL_Mayor-menor.js";
import CL_IMayorMenor from "./CL_IMayor-menor.js";

let imame = new CL_IMayorMenor(),
    n1=imame.leerNumero1(),
    n2=imame.leerNumero2(),
    n3=imame.leerNumero3(),

    mame = new CL_MayorMenor(n1,n2,n3),
    salida = document.getElementById("salida");

    salida.innerHTML = imame.reporteNumero(mame.numero1, mame.numero2, mame.numero3, mame.mayorMenor());
