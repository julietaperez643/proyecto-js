/* //number
let edad;
edad = "26";
console.log(edad);
//string
let nombre = "Julieta";
console.log(nombre);
//boolean
let esalumno = "true";
console.log(esalumno);

for (let i = 0; i < 5; i++) {
  if (i === 4) {
    prompt("Último intento. Ingrese su contraseña");
  } else {
    prompt("Ingrese su contraseña");
  }
}

const contraseña = "coderhouse";
let contraseñaIngresada = prompt("Ingrese su contraseña");
while (contraseñaIngresada != contraseña) {
  alert("Contraseña incorrecta);
contraseñaIngresada = prompt("Ingrese su contraseña")}

function bienvenida() {
  let nombre = prompt("Ingresá tu nombre");
  console.log("Bienvenid@ " + nombre);
}

bienvenida(); */


function saludarUsuario() {
  let nombre = prompt("Ingresa tu nombre")
  alert("Bienvenido " + nombre + ".")
}

const cursos = ["Ingles inicial", "Ingles medio" , "Ingles avanzado"]
const precios = [30000, 40000, 50000]
const carrito = []
const carritoPrecios = []
const cursosMinuscula = []

for (let i = 0; i < cursos.length; i++) {
  cursosMinuscula.push(cursos[i].toLowerCase())
}

function mostrarCursos(cursos, precios) {

  let mensaje = "Bacantes disponibles:\n\n"

  for (let i = 0; i < cursos.length; i++) {
    mensaje += cursos[i] + " - $" + precios[i] + "\n"
  }

  alert(mensaje)
}

function comprar(cursos, carrito, precios) {
  let subTotal = 0
  let continuar = true
  while (continuar) {
    let cursoAdquirido = prompt("Slecciona una bacante")
    if (cursoAdquirido === null) {
      break
    } 
    
    cursoAdquirido = cursoAdquirido.toLowerCase()

    if (cursosMinuscula.includes(cursoAdquirido)) {
      let posicion = cursosMinuscula.indexOf(cursoAdquirido)
      let precio = precios[posicion]
      carrito.push(cursos[posicion])
      carritoPrecios.push(precio)
      subTotal += precio
      alert("Bacante seleccionada: \n" + cursos[posicion] + "\nPrecio: $" + precio)
    } else {
      alert("Curso no encontrado")
    }
    continuar = confirm("Seleccionar bacante?")
  }
  let iva = subTotal * 0.21
  let totalConIva = subTotal + iva
  return [subTotal, iva, totalConIva]
}

function mostrarCarrito(carrito, carritoPrecios, total, iva, subTotal) {
  if (carrito.length) {

    let mensaje = "Bacantes seleccionadas:\n\n"

    for (let i = 0; i < carrito.length; i++) {
      mensaje += carrito[i] + " - $" + carritoPrecios[i] + "\n"
    }

    mensaje += "\n-----------------\n\n"
    mensaje += "Total: $" + total + "\n"
    mensaje += "IVA incluido"

    alert(mensaje)

  } else {
    alert("No te pierdas la oportunidad de aprender con nosotros!!")
  }
}


saludarUsuario();
mostrarCursos(cursos, precios);
let compra = comprar(cursos, carrito, precios)
let subTotal = compra[0]
let iva = compra[1]
let totalFinal = compra[2]
mostrarCarrito(carrito, carritoPrecios, totalFinal, iva, subTotal);
console.log("Carrito", carrito);
console.log("Precios", carritoPrecios);
console.log("Total", totalFinal);