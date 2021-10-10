let arrayNums = [1, 2, 3, 4, 5, 7];
let sumados = [];

arrayNums.forEach((numero) => sumados.push(++numero));

let boton2 = document.getElementById("btn-ejercicio2");
boton2.onclick = function () {
  mostrarResultadoEjercicio2();
};

function mostrarResultadoEjercicio2() {
  let resultado =
    "El array incrementado contiene los siguientes valores: <br />";
  for (i = 0; i < sumados.length; i++) {
    resultado += "Elemento " + i + ": " + sumados[i] + "<br />";
  }
  document.getElementById("resultado-ejercicio2").innerHTML = resultado;
}
