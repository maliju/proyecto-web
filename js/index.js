'use strict'

window.addEventListener('load', () => {
    var boton = document.getElementById("boton");

    boton.addEventListener("click",()=> {
        let numero = document.getElementById("txtNumero").value;

        if (isNaN(numero)){
           alert("FAVOR DIGITE UN NUMERO");
        }
        else{
            numero = parseInt(numero);
            let resultado = 0;
            resultado = factorial(numero);
            alert("El factorial de " + numero + " es " + resultado);
        }
        
        

    });
});

function factorial(num){
    if(num == 1){
        return 1
    }

    return num * factorial(num - 1);
    
}