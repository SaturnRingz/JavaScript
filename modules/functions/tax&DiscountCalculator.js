let descuento = 15;
let precio = prompt('ingrese el precio del producto, por favor');

const calcularIVA = (pcio) => pcio*1.21;
const calcularPrecioConDescuento = (pcio, desc) => (pcio-(pcio*desc)/100);

let precioConIVA = calcularIVA(precio);
let precioConDescuento = calcularPrecioConDescuento(precio, descuento);

MostrarResultado(precioConIVA);
MostrarResultado(precioConDescuento);

function MostrarResultado(pcio){
    if (pcio==precioConIVA){
        console.log('precio con IVA: $'+precioConIVA);
    }
    else{
        console.log('precio con descuento: $'+precioConDescuento)
    }
}