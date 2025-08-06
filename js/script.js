let numero = "";

let pantalla = document.getElementById("pantalla");

function actualizaCifra(cifra){
    numero = numero+cifra;
    pantalla.innerHTML = numero;

}

let uno = document.getElementById("uno");
uno.addEventListener("click",actualizaCifra("1"));

