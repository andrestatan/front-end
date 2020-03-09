
public class metodoStatico {

	public static void main(String[] args) {
		
		persona persona= new persona("Juan");
		
		System.out.println(persona.toString());
		
		persona Persona= new persona("Lucia");
		
		System.out.println(Persona.toString());
		
		persona PErsona= new persona("Javier");
		
		System.out.println(PErsona.toString());
		System.out.println("El contador en general es "+persona.getContadorPersonas());
	}

}
