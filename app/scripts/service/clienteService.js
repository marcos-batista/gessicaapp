'use strict';
angular.module("yapp")
    .factory("clienteAPI", function ($http) {
    var baseURL = "https://gessica-module-vendas.herokuapp.com";

	var _getClientes = function () {
            return $http.get(baseURL + "/clientes");
	};

	var _getCliente = function (id) {
	        return $http.get(baseURL + "/cliente/" + id);
	};

	var _saveCliente = function (cliente) {
            return $http.post(baseURL + "/cliente", cliente);
	};

	var _editarCliente = function (cliente) {
		return $http.put(baseURL + "/cliente/"+cliente.id, cliente);
	};
	var _excluirCliente = function (cliente) {
		var req = {
			method: 'DELETE',
			url: baseURL + "/cliente/"+cliente.id,
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
            getClientes: _getClientes,
            saveCliente: _saveCliente,
	    getCliente: _getCliente,
	    editarCliente: _editarCliente,
	    excluirCliente: _excluirCliente
		
	};
});