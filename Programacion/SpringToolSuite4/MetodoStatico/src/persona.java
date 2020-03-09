
public class persona {
	
	private int idPersona;
	private String nombre;
	private static int contadorPersonas;
	
	public persona(String nombre){
	this.idPersona = ++contadorPersonas;
	this.nombre=nombre;
	}
	
	 public int getIdPersona() {
		 return this.idPersona;
	 }
	 
//	 public void setIdPersona(int idPersona) {
//		 this.idPersona=idPersona;
//	 }
	 
	 public String getNombre() {
		 return this.nombre;
	 }
	 
	 public void setNombre(String nombre) {
		 this.nombre=nombre;
	 }
	 
	 public static int getContadorPersonas() {
		 return contadorPersonas;
	 }
	 
	 @Override
	 public String toString() {
		 return "la identificacion es "+idPersona+" nombre: "+nombre+" contador "+contadorPersonas+".";
	 }
}
