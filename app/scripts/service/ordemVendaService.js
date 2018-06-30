'use strict';
angular.module("yapp")
    .factory("ordemVendaAPI", function ($http) {
    var baseURL = "https://gessica-module-vendas.herokuapp.com";

	var _getOrdemVendas = function () {
            return $http.get(baseURL + "/vendas");
	};

	var _getOrdemVenda = function (id) {
	        return $http.get(baseURL + "/venda/" + id);
	};

	var _saveOrdemVenda = function (ordemVenda) {
			 return $http.post(baseURL + "/venda", ordemVenda);
			
	};

	var _editarOrdemVenda = function (ordemVenda) {
		return $http.put(baseURL + "/venda/"+ordemVenda.id, ordemVenda);
	};
	var _excluirOrdemVenda = function (ordemVenda) {
        var req = {
			method: 'DELETE',
			url: baseURL + "/venda/"+ordemVenda.id,
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
        getOrdemVendas: _getOrdemVendas,
        saveOrdemVenda: _saveOrdemVenda,
	    getOrdemVenda: _getOrdemVenda,
	    editarOrdemVenda: _editarOrdemVenda,
	    excluirOrdemVenda: _excluirOrdemVenda
		
	};
});