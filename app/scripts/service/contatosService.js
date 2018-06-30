'use strict';

/**
 * @name teste
 * @description
 */
angular.module("yapp")
    .factory("contatosAPI", function ($http) {
//comentar isso
     var contatos = [
                        {id: 1, nome: "Bruno", telefone: "9999-2222", data: new Date()},
                        {id: 2, nome: "Sandra", telefone: "9999-3333", data: new Date()},
                        {id: 3, nome: "Mariana", telefone: "9999-9999", data: new Date()}
                    ];  
     var contato1 = {id: 1, nome: "Bruno", telefone: "9999-2222", data: new Date()};           
 //ate aqui                   

    var baseURL = "http://Digite a URL";

	var _getContatos = function () {
                //comentar isso e descomentar o return abaixo;        
                return contatos;
                //return $http.get(baseURL + "/contatos");
	};

	var _getContato = function (id) {
                console.log("Contato",id);
                return contato1;
	        // return $http.get(baseURL + "/contatos/" + id);
	};

	var _saveContato = function (contato) {
                        console.log("salvar",contato);
                return contatos.push(contato);
                //return $http.post(baseURL + "/contatos", contato);
	};

	return {
                getContatos: _getContatos,
                saveContato: _saveContato,
	        getContato: _getContato
		
	};
});