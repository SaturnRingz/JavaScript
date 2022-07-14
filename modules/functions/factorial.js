numero= prompt('ingresa el numero para calcular su factorial')

function CalcularFactorial(n){
    if((n == 0) || (n == 1)){
        return 1;
    }
    else if (n >= 25){
        alert('el número es demasiado grande. ntenta con valores entre 2 y 25...');
        numero=prompt('ingresa el número para calcular su factorial (entre 2 y 25)');
        CalcularFactorial(numero)
    }
    else{
        return(n * CalcularFactorial(n-1))
    }
    console.log(CalcularFactorial(numero));
}

CalcularFactorial(numero);