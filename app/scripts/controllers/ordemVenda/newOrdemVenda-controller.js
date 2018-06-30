angular.module("yapp")
    .controller("newOrdemVendaCrtl", function ($scope, ordemVendaAPI, $state, produtos, clientes) {
		
		$scope.clientes = clientes.data;
		$scope.produtos =  produtos.data;	
		$scope.listProdutos  = [];
		var listItens = [];

	$scope.adicionarordemVenda = function (ordemVenda) {
		ordemVenda.itens = listItens;
		console.log(ordemVenda);
	
		ordemVendaAPI.saveOrdemVenda(ordemVenda).success(function (data) {
			delete $scope.ordemVenda;
			$state.go('ordemVenda');
		});
	};
	$scope.addItem = function(item){
		$scope.listProdutos.push(JSON.parse(item.produtoComercial));
		item.produtoComercial = JSON.parse(item.produtoComercial);
		listItens.push(item);
		console.log(item);

		delete $scope.item;
	}
});