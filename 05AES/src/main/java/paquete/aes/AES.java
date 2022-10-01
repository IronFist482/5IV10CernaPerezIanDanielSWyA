/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package paquete.aes;
import java.security.*;
import javax.crypto.*;
import javax.crypto.spec.SecretKeySpec;
//para poder generar una clave secreta de mayor longitud
//longitud

import sun.misc.*;

/**
 *
 * @author cerna
 */
public class AES {
    //vamos a generar una llave
    
    public static final byte[] keyvalue= new byte[]{
        /*
        puede ser de 3 tamaños
        128 -> 16 caracteres 9 rondas
        192 -> 24 caracteres 11 rondas
        256 -> 32 caracteres 13 rondas
        */
        'q','w','e','r','t','y','u','i',
        'q','w','e','r','t','y','u','i',
        'q','w','e','r','t','y','u','i',
        'q','w','e','r','t','y','u','i'
        
    };
    
    //vamos a crear los métodos para cifrar
    
    private static final String instancia="AES";
    
    public static String cifrar(String Data) throws Exception{
        /*para poder cifrar debemos de generar las llaves,
        pero vamos a crear un método para esa generación de subllaves
        */
        //vamos a ocupar un objeto Key
        Key llave=generarLlave();
        
        //inicializamos el cifrado
        Cipher cifrado= Cipher.getInstance(instancia);
        
        cifrado.init(Cipher.ENCRYPT_MODE, llave);
        //vamos a obtener el mensaje y hay que transformarlo en bytes
        byte[] encValores=cifrado.doFinal(Data.getBytes());
        
        //tenemos un problema, lo cuál es el formato para poder leerlo
        //tenemos que aplicar un formato BASE64
        System.out.println("Valores sin formato: "+encValores);
        
        //aplicamos formato
        String valoresEncriptados = new BASE64Encoder().encode(encValores);
        System.out.println("Valores con formato: "+valoresEncriptados);
        return valoresEncriptados;
    }
    
    public static String descifrar(String valoresEncriptados) throws Exception{
        /*para poder cifrar debemos de generar las llaves,
        pero vamos a crear un método para esa generación de subllaves
        */
        //vamos a ocupar un objeto Key
        Key llave=generarLlave();
        
        //inicializamos el cifrado
        Cipher descifrado= Cipher.getInstance(instancia);
        
        descifrado.init(Cipher.DECRYPT_MODE, llave);
        //vamos a obtener el mensaje y hay que decodificarlo en bytes
        byte[] decodificadosValores=new BASE64Decoder().decodeBuffer(valoresEncriptados);
        
        //aqui hay que transformarlos
        byte [] decValores =descifrado.doFinal(decodificadosValores);
        
        
        System.out.println("Valores sin formato: "+decValores);
        
        String valoresDescifrados=new String (decValores);
        
        System.out.println("Valores  con formato: "+valoresDescifrados);
        
        return valoresDescifrados;
    }

    private static Key generarLlave() {
        /*vamos a usar las llaves de ars de acuerdo a la clase SecretKeySpec esta nos genera
        todas las subllaves de ronda
        */
        
        Key llave =new SecretKeySpec(keyvalue, instancia);
        return llave;
    }
}
