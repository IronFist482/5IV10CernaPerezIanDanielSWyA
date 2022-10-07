var mensaje = "Había una vez, otro patito que decía miau miau y que quería dormir todo el día, pero no lo dejaban, entonces chillaba, entonces tronaba gennte wiiiii";
var password = "qwertuiopasdfgh";

//ahora vamos a cifrar

var cifrado=CryptoJS.AES.encrypt(mensaje,password);

//ahora vamos a descifrar

var descifrado=CryptoJS.AES.decrypt(cifrado,password);

//uf que largo

document.getElementById('iron00').innerHTML=mensaje;
document.getElementById('iron01').innerHTML=cifrado;
document.getElementById('iron02').innerHTML=descifrado;
document.getElementById('iron03').innerHTML=descifrado.toString(CryptoJS.enc.Utf8);