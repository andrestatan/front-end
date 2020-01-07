package Java;

public class persona {
	 
	private String nombre;
	private double sueldo;
	private boolean eliminado;
	
	public persona(String nombre,double sueldo, boolean eliminado) {
		this.nombre=nombre;
		this.sueldo=sueldo;
		this.eliminado=eliminado;
	}
	
	//get: obtener set:modificar
	public String getNombre() {
		return nombre;
	}
	
	public void setNombre(String nombre) {
		this.nombre=nombre;
	}
	
	public double getSueldo() {
		return sueldo;
	}
	
	public void setSueldo(double sueldo) {
		this.sueldo=sueldo;
	}
	
	public boolean isEliminar() {
		return eliminado;
	}
	
	public void setEliminar(boolean eliminado) {
		this.eliminado=eliminado;
	}
}
