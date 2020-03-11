var app = angular.module("MyFirstApp", [])
    app.controller("FirstController", function($scope){
        $scope.nombre = "Facundo";
        $scope.nuevoComentario={};
        $scope.comentarios =[
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
        $scope.agregarComentarios = function(){
            if($scope.nuevoComentario.comentario == "" || $scope.nuevoComentario.username == ""){

            }
            else{
              $scope.comentarios.push($scope.nuevoComentario)
            $scope.nuevoComentario = {};  
            }
            
        }
    });