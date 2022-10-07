

function cifrar(){

}
function descifrar(){

}

var guardar = document.querySelector(".save-as"),
nombreArchivo = document.querySelector(".name-file");

var archivo =document.getElementById('mess'),
cifrado =document.getElementById('rs');

archivo.addEventListener('change',()=>{
    //Inicializo el lector del archivo

    var lector =new FileReader();
    lector.readAsText(archivo.files[0]);
    lector.onload =function(){

        document.getElementById('rs').innerHTML=lector.result;
        const texto=lector.result;
        guardar.addEventListener("click",() => {
            console.log(texto);
            var blob = new Blob([texto], { type: "text/plain;charset=utf-8" });
            var fileURL = URL.createObjectURL(blob),
            link = document.createElement("a");
            link.download = nombreArchivo.value;
            link.href = fileURL;
            link.click();
        })        
    }
})


