package herencia;

import java.util.Date;

public class Cliente extends empleado{

	private int idCliente;
	private Date fechaRegistro;
	private boolean vip;
	
	public Cliente(String nombre) {
		super(nombre);
	}
	
	public void Cliente(int idCliente, Date fechaRegistro, boolean vip) {
		this.idCliente=idCliente;
		this.fechaRegistro=fechaRegistro;
		this.vip=vip;
		
	}

	public boolean isVip() {
		return vip;
	}

	public void setVip(boolean vip) {
		this.vip = vip;
	}

	public int getIdCliente() {
		return idCliente;
	}

	public void setIdCliente(int idCliente) {
		this.idCliente = idCliente;
	}

	public Date getFechaRegistro() {
		return fechaRegistro;
	}

	public void setFechaRegistro(Date fechaRegistro) {
		this.fechaRegistro = fechaRegistro;
	}
	
	
	

}
