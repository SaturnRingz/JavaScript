//haz tus practicas aquí y después modularizas las soluciones

numero= prompt('ingresa el numero para calcular su factorial')

function CalcularFactorial(n){
    ValidarMinimo(n);
    ValidarMaximo(n);
    if(ValidarCalculoFactorial){
        let calculation = n * CalcularFactorial(n-1);
    return calculation;
    }
    
}

function ValidarMinimo(n){
    if ((n == 0) || (n == 1)){
        return true;
    }
    else if (n < 0){
        return false;
    }
}

/*function ValidarMinimo(n){

    if ((n == 0) || (n == 1)){
        return true;
    }
    else if ((n > 1) && (n < 26)){
        return true;
    }
    else {
        alert('Número inválido. El número debe estar entre 2 y 25.')
        return false;
    }
}*/

console.log(CalcularFactorial(numero));