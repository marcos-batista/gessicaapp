'use strict';
angular.module('yapp')
  .controller('ordemVendaViewCtrl', function($scope, $state, $filter, ordemVendas, ordemVendaAPI) {

    $scope.app = "ordemVendas";
	$scope.ordemVendas = ordemVendas.data;
    
	var init = function () {
	};

  $scope.excluirOrdemVenda = function(ordemVenda){
		ordemVendaAPI.excluirOrdemVenda(ordemVenda).then(function(){
			var index = $scope.ordemVendas.indexOf(ordemVenda);
			 $scope.ordemVendas.splice(index, 1);
		});
	}  

	$scope.ordenarPor = function (campo) {
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};

	
	init();

  });
