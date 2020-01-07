package Java;
import java.util.Scanner;

public class main {

public static void main(String[] args) {
		
		persona persona= new persona("juan",5000,false);
		
		System.out.println("El nombre de la persona es: "+persona.getNombre());
		
		persona.setNombre("Jhonnatan");
		
		System.out.println("El nombre de la persona es: "+persona.getNombre());
		System.out.println("el sueldo de la persona es: "+persona.getSueldo());
		System.out.println("la Persona fue borrada del sistema? "+persona.isEliminar());
		
	}

}
