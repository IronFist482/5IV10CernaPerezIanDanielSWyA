

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import static org.junit.Assert.*;

import calculadora.Operaciones;
import org.junit.Test;

/**
 *
 * @author cerna
 */
public class PruebasUnitarias {
    
    Operaciones op=new Operaciones();

    // TODO add test methods here.
    // The methods must be annotated with annotation @Test. For example:
    //
    @Test
    public void testSuma() {
        int resultado = op.suma(2,2);
        int esperado = 4;
        assertEquals(esperado,resultado);
        System.out.println("Está bien el método suma");
    }
    
    @Test
    public void testResta() {
        int resultado = op.resta(2,2);
        int esperado = 0;
        assertEquals(esperado,resultado);
        System.out.println("Está bien el método resta");
    }
    
    @Test
    public void testMulti() {
        int resultado = op.multiplicacion(2,2);
        int esperado = 4;
        assertEquals(esperado,resultado);
        System.out.println("Está bien el método multiplicación");
    }
    
    @Test
    public void testDiv() {
        int resultado = op.division(2,2);
        int esperado = 1;
        assertEquals(esperado,resultado);
        System.out.println("Está bien el método división");
        
    }
}
