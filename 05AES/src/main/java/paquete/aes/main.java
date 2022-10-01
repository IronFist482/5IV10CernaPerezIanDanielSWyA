/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package paquete.aes;

/**
 *
 * @author cerna
 */
public class main {
    public static void main(String[] args)throws Exception{
        String mensaje="Había una vez que había un patito que decía miau miau, que tenía mucho sueñito y quería mimir, pero era viernes y le iban a dejar tarea, así bien fea fea feota, de esas que te desvelan para entrar en modo reserva y porqué sigo existiendo Dios";
        String mensajeCifrado=AES.cifrar(mensaje);
        String mensajeDescifrado=AES.descifrar(mensajeCifrado);
        
        System.out.println("El mensaje a cifrar es: "+mensaje);
        System.out.println("El mensaje cifrado es:"+mensajeCifrado);
        System.out.println("El mensaje descifrado es:"+mensajeDescifrado);
    }
}
