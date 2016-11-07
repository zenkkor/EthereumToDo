/*global angular*/
var app = angular.module('EthereumToDo');

app.controller("DashboardCtrl", function($scope) {

	var contract = ToDoList.deployed();
	var root_account = web3.eth.accounts[0];

	/*contract.getItemForIndex.call(0).then(function(item){
		console.log(item);
	});*/

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

	/**
	 * Addds an item to the blockchain
	 * @param item_name
	 */
	$scope.addItem = function(item_name)
	{
		if ( item_name != "")
		{
			var item_count = $scope.todoItems.length;

			contract.setItemForIndex(item_count, item_name, false).then(function(){

				var item = {
					"name": item_name,
					"status": false
				};

				$scope.todoItems.push(item);

			});

		}

	}
});
