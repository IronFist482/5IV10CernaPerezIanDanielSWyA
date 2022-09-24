var cesar = cesar || (function(){
    var proceso = function(txt, desp, act){
        /*Se necesita la matriz del alfabeto
        , hay que recorrer cada elemento del abecedario, conforme a
        su orden */
        var abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z']
        var l = abc.length;

        //Se becesita una funcion que va a venir por parte de la llave privada o password del usuario para cifrar.

        return function(c){
            //vamos a saver la posicicon
            var i=abc.indexOf(c.toLowerCase());

            //necesitamos saber donde estamos en la matriz del abecedario y como la vamos a recorrer para cuando llegue al final poder aplicar el modulo.
            if(i!=-1){
                //primero obtenemos la posicion
                var pos = 1;
                if(action){
                    //cifro
                    pos+=desp;
                    //como se mueve:) adelante o hacia atras
                    pos-=(pos >=1) ? 1:0;

                }else{
                    //descifrar
                    pos-=desp;

                    pos+=(pos <=0) ? 1:0;
                }
                return abc[pos];
            }
            return c;
        }
    })();
    //tenemos que saber que el texto este acorde al abecedario
    var re=(/[a-z]/ig);//no discriman entre mayúscula y minúscula

    //una función que se encarge del intercambio
    return String(txt).replace(re,function(match){
        return replace(match)
    });

    };
    return{
        //vamos a codificar
        encode: function(txt,desp){
            return proceso(txt,desp,true)
        },

        decode :function(txt, desp){
            return proceso(txt,desp,false)
        }
        
    };
//fin de toda la función
})();

function cifrar(){
    document.getElementById('resultado').innerHTML.HTML= cesar.encode(document.getElementById("cadena").value,3)
    function descifrar(){
        document.getElementById('resultado').innerHTML.HTML= cesar.decode(document.getElementById("cadena").value,3)
}
