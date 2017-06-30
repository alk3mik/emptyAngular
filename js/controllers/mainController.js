// MAIN CONTROLLER
"use strict";

function mainController($scope) {
	$scope.person = [];
	$scope.nom = 'Kim';
	$scope.prenom = 'Gordon';
	$scope.email = 'kim.gordon@gmail.com';
    $scope.submit = function() {
    	if ($scope.nom && $scope.prenom && $scope.email) {

    		$scope.person.push({ 'nom': $scope.nom,
    							 'prenom': $scope.prenom,
    							 'email': $scope.email
    							});
    		// console.log(this.nom, $scope.person, $scope.nom);
    		$scope.nom = '';
    		$scope.prenom = '';
    		$scope.email = '';
        }
    }
}
//     };
// 	// var vm = this;
// 	// vm.title = 'Customers';
// 	// vm.customers = [
//  //    	{name: 'Haley'},
//  //    	{name: 'Ella'},
//  //    	{name: 'Landon'},
//  //    	{name: 'John'}
//  //    ];   
// }