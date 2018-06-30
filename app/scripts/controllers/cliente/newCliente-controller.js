angular.module("yapp")
    .controller("newClienteCrtl", function ($scope, clienteAPI,$state) {

	$scope.adicionarCliente = function (cliente) {
		clienteAPI.saveCliente(cliente).success(function (data) {
            console.log(data);
			delete $scope.cliente;
			$state.go('clienteslist');

		});
	};
});