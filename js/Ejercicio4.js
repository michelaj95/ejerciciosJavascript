function ordenarNums(array) {
  array.sort(function (a, b) {
    return a - b;
  });
}

let boton4 = document.getElementById("btn-ejercicio4");
boton4.onclick = function () {
  mostrarResultadoEjercicio4();
};

function mostrarResultadoEjercicio4() {
  let cantidadElementos = prompt(
    "Ingrese la cantidad de elementos que quiera que tenga su array: "
  );
  let arrayAOrdenar = [];
  let txtArraySinOrdenar =
    "El array desordenado contiene los siguientes valores: <br />";
  for (i = 0; i < cantidadElementos; i++) {
    arrayAOrdenar[i] = prompt("Ingrese el valor para el elemento " + i);
    txtArraySinOrdenar += "Elemento " + i + ": " + arrayAOrdenar[i] + "<br />";
  }
  ordenarNums(arrayAOrdenar);
  let resultado = "El array ordenado contiene los siguientes valores: <br />";
  for (i = 0; i < arrayAOrdenar.length; i++) {
    resultado += "Elemento " + i + ": " + arrayAOrdenar[i] + "<br />";
  }
  document.getElementById("sin-ordenar-ejercicio4").innerHTML =
    txtArraySinOrdenar;
  document.getElementById("resultado-ejercicio4").innerHTML = resultado;
}
