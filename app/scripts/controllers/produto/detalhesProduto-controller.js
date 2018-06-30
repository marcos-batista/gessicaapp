angular.module("yapp")
    .controller("detalhesProdutoCtrl", function ($scope, produto, produtoAPI, $state) {

    $scope.produto = produto.data;
    

    $scope.editarProduto = function(produto){
        produtoAPI.editarProduto(produto).success(function (data) {
            console.log(data);
            $state.go('produtolist');
		});
    }
});