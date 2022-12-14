var guardar = document.querySelector(".save-as"),
  nombreArchivo = document.querySelector(".name-file");

var archivo = document.getElementById("mess"),
  cifrado = document.getElementById("rs");

archivo.addEventListener("change", () => {
  //Inicializo el lector del archivo

  var lector = new FileReader();
  lector.readAsText(archivo.files[0]);
  lector.onload = function () {
    document.getElementById("rs").innerHTML = lector.result;
    var texto = lector.result;
    $("#ci").click(function () {
      //vamos a traer los datos del mensaje
      let password = document.getElementById("llave").value;
      //tenemos que verificar la llave
      password = password.replace(/ /g, "");
      let tipoCifrado = document.querySelector('input[name="tipo"]:checked').value
      //para evitar el algoritmo debemos crear una función que se encarge de revisar las condiciones del mismo

      if (revision(texto, password,tipoCifrado)) {

        texto = cifrar(texto, password);
        //imprimir el resultado
        document.getElementById("rs").innerHTML = texto;
      } else {
        //no se cumple
        alert("No sirve, llevele :p");
      }
    });
    $("#de").click(function () {
      //vamos a traer los datos del mensaje
      let password = document.getElementById("llave").value;
      //tenemos que verificar la llave
      password = password.replace(/ /g, "");
      let tipoCifrado = document.querySelector('input[name="tipo"]:checked').value
      //para evitar el algoritmo debemos crear una función que se encarge de revisar las condiciones del mismo
      
      if (revision(texto, password,tipoCifrado)) {
        texto = descifrar(texto, password);

        //imprimir el resultado
        document.getElementById("rs").innerHTML = texto;
      } else {
        //no se cumple
        alert("No sirve, llevele :p");
      }
    });

    guardar.addEventListener("click", () => {
      console.log(texto);
      var blob = new Blob([texto], { type: "text/plain;charset=utf-8" });
      var fileURL = URL.createObjectURL(blob),
        link = document.createElement("a");
      link.download = nombreArchivo.value;
      link.href = fileURL;
      link.click();
    });
  };
});
//la función de la revisión
function revision(texto, password, tipoCifrado) {
  //primero hay que validar la entrada de los datos aparti de una expresión regular
  var aceptado = true;

  //evaluar la expresión

  if(tipoCifrado=="128"){
    if(password.length!=16){
      aceptado = false;
      alert("Pon una clave de 16 dígitos");
    }
  }
  if(tipoCifrado=="192"){
    if(password.length!=24){
      aceptado = false;
      alert("Pon una clave de 24 dígitos");
    }
  }
  if(tipoCifrado=="256"){
    if(password.length!=32){
      aceptado = false;
      alert("Pon una clave de 32 dígitos");
    }
  }

  if (texto == "") {
    alert("Primero ingrese texto");
    aceptado = false;
  }
  return aceptado;
}
function cifrar(texto, password) {
  var cifrado = "";
  console.log(texto)
  cifrado = CryptoJS.AES.encrypt(texto, password);
  return cifrado;
}
function descifrar(texto, password) {
  console.log(texto)
  var descifrado = "";
  descifrado = CryptoJS.AES.decrypt(texto, password);
  console.log(descifrado)
  var textoDescifrado = descifrado.toString(CryptoJS.enc.Utf8);
  return textoDescifrado;
}

