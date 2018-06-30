'use strict';
angular
  .module('yapp', [
    'ui.router',
    'ngAnimate',
    'angular-loading-bar'
  ])
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when('/dashboard', '/dashboard/ordemVendas');
    $urlRouterProvider.otherwise('/login');

    $stateProvider
      .state('base', {
        abstract: true,
        url: '',
        templateUrl: 'views/base.html'
      })
        .state('login', {
          url: '/login',
          parent: 'base',
          templateUrl: 'views/login.html',
          controller: 'LoginCtrl'
        })
        .state('dashboard', {
          url: '/dashboard',
          parent: 'base',
          templateUrl: 'views/dashboard.html',
          controller: 'DashboardCtrl'
        })
          .state('overview', {
            url: '/overview',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/overview.html',
            controller: 'OverViewCtrl',
            resolve: {
              contatos: function (contatosAPI) {
                return contatosAPI.getContatos();
              }
            }
          })
          .state('novoContato', {
            url: '/novoContato',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/novoContato.html',
            controller: 'novoContatoCtrl'
          })
        
          .state('detalhesContato', {
            url: '/detalhesContato/:id',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/detalhesContato.html',
            controller: 'detalhesContatoCtrl',
            resolve: {
              contato: function (contatosAPI, $stateParams) {
                return contatosAPI.getContato($stateParams.id);
              }
            }
          })
          //Cliente ---------------------------------------------------
          .state('newCliente', {
            url: '/newCliente',
            parent: 'dashboard',
            templateUrl: 'views/cliente/newCliente.html',
            controller: 'newClienteCrtl'
          })
          .state('detalheCliente', {
            url: '/cliente/:id',
            parent: 'dashboard',
            templateUrl: 'views/cliente/detalhamentoCliente.html',
            controller: 'detalhesClienteCtrl',
            resolve: {
              cliente: function (clienteAPI, $stateParams) {
                return clienteAPI.getCliente($stateParams.id);
              }
            }
          })
          .state('clienteslist', {
            url: '/clientes',
            parent: 'dashboard',
            templateUrl: 'views/cliente/clientelist.html',
            controller: 'ClienteViewCtrl',
            resolve: {
              clientes: function (clienteAPI) {
                return clienteAPI.getClientes();
              }
            }
          })
          //Produto ---------------------------------------------------
          .state('newProduto', {
            url: '/newProduto',
            parent: 'dashboard',
            templateUrl: 'views/produto/newProduto.html',
            controller: 'newProdutoCrtl'
          })
          .state('detalheProduto', {
            url: '/produto/:id',
            parent: 'dashboard',
            templateUrl: 'views/produto/detalhamentoProduto.html',
            controller: 'detalhesProdutoCtrl',
            resolve: {
              produto: function (produtoAPI, $stateParams) {
                return produtoAPI.getProduto($stateParams.id);
              }
            }
          })
          .state('produtolist', {
            url: '/produtos',
            parent: 'dashboard',
            templateUrl: 'views/produto/produtolist.html',
            controller: 'produtoViewCtrl',
            resolve: {
              produtos: function (produtoAPI) {
                return produtoAPI.getProdutos();
              }
            }
          })
          //Ordem de venda ---------------------------------------------------
          .state('newOrdemVenda', {
            url: '/newOrdemVenda',
            parent: 'dashboard',
            templateUrl: 'views/ordemVenda/newOrdemVenda.html',
            controller: 'newOrdemVendaCrtl',
            resolve: {
              produtos: function (produtoAPI) {
                return produtoAPI.getProdutos();
              },
              clientes: function (clienteAPI) {
                return clienteAPI.getClientes();
              }
            }
          })
          .state('detalheOrdemVenda', {
            url: '/ordemVenda/:id',
            parent: 'dashboard',
            templateUrl: 'views/ordemVenda/detalhamentoOrdemVenda.html',
            controller: 'detalheOrdemVendaCtrl',
            resolve: {
              ordemVenda: function (ordemVendaAPI, $stateParams) {
                return ordemVendaAPI.getOrdemVenda($stateParams.id);
              },
              produtos: function (produtoAPI) {
                return produtoAPI.getProdutos();
              }
            }
          })
          .state('ordemVenda', {
            url: '/ordemVendas',
            parent: 'dashboard',
            templateUrl: 'views/ordemVenda/ordemVenda.html',
            controller: 'ordemVendaViewCtrl',
            resolve: {
              ordemVendas: function (ordemVendaAPI) {
                return ordemVendaAPI.getOrdemVendas();
              }
            }
          })


  });
