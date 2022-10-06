


var cesar =cesar || (function(){
    var proceso= function(txt,desp,action){

        var replace=(function(){

        //Primero necesito una matriz del abecedario
        
        var abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
        var l = abc.length;
        //Necesitamos una función que pueda obtener la posición que va a venir por parte de la clave privada o desplazamiento
        return function(c){
            //Necesitamos saber la posición
            var i=abc.indexOf(c.toLowerCase());

            
            console.log(i);
            console.log(desp);

            //Necesitamos saber donde estamos dentro de la matriz abc y como la vamos a recorrer para el momento del cifrado
            if(i=!-1){
                //primero obtenemos la posición para el desplazamiento
                var pos=i;

                //necesito saber la operación a realizar
                if(action){
                    //cifrar hacia adelante
                    if((pos+desp)>25){
                        pos=(pos+desp)-26;
                        if((pos+desp)>25){
                            pos=pos-26;
                        }
                    }

                    pos+=desp;
                    //definir cómo se va a mover
                    pos-=(pos>=l)?1:0;
                    console.log(pos);
                }else{
                    //descifra para atrás
                    if((pos-desp)<0){
                        pos=(pos-desp)+26;
                        if((pos-desp)<0){
                            pos=pos+26;
                        }
                    }
                    pos-=desp;
                    //movimiento
                    pos+=(pos<0)?1:0;
                    console.log(pos);
                }
                return abc[pos];
            }
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
            return proceso(txt, desp, false);
        }
        
    };


})();

function cifrar(){
    var desplazamientos=document.getElementById("desp").value;
    desplazamientos=parseInt(desplazamientos);

    if(desplazamientos<=26&&desplazamientos>0){
        document.getElementById("resultado").innerHTML =cesar.encode(document.getElementById("cadena").value, desplazamientos);
    }else{
        alert("No pongas deplazamientos mayores a 26 ni menores a 1");
        alert("miau miau :3");
    }
}
function descifrar(){
    var desplazamientos=document.getElementById("desp").value;
    desplazamientos=parseInt(desplazamientos);

    if(desplazamientos<=26&&desplazamientos>0){
        document.getElementById("resultado").innerHTML =cesar.decode(document.getElementById("cadena").value, desplazamientos);
    }else{
        alert("No pongas deplazamientos mayores a 26 ni menores a 1");
        alert("miau miau :3");
    }
    
}