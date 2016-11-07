var app = angular.module("EthereumToDo", ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: 'apps/dashboard/views/dashboard.html',
            controller: 'DashboardCtrl'
        })
        .otherwise('/');
});
