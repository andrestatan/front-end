$(document).ready(function(){

var caja=$("#cuadroPrueba");

/* caja.mouseover(function(){
  $(this).css("border","green solid 1px").css("background","lightgrey")
}); 
caja.click(function(){
    $(this).css("padding","30px").css("border","red solid 1px")
})
caja.focus(function(){
    $(this).css("background","black").css("color","white")
})
caja.blur(function(){
    $(this).css("background","red").css("color","black")
})*/
caja.mouseup(function(){
    $(this).css("border-color","black")
})

caja.mousedown(function(){
    $(this).css("border-color","orange")
})
$(document).mousemove(function(){
    $("body").css("cursor","none");
    $("#sigueme").css("left",event.clientX);
    $("#sigueme").css("top",event.clientY);
})

});