'use strict';
angular.module('yapp')
  .controller('produtoViewCtrl', function($scope, $state, $filter, produtos, produtoAPI) {

    $scope.app = "produtos";
	$scope.produtos = produtos.data;
    
	var init = function () {
	};

  $scope.excluirProduto = function(produto){
		produtoAPI.excluirProduto(produto).then(function(){
			var index = $scope.produtos.indexOf(produto);
			 $scope.produtos.splice(index, 1);
		});
	}  

	$scope.ordenarPor = function (campo) {
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};

	
	init();

  });
