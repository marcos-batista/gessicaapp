angular.module("yapp")
    .controller("detalheOrdemVendaCtrl", function ($scope, ordemVenda, ordemVendaAPI,  $state) {

    $scope.ordemVenda = ordemVenda.data;
    

    $scope.editarOrdemVenda = function(ordemVenda){
        ordemVendaAPI.editarOrdemVenda(ordemVenda).success(function (data) {
            console.log(data);
            $state.go('ordemVenda');
		});
    }
});