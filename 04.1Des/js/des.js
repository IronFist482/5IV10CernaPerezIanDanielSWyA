

function cifrar(){

}
function descifrar(){

}

function guardarArchivo() {

    var texto = document.getElementById("rs").value;
    
    var blob = new Blob([texto], { type: "text/plain;charset=utf-8" });
    FileSaver(blob, "cifrado.txt");
}

let archivo =document.getElementById('mess');

let cifrado =document.getElementById('rs');

archivo.addEventListener('change',()=>{
    //Inicializo el lector del archivo

    let lector =new FileReader();

    lector.readAsText(archivo.files[0]);

    lector.onload =function(){
        document.getElementById('rs').innerHTML=lector.result;
    }
})
