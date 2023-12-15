let contador = 67;
const botonIngresar = document.getElementById('idIngresar');
const botonRetirar = document.getElementById('idRetirar');

document.getElementById('consulDinero').textContent = contador;

botonIngresar.addEventListener("click", function(e){ 
    if(contador<990){
    const montoIngresar = document.getElementById('ingresarDinero').valueAsNumber

    let segcuenta = contador + montoIngresar;
    
    document.getElementById('consulDinero').textContent = segcuenta;

    contador = segcuenta;
    }else{
        alert("No puede superar los $990");
    }
})

botonRetirar.addEventListener("click", function(e){ 
    if(contador>10){
    const montoRetirar = document.getElementById('retirarDinero').valueAsNumber

    var tercuenta = contador - montoRetirar;
    
    document.getElementById('consulDinero').textContent = tercuenta;

    contador = tercuenta
    }else{
        alert("Debe conservar al menos $10");
    }
})