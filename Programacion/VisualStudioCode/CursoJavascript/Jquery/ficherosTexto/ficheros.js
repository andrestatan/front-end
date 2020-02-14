$(document).ready(function(){
    var insertar=$("#agregar")
    var aceptar=$("#insertar")

    reloadlinks();
    aceptar.click(function(){
        $("#menu").after("<li><a href='"+insertar.val()+"'>nombrePrueba</a></li>");
        //$("#menu").before("<li><a href='"+insertar.val()+"'>nombrePrueba</a></li>");
        //$("#menu").prepend("<li><a href='"+insertar.val()+"'>nombrePrueba</a></li>");
        //$("#menu").append("<li><a href='"+insertar.val()+"'>nombrePrueba</a></li>");
        //$("#menu").html("<li><a href='"+insertar.val()+"'>nombrePrueba</a></li>");
    })

    function reloadlinks(){
    $("a").each(function(index){
        var este=$(this)
        var enlace= $(this).attr("href");

        este.attr("target","_blank");
        //removeAttr sirve para remover un atributo del codgio HTML
        este.removeAttr()
        este.text(enlace);
    });
    }
  

})