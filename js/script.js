let numero = "";

let pantalla = document.getElementById("pantalla");
let operando1, operando2;
let operacion = "";



function actualizaCifra(cifra){
    if(cifra === "B"){
        numero="";
        pantalla.innerText="0";

    }
    else{
    numero = numero+cifra;
    pantalla.innerText = numero;
    }    
};

let botones = Array.from(document.getElementsByTagName("td"));


    
    botones.forEach(boton => {
        boton.addEventListener("click", ()=>{
            const valor = boton.innerHTML;
            if(!isNaN(valor) || (isNaN(valor)&& valor===",") ){
                if(numero.length <=14) {
                actualizaCifra(valor);
                }
            }

        });
    });

let borrar = document.getElementById("borrar");
let suma = document.getElementById("suma");
let resta = document.getElementById("resta");
let multiplicacion = document.getElementById("division");
let igual = document.getElementById("igual");

borrar.addEventListener("click", ()=>{
    actualizaCifra("B");
})

suma.addEventListener("click", ()=>{
    operando1 = null;
        console.log("apreto suma");
        console.log( "numero " + numero);
        console.log( "operando1 " + operando1);
        console.log( "operando2 "  + operando2);
    operacion = "suma";
    operando1 = parseFloat(numero.replace(",","."));
     console.log("previo a usar funcion");
        console.log( "numero " + numero);
        console.log( "operando1 " + operando1);
        console.log( "operando2 "  + operando2);

    actualizaCifra("B");
     console.log("post funcion");
        console.log( "numero " + numero);
        console.log( "operando1 " + operando1);
        console.log( "operando2 "  + operando2);
})

resta.addEventListener("click", ()=>{
    operando1 = null;
    operacion = "resta";
    operando1 = parseFloat(numero.replace(",","."))
    actualizaCifra("B");
})
multiplicacion.addEventListener("click", ()=>{
    operando1 = null;
    operacion = "multiplicacion";
    operando1 = parseFloat(numero.replace(",","."))
    actualizaCifra("B");
})
division.addEventListener("click", ()=>{
    operando1 = null;
    operacion = "division";
    operando1 = parseFloat(numero.replace(",","."))
    actualizaCifra("B");
})

igual.addEventListener("click", ()=>{
    realizarOperacion();
})


function realizarOperacion(){
    operando2 = null;
    operando2= parseFloat(numero.replace(",","."))
    console.log("realizarOperacion");
    console.log( "numero " + numero);
     console.log( "operando1 " + operando1);
      console.log( "operando2 "  + operando2);
    
    
    if(operando1 != null && operacion =="suma"){

         console.log("dentro de suma");
        console.log( "numero " + numero);
        console.log( "operando1 " + operando1);
        console.log( "operando2 "  + operando2);
    
        numero = operando1 + operando2;
        pantalla.innerText= numero;
        console.log(numero);
    }
    if(operando1 != null && operacion =="resta"){
    
        numero = operando1 - operando2;
        pantalla.innerText=numero;
    }
    if(operando1 != null && operacion =="division"){
    
        numero = operando1 / operando2;
        pantalla.innerText=numero;
    }
    if(operando1 != null && operacion =="multiplicacion"){
    
        numero = operando1 * operando2;
        pantalla.innerText=numero;
    }




    
}




