angular.module("ToDoList", ["LocalStorageModule"])
    .controller("ToDoController", function ($scope, localStorageService) {
        if(localStorageService.get("angular-todoList")){
            $scope.todo= localStorageService.get("angular-todoList");
        }
        else{
            $scope.todo = [];
        }
        $scope.todo = [];
        $scope.addActv = function () {
            $scope.todo.push($scope.newActv);
            $scope.newActv = {};
            localStorageService.set("angular-todoList", $scope.todo);
        }
    });