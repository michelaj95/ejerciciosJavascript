function CantidadMayusculas(cadena) {
  var contar = 0;
  var mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (var i = 0; i < mayusculas.length; i++) {
    for (var x = 0; x < cadena.length; x++) {
      if (cadena[x] == mayusculas[i]) {
        contar += 1;
      }
    }
  }
  return contar;
}

let boton = document.getElementById("btn-ejercicio1");
boton.onclick = function () {
  mostrarResultado();
};

function mostrarResultado() {
  resultado = CantidadMayusculas(document.getElementById("cadena").value);
  document.getElementById("resultado-ejercicio1").innerHTML =
    "La cantidad de mayúsculas es de: " + resultado;
}
