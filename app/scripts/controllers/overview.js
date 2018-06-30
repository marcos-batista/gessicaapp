'use strict';

/**
 * @name teste
 * @description
 */
angular.module('yapp')
  .controller('OverViewCtrl', function($scope, $state, $filter, contatos, contatosAPI) {

    $scope.app = "Lista";
	$scope.contatos = contatos;

	var init = function () {
	};

    
	$scope.apagarContatos = function (contatos) {
		$scope.contatos = contatos.filter(function (contato) {
			if (!contato.selecionado) return contato;
		});
		$scope.verificarContatoSelecionado($scope.contatos);
    };
    
	$scope.verificarContatoSelecionado = function (contatos) {
		$scope.hasContatoSelecionado = contatos.some(function (contato) {
			return contato.selecionado;
		});
	};
	$scope.ordenarPor = function (campo) {
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};

	
	init();

  });
