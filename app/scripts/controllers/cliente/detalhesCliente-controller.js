angular.module("yapp")
    .controller("detalhesClienteCtrl", function ($scope, cliente, clienteAPI,  $state) {

    $scope.cliente = cliente.data;
    

    $scope.editarCliente = function(cliente){
        clienteAPI.editarCliente(cliente).success(function (data) {
            $state.go('clienteslist');
		});
    }
});