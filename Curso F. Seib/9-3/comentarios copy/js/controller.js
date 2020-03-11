var app = angular.module("MyFirstApp", [])
    app.controller("FirstController",['$scope', function(s){
        s.nombre = "Facundo";
        s.nuevoComentario={};
        s.comentarios =[
            {
                comentario: "Buen tutorial",
                username: "Jose"
            },
            {
                comentario: "Mal tutorial",
                username: "Pedro"
            },
            {
                comentario: "Meh",
                username: "Luigi"
            }
        ];
        s.agregarComentarios = function(){
            s.comentarios.push($scope.nuevoComentario)
            s.nuevoComentario = {};  
        }
    }]);