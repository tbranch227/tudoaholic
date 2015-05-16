/**
 * Created by tbranch on 5/16/15.
 * from the tutorial https://scotch.io/tutorials/creating-a-single-page-todo-app-with-node-and-angular
 */

var scotchTodo = angular.module('scotchTodo', [])

function mainController($scope, $http) {
    $scope.formData = {}

    // when loading on the pagfe, get all todos and show them
    $http.get('/api/todos')
        .success(function (data) {
            $scope.todos = data
            console.log(data)
        })
        .error(function (data) {
            console.log('Error:' + data)
        })

    // when submitting the add form, send the text to the node API
    $scope.createTodo = function() {
        $http.post('/api/todos', $scope.formData)
            .success(function(data) {
                $scope.formData = {} // clear the form for a new entry
                $scope.todos = data
                console.log(data)
            })
            .error(function(data) {
                console.log('Error: '+data)
            })
    }

    $scope.deleteTodo = function(id) {
        $http.delete('/api/todos/' + id)
            .success(function(data) {
                $scope.todos = data
                console.log(data)
            })
            .error(function(data) {
                console.log('Error: ' + data)
            })
    }

} // end mainController


