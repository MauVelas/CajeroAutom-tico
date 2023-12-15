//Correo y contraseña verificada 
const users = [['minigood@email.com', 'Juan Manuel', '2', '2345432'],
               ['bartolomeo@email.com', 'Bart', 'elbarto', '64762'],
               ['pokemon@email.com', 'Alejandro', 'pikachu', '000001']]

const logIn = document.getElementById('formulario')

logIn.addEventListener("submit", function(event){
    event.preventDefault();

    const email = document.getElementById("username").value
    const password = document.getElementById("password").value

    if(email === users[0][0] && password === users[0][2]){
        window.location.href = "index3.html"
    }
    if(email === users[1][0] && password === users[1][2]){
        window.location.href = "index4.html"
    }
    if(email === users[2][0] && password === users[2][2]){
        window.location.href = "index5.html"
    }
    else{
        const mensaje = document.createElement("p")
        mensaje.textContent = "Este correo electrónico no tiene el formato adecuado. Intentalo nuevamente"
        document.body.appendChild(mensaje)
    }
})