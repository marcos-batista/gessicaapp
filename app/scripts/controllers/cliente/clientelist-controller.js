'use strict';
angular.module('yapp')
  .controller('ClienteViewCtrl', function($scope, $state, $filter, clientes, clienteAPI) {

    $scope.app = "Clientes";
	$scope.clientes = clientes.data;
    
	var init = function () {
	};

  $scope.excluirCliente = function(cliente){
		clienteAPI.excluirCliente(cliente).then(function(){
			var index = $scope.clientes.indexOf(cliente);
			$scope.clientes.splice(index, 1);
	 });
		
	}  

	$scope.ordenarPor = function (campo) {
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};

	
	init();

  });
