var app = angular.module('nodeRocks', []);

app.controller('MainController', MainController);

function MainController(authService){
	var vm = this;
	vm.test = "Hey You";
	
	vm.register = function(){
		authService.register(vm.newUser);
	}
}

app.service('authService', function($http){
	this.register = function(user){
		return $http({
			method: 'POST',
			url: '/users',
			data: user
		}).then(function(res){
			debugger;
		});
	}
})
