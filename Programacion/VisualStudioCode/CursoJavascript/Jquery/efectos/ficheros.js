$(document).ready(function(){
   
var caja=$("#caja");
var mostrar=$("#mostrar");
var ocultar=$("#ocultar");

ocultar.click(function(){
    ocultar.hide("normal");
    mostrar.show("slow");
    caja.hide("normal");
});

mostrar.click(function(){
    if(ocultar.hide()){
        mostrar.hide("slow");
        ocultar.show("normal");
    }
   
    caja.show();
})

})