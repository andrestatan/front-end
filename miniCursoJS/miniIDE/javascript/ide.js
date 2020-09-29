function visualizacion(){
    const campoTexto=document.getElementById("areaTexto");
    const campoVista= document.getElementById('vista');
    let texto= campoTexto.value;

    campoVista.srcdoc= texto
}