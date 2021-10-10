function llenarArray(cantidadNums) {
  let arrayAleatorio = [];
  for (let i = 0; i < cantidadNums; i++) {
    arrayAleatorio[i] = numeroAleatorio();
  }
  return arrayAleatorio;
}

function numeroAleatorio() {
  let aleatorio = Math.round(Math.random() * 10000);
  return aleatorio;
}

let boton3 = document.getElementById("btn-ejercicio3");
boton3.onclick = function () {
  mostrarResultadoEjercicio3();
};

function mostrarResultadoEjercicio3() {
  let cantidadNumeros = prompt(
    "Ingrese la cantidad de números que quiera generar: "
  );
  let nuevoArray = llenarArray(cantidadNumeros);
  let resultado =
    "El array generado aleatoriamente contiene los siguientes valores: <br />";
  for (i = 0; i < nuevoArray.length; i++) {
    resultado += "Elemento " + i + ": " + nuevoArray[i] + "<br />";
  }
  document.getElementById("resultado-ejercicio3").innerHTML = resultado;
}
