/*global angular*/
var app = angular.module('EthereumToDo');

app.controller("DashboardCtrl", function($scope) {

	var contract 		= ToDoList.deployed();
	var root_account 	= web3.eth.accounts[0];
	var base_trx_object = {"from": root_account};

	$scope.todoItems = [];

	contract.returnNumItems.call().then(function(numItems){
		var numItems = numItems.toNumber();

		for (var i = 0; i < numItems; i++)
		{
			contract.getItemForIndex.call(i).then(function(item){

				var item = {
					"name":item[0],
					"state": item[1]
				};

				// Push to array
				$scope.todoItems.push(item);
				$scope.$apply();
			});
		}

		return this;

	});

	/**
	 * Changes state for a single item at index
	 * @param item
	 * @param $index
	 */
	$scope.changedState = function(item, $index) {

		var state = item.state;

		contract.setStateForItemAtIndex($index, state, base_trx_object).then(function(success){

		});
	}

	/**
	 * Addds an item to the blockchain
	 * @param item_name
	 */
	$scope.addItem = function(item_name)
	{
		if ( !(typeof item_name == 'undefined') && item_name != "")
		{
			var item_count = $scope.todoItems.length;

			contract.setItemForIndex(item_count, item_name, false, base_trx_object).then(function(success){

				var item = {
					"name": item_name,
					"state": false
				};

				$scope.todoItems.push(item);
				$scope.$apply();
			});

		}

	}
});
