/*Vamos a crear una funcion recursiva que se encarge de llamar a una función como un objeto en caso de que no se pueda ejecutar*/

var cesar =cesar || (function(){
    var proceso= function(txt,desp,action){
        var replace=(function(){

        //Primero necesito una matriz del abecedario
        
        var abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];
        var l = abc.length;

        //Necesitamos una función que pueda obtener la posición que va a venir por parte de la clave privada o desplazamiento
        return function(c){
            //Necesitamos saber la posición
            var i=abc.indexOf(c.toLowerCase());

            //Necesitamos saber donde estamos dentro de la matriz abc y como la vamos a recorrer para el momento del cifrado
            if(i!=-1){
                //primero obtenemos la posición para el desplazamiento
                var pos=i;

                //necesito saber la operación a realizar
                if(action){
                    //cifrar hacia adelante
                    pos+=desp;
                    //definir cómo se va a mover
                    pos-=(pos>=l)?1:0;
                }else{
                    //descifra para atrás
                    pos-=desp;
                    //movimiento
                    pos+=(pos>0)?1:0;
                }
                return abc[pos];
            }
            return c;

        };
    })();
    //tenemos que saber que el texto este acorde al abc

    var re=(/([a-z])/ig);

    //una función que se encarge de intercambio de las posiciones acorde a si coincide el texto a cifrar con la expresion regular

    return String(txt).replace(re,function(match){
        return replace(match);
    });

    };
    return{
        encode : function(txt,desp){
            return proceso(txt, desp, true);
        },
        decode : function(txt,desp){
            return proceso(txt,desp,false);
        }
        
    };


})();

function cifrar(){
    document.getElementById("resultado").innerHTML =cesar.encode(document.getElementById("cadena").ariaValue,3)
}
function descifrar(){
    document.getElementById("resultado").innerHTML =cesar.decode(document.getElementById("cadena").ariaValue,3)
}