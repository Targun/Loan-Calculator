var app = angular.module('LoanCalculator');

app.controller('mainCtrl', function($scope, bankService){
	bankService.getInterest().then(function(ir){
		$scope.interest_rate = ir;
	});

	$scope.calculatePayment = function(){
		$scope.monthly_payment = (($scope.principal + ($scope.principal * ($scope.interest_rate / 100)) * 4)/48).toFixed(2);
	}
});