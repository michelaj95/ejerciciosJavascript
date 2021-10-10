let var1 = [1, 2, 4, 6, 7, 8];
let var2 = [1, 2, 4, 5, 6, 7, 8];

let var3 = var1.concat(var2).sort(function (a, b) {
  return a - b;
});

let boton5 = document.getElementById("btn-ejercicio5");
boton5.onclick = function () {
  mostrarResultadoEjercicio5();
};

function mostrarResultadoEjercicio5() {
  let resultado = "El array obtenido contiene los siguientes valores: <br />";
  for (i = 0; i < var3.length; i++) {
    resultado += "Elemento " + i + ": " + var3[i] + "<br />";
  }
  document.getElementById("resultado-ejercicio5").innerHTML = resultado;
}
