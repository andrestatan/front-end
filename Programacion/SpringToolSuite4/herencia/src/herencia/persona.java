package herencia;

public class persona {

	private String nombre;
	private int edad;
	private String direccion;
	private char genero;
	
	public persona() {
		
	}
	
	public persona(String nombre) {
		this.nombre=nombre;
	}
	
	public persona(String nombre,int edad, String direccion, char genero){
		this.nombre=nombre;
		this.edad=edad;
		this.direccion=direccion;
		this.genero=genero;
	}
	
	public void getNombre(String nombre) {
		this.nombre=nombre;
	}
	
	public String setNombre() {
		return nombre;
	}
	
	public void getEdad(int edad) {
		this.edad=edad;
	}
	
	public int setEdad() {
		return edad;
	}
	
	public void getDireccion(String direccion) {
		this.direccion=direccion;
	}
	
	public String setDireccion() {
		return direccion;
	}
	
	public void getGenero(char genero) {
		this.genero=genero;
	}
	
	public char setGenero() {
		return genero;
	}
	
	
}
