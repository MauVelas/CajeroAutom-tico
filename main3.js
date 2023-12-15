//Correo y contraseña verificada 
const users = [['minigood@email.com', 'Juan Manuel', '2', '200'],
               ['bartolomeo@email.com', 'Bart', 'elbarto', '290'],
               ['pokemon@email.com', 'Alejandro', 'pikachu', '67']]

document.getElementById('consulDinero').textContent = users[0][3];
let contador = 200;
const botonIngresar = document.getElementById('idIngresar');
const botonRetirar = document.getElementById('idRetirar');

botonIngresar.addEventListener("click", function(e){ 
    
    const montoIngresar = document.getElementById('ingresarDinero').valueAsNumber

    var segcuenta = contador + montoIngresar;
    console.log(segcuenta);
    
    document.getElementById('consulDinero').textContent = segcuenta;
})

botonRetirar.addEventListener("click", function(e){ 
    
    const montoRetirar = document.getElementById('retirarDinero').valueAsNumber

    var tercuenta = contador - montoRetirar;
    console.log(tercuenta);
    
    document.getElementById('consulDinero').textContent = tercuenta;
})