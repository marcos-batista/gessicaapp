'use strict';
angular.module("yapp")
    .factory("produtoAPI", function ($http) {
    var baseURL = "https://gessica-module-vendas.herokuapp.com";

	var _getProdutos = function () {
        	return $http.get(baseURL + "/produtos");
	};

	var _getProduto = function (id) {
	        return $http.get(baseURL + "/produto/" + id);
	};

	var _saveProduto = function (produto) {
        	return $http.post(baseURL + "/produto", produto);
	};

	var _editarProduto = function (produto) {
		return $http.put(baseURL + "/produto/"+ produto.id, produto);
	};
	var _excluirProduto = function (produto) {
		var req = {
			method: 'DELETE',
			url: baseURL + "/produto/"+produto.id,
			headers: {
				'Content-Type': 'application/json'
			},
			data: { }
			}
		
		return $http(req).then(function(data){
			console.log(data);
		});
	};

	return {
        getProdutos: _getProdutos,
        saveProduto: _saveProduto,
	    getProduto: _getProduto,
	    editarProduto: _editarProduto,
	    excluirProduto: _excluirProduto
		
	};
});