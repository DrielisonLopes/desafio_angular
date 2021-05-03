angular.module('app').controller('CadastroController', CadastroController)
CadastroController.$inject = ['$location', 'CursoService', '$routeParams']

    function CadastroController($location, CursoService, $routeParams){
        vm = this;
        vm.teste = 'Cadastro'
        vm.paciente = {}
        vm.idCli = undefined
        vm.textoBotao = 'Cadastrar'

        if($routeParams.idCli){
            vm.idCli = $routeParams.idCli
            buscarId(vm.idCli)
            vm.textoBotao = 'Editar'
        }

        vm.navegar = function(){
            $location.path('/')
        }

        vm.cadastrar = function(){
            if(vm.textoBotao == 'Cadastrar'){
                CursoService.exec_POST(vm.paciente).then(function(response){
                    if(response){
                        vm.paciente = response
                    }
                })
            } else if(vm.textoBotao == 'Editar'){
                CursoService.exec_PUT(vm.paciente).then(function(response){
                    if(response){
                        vm.paciente = response
                    }
                })
            }
            
            vm.navegar('/')
        }

        function buscarId(id){
            CursoService.exec_GET_ID(id).then(function(response){
                if(response){
                    vm.paciente = response
                }
            })
        }

        vm.limpar = function(){
            vm.paciente = {}
        }
    }