
let texto = "Grandilocuentemente planteado, fantabulosidad longeva de aquel adoctrinado vendido servidor de los Españoles cuyo progenitor concibió ante Dios y el mundo como Francisco de Miranda...";
    
    function TextExplorer(){

        let letras = texto.split('');
        let resultado = "";
        let buscada = prompt('ingresa la letra a buscar');
        
        if(buscada.length>1){
            alert('longitud no admitida. Prueba ingresando una sola letra...');
            TextExplorer();
        }
        else{

            //TIPO DE SOLUCIÓN:RECORRE TODO EL STRING Y TE MUESTRA LA n CANTIDAD DE SIMBOLOS BUSCADOS PRESENTES EN EL TEXTO
            for (let i=0 ; i<letras.length; i++){
                if(letras[i]==buscada){
                    console.log('la letra '+buscada+' se encuentra en la posición '+i);
                }
            }

            //TIPO DE SOLUCION: VA RECORRIENDO EL STRING Y PARA EN EL SIMBOLO
            for (let i=0; i < letras.length; i++){
                //alert('Letra numero '+ letras[i])
                if (letras[i]== buscada){
                    console.log('Paré en la posición'+i);
                    break;
                }
            } 
            //TIPO DE SOLUCION: RECORRE TODO EL STRING Y TE MUESTRA EL TEXTO OMITIENDO EL SIMBOLO BUSCADO
            for (let i=0; i < letras.length; i++){
                if (letras[i]==buscada){
                    continue;
                }
                else{
                    resultado+= letras[i];
                }
            }
            alert(resultado);
        }
    }
    TextExplorer();