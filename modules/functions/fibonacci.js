const Fibonacci = (lim) =>{
    let a = 0;
    let b = 1;
    let c = 1;

    for (let i = 1; i <= lim; i++){
        console.log(a);
        a = b;
        b = c;
        c = a + b;
        console.log('registro nro.'+i);
    }
}

const retryDato = (lim) =>{
    alert('tipo de dato inválido. Vuelve a intentar');
        lim = prompt('ingrese un limite para la sucesión');
        validacionDeDato(lim);
}

const validacionDeDato= (lim) =>{
    let limite = prompt('ingrese un limite para la sucesión');

    if(!isNaN(limite)){
        Fibonacci(lim);
    }
    else{
        retryDato();        
    }
}

validacionDeDato();