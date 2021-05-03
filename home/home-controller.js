angular.module('app').controller('HomeController', HomeController);
HomeController.$inject = ['$location', 'CursoService'];

function HomeController($location, CursoService){
    vm = this;
    vm.texto = 'Home'
    vm.pacientes = ''
    vm.error = false

    vm.init = function(){
        vm.listarpacientes()
    }

    vm.navegar = function(){
        $location.path('Cadastro')
    }

    vm.listarpacientes = function(){
        CursoService.exec_GET().then(function(response){
            if(response){
                vm.pacientes = response
            } else {
                vm.error = true
            }
        })
    }

    vm.excluir = function(id){
        CursoService.exec_DEL(id).then(function(response){
            if(response){
                //mensagem resposta
            }
        })
    }

    vm.editar = function(id){
        $location.path('Cadastro/' + id)
    }

}