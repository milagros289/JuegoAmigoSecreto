// Declarar el array fuera de la función para mantener la lista de amigos
let amigoNombre = [];

function agregarAmigo(){
    const nuevoAmigo = document.getElementById("amigo").value.trim();
    if (nuevoAmigo.length > 0) {
        amigoNombre.push(nuevoAmigo);
        document.getElementById("listaAmigos").innerHTML = amigoNombre.join(" <br> ");
    }else if (nuevoAmigo.length === 0) {
        alert("Por favor, ingresa un nombre válido.");
    }
    document.getElementById("amigo").value = ""; // Limpiar el campo de entrada
}

function sortearAmigo(){
    if (amigoNombre.length === 0) {
        alert("No hay amigos para sortear.");
        document.getElementById("resultado").innerHTML =null;
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * amigoNombre.length);
    const resultado = amigoNombre[indiceAleatorio];
    document.getElementById("resultado").innerHTML = "Amigo sorteado: " + resultado;
    amigoNombre.splice(indiceAleatorio, 1); // Eliminar el amigo sorteado de la lista
    document.getElementById("listaAmigos").innerHTML = amigoNombre.join(" <br> ");
}