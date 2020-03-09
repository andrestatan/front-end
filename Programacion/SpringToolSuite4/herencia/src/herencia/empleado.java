package herencia;

public class empleado extends persona{

	private int idEmpleado;
	private double sueldo;
	
	public empleado(String nombre) {
		super(nombre);
	}
	
	public void Empleado(int idEmpleado, double sueldo) {
		this.idEmpleado=idEmpleado;
		this.sueldo=sueldo;
	}
	
	
	public int getEmpleado () {
	return this.idEmpleado;	
	}
	
	public double getSueldo() {
		return this.sueldo;
	}
	
	public void setSueldo(double sueldo) {
		this.sueldo=sueldo;
	}

}
