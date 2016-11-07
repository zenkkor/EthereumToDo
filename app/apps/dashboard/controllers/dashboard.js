/*global angular*/
var app = angular.module('EthereumToDo');

app.controller("DashboardCtrl", function($scope) {

	var contract = ToDoList.deployed();

	$scope.todoItems = [
		{
			"name":"Wash Laundry",
			"status": false
		},
		{
			"name":"Wash Dishes",
			"status": true
		},
		{
			"name":"Take Out Trash",
			"status": false
		},
	];

});
