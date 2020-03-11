var x = $(document);
x.ready(inicializaEventos);

function inicializaEventos(){
    var x = $("#boton1");
    x.click(presionBoton);
}

function presionBoton(){
    alert('Se presiono el boton')
}