function FindEmpleado(){
    let empleados = ['Zero','Andres','Damián','Valeria','José','Danilo','Shicardo'];
    let pick = prompt('ingrese el numero de empleado');

    if (pick>empleados.length){
        alert('número de empleado inválido!');
        FindEmpleado();
    }
    else {
        alert(empleados[pick]);
    }
}
FindEmpleado();