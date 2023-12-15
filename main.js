//Correo y contraseña verificada 
const users = {
    'minigood@email.com': {'nombre': 'Juan Manuel', 'password': 'tengohambre', 'nCuenta': '2345432'},
    'bartolomeo@email.com': {'nombre': 'Bart', 'password': 'elbarto', 'nCuenta': '64762'},
    'pokemon@email.com': {'nombre': 'Alejandro', 'password': 'pikachu', 'nCuenta': '000001'},
}

const myButton1 = document.getElementById('idButton1');
const myButton2 = document.getElementById('idButton2');
const myButton3 = document.getElementById('idButton3');

myButton1.addEventListener("click", function(e){
    window.location.href = "index2.html"
    alert("¡Hola " + users['minigood@email.com']['nombre'] + ", encantado de verte!");
})
myButton2.addEventListener("click", function(e){
    window.location.href = "index2.html"
    alert("¡Hola " + users['bartolomeo@email.com']['nombre'] + ", encantado de verte!");
})
myButton3.addEventListener("click", function(e){
    window.location.href = "index2.html"
    alert("¡Hola " + users['pokemon@email.com']['nombre'] + ", encantado de verte!");
})