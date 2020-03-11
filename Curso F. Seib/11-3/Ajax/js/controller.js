var app = angular.module("MyFirstApp", [])
app.controller("FirstController", ['$scope', '$http',
    function ($scope, $http) {
        //Directiva http
        //API Rest
        $scope.posts = [];
        $scope.newPost = [];

        $http({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/posts'
        }).then(function (response) {
            console.log(response);
            $scope.posts = response.data;
        }, function (error) {
            console.log(error);
        });

        $scope.addPost = function(){
            $http({
                url:'https://jsonplaceholder.typicode.com/posts',
                method: 'POST',
                title: $scope.newPost.title,
                body: $scope.newPost.body,
                userId: 1
            }).then(function(data, status, headers, config){
                
            })
        }
    }

])