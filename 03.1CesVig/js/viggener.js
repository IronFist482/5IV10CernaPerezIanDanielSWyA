const abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];

//llave
let key ="";

//bienvenidos a interpretar código
$(document).ready(function(){
    //vamos a hacer una función para poder cifrar con viggener
    $('#ci').click(function(){

        /*
        para cifrar vamos a usar una función de modulo la cuál es 
        y= (x+z)mod27
        */
        
        //vamos a traer los datos de la llave
        key= document.getElementById('llave').value;
        //tenemos que verificar la llave
        key= key.replace(/ /g, '');

        //vamos a traer los datos del mensaje
        let mess= document.getElementById('mess').value;
        //tenemos que verificar la llave
        mess= mess.replace(/ /g, '');
        mess=correccionMayus(mess);

        let newMess="";
        let keyCompleta="";

        //para evitar el algoritmo debemos crear una función que se encarge de revisar las condiciones del mismo

        if(revision(mess, key)){

            //vamos primero por aplicar y obtener la posición de la longitud del mensaje y enmparejarlo contra la llave

            for(var i=0; i<mess.length;i++){
                //emparejo conforme a la posición del caracter obteniendo el número de dicha posición
                keyCompleta += key.charAt((i%Number(key.length)));
            }

            //tengo que volver a recorrer el mensaje para obtener caracteres y posiciones
            for (var i = 0; i < mess.length; i++) {
                let charr = mess.charAt(i);
                //Debemos crear una función para obtener la posición de ese caracter
                let posm =getPosicion(charr);

                //también aplicarlon a la llave
                charr=keyCompleta.charAt(i);
                //obtenemos la posición
                let posk=getPosicion(charr);

                //tenemos que ejecutar el cifrado
                let newValores=cifrar(posm, posk);

                newMess +=abc[newValores];
            }

            //imprimir el resultado
            document.getElementById('rs').innerHTML=newMess;
            
            
        }else{
            //no se cumple
            alert("No sirve, llevele :p");
        };
        
    });

    //descifrar
    $('#de').click(function(){

        /*
        para cifrar vamos a usar una función de modulo la cuál es 
        y= (x+z)mod26
        */
        
        //vamos a traer los datos de la llave
        key= document.getElementById('llave').value;
        //tenemos que verificar la llave
        key= key.replace(/ /g, '');

        //vamos a traer los datos del mensaje
        let mess= document.getElementById('mess').value;
        //tenemos que verificar la llave
        mess= mess.replace(/ /g, '');

        let newMess="";
        let keyCompleta="";

        //para evitar el algoritmo debemos crear una función que se encarge de revisar las condiciones del mismo

        if(revision(mess, key)){

            //vamos primero por aplicar y obtener la posición de la longitud del mensaje y enmparejarlo contra la llave

            for(var i=0; i<mess.length;i++){
                //emparejo conforme a la posición del caracter obteniendo el número de dicha posición
                keyCompleta += key.charAt((i%Number(key.length)));
            }

            //tengo que volver a recorrer el mensaje para obtener caracteres y posiciones
            for (var i = 0; i < mess.length; i++) {
                let charr = mess.charAt(i);
                //Debemos crear una función para obtener la posición de ese caracter
                let posm =getPosicion(charr);

                //también aplicar a la llave
                charr=keyCompleta.charAt(i);
                //obtenemos la posición
                let posk=getPosicion(charr);

                //tenemos que ejecutar el cifrado
                let newValores=descifrar(posm, posk);

                newMess +=abc[newValores];
                
            }

            document.getElementById('rs').innerHTML=newMess;
        }else{
            //no se cumple
            alert("No sirve, llevele :p");
        }

    });
});

//funcion de cambio o de cifrado
function cifrar(posm, posk){
    //tengo que aplicar la formula
    let y = (posm + posk)%27;
    return y;
}

//función de descifrado o descifrado
function descifrar(posm, posk){
    let val=0;
    if((posm-posk)>=0){
        //todo está bien wiii
        val= (posm-posk)%27;
    }
    else{
        val=(posm-posk+27)%27;
    }
    return val;
}

//función de la posición
function getPosicion(letra){
    let posicion=abc.indexOf(letra);
    return posicion;
}

//la función de la revisión
function revision(mess, desp){
    //primero hay que validar la entrada de los datos aparti de una expresión regular
    var expresion= /^([a-zñ?]+([]*[a-zñ?]?['-]?[a-zñ?]+)*)$/;

    var aceptado=true;

    //evaluar la expresión
    if(!expresion.test(mess)){
        alert("El texto que ingresó no ha sido aceptado, ingrese solo minusculas y evite números y simbolos");
        aceptado =false;
    }
    if(!expresion.test(desp)){
        alert("La clave ingresada es incorrecta, no cumple con las normas de solo minusculas y de no usar numeros o símbolos");
        aceptado =false;
    }
    if(desp.lenght>mess.length){
        alert("La clave no puede ser mayor que el mensaje");
        aceptado =false;
    }
    return aceptado;
}
function correccionMayus(mess){
    mess=mess.toLowerCase();
    return mess;
}