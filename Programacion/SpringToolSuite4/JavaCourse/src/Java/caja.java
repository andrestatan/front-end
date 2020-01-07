package Java;

public class caja {

	private int alto;
	private int profundo;
	private int ancho;
	private int volumen;
	
	//ancho, alto, profundo
	
	public caja(int alto, int profundo, int ancho) {
		this.alto=alto;
		this.profundo=profundo;
		this.ancho=ancho;
	}
	
	public int getAlto() {
		return alto;
	}
	
	public void setAlto(int alto) {
		this.alto=alto;
	}
	
	public int getProfundo() {
		return profundo;
	}
	
	public void setProfundo(int profundo) {
		this.profundo=profundo;
	}
	
	public int getAncho() {
		return ancho;
	}
	
	public void setAncho(int ancho) {
		this.ancho=ancho;
	}
	
	public int getVolumen() {
		volumen=ancho*alto*profundo;
		
		return volumen;
	}
		
}
