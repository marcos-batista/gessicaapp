angular.module("yapp")
    .controller("newProdutoCrtl", function ($scope, produtoAPI, $state) {

	$scope.adicionarProduto = function (produto) {
		produtoAPI.saveProduto(produto).success(function (data) {
			delete $scope.produto;
			$state.go('produtolist');
		});
	};
});