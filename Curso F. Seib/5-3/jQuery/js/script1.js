$(document).ready(function(){
    //Evento click agregando clase
    $('#boton1').click(function(){
        $('#contenido').addClass('text-center');
    });

    //Evento click agregando estilo
    $('#boton2').click(function(){
        $('#contenido').css('color', 'salmon')
    });

    //Alternativa del evento click
    $('#boton3').on('click', function(){
        $('#contenido h2').toggleClass('display-4')
    })

    //.addClass .removeClass .append .toggleClass .CSS .remove
})