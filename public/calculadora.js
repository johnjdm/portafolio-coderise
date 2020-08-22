let numero_a;
let numero_b;
let boton_sumar;
let boton_restar;
let boton_multiplicar;
let boton_dividir;
let resultado;

numero_a = document.getElementById("numero_a");
numero_b = document.getElementById("numero_b");
resultado = document.getElementById("resultado");

boton_sumar = document.getElementById("suma");
boton_sumar.addEventListener("click", function() {
  let prueba;
  let a = parseFloat(numero_a.value);
  let b = parseFloat(numero_b.value);

  if(isNaN(a)) {
    alert("Debe ingresar un primer número.");
    return; 
  }
  if(isNaN(b)) { 
    alert("Debe ingresar un segundo número.");
    return; 
  }

  prueba = suma(a,b);
  resultado.innerHTML = prueba;
}) 

boton_restar = document.getElementById("resta");
boton_restar.addEventListener("click", function() {
  let prueba;
  let a = parseFloat(numero_a.value);
  let b = parseFloat(numero_b.value);

  if(isNaN(a)) {
    alert("Debe ingresar un primer número.");
    return; 
  }
  if(isNaN(b)) { 
    alert("Debe ingresar un segundo número.");
    return; 
  }
  if(b>a) { 
    alert("El primer número debe se mayor que el segundo número.");
    return; 
  }

  prueba = resta(a,b);
  resultado.innerHTML = prueba;
}) 

boton_multiplicar = document.getElementById("multiplicar");
boton_multiplicar.addEventListener("click", function() {
  let prueba;
  let a = parseFloat(numero_a.value);
  let b = parseFloat(numero_b.value);

  if(isNaN(a)) {
    alert("Debe ingresar un primer número.");
    return; 
  }
  if(isNaN(b)) { 
    alert("Debe ingresar un segundo número.");
    return; 
  }

  prueba = mult(a,b);
  resultado.innerHTML = prueba;
}) 

boton_dividir = document.getElementById("division");
boton_dividir.addEventListener("click", function() {
  let prueba;
  let a = parseFloat(numero_a.value);
  let b = parseFloat(numero_b.value);

  if(isNaN(a)) {
    alert("Debe ingresar un primer número.");
    return; 
  }
  if(isNaN(b)) { 
    alert("Debe ingresar un segundo número.");
    return; 
  }
  if(b==0) { 
    alert("El segundo número debe ser diferente de cero.");
    return; 
  }

  prueba = dividir(a,b);
  resultado.innerHTML = prueba;
}) 

function suma (a, b) {
  let resultado;
  resultado = a + b;
  return resultado;
}

function resta (a, b) {
  let resultado;
  resultado = a - b;
  return resultado;
}

function mult (a, b) {
  let resultado;
  resultado = a * b;
  return resultado;
}

function dividir (a, b) {
  let resultado;
  resultado = a / b;
  return resultado;
}