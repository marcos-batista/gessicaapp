angular.module("yapp")
    .controller("novoContatoCtrl", function ($scope, contatosAPI, $location) {

	$scope.adicionarContato = function (contato) {
		contatosAPI.saveContato(contato).success(function (data) {
			delete $scope.contato;
	
		});
	};
});