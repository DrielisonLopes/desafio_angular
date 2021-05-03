angular.module('app').factory('CursoService', CursoService)

CursoService.$inject = ['$http']

    function CursoService($http){
        const REST = 'http://localhost:3000/pacientes'

        var service = {
            exec_GET : function(){
                return $http.get(REST).then(tratarResposta, tratarErro)
            },
            exec_GET_ID : function(id){
                return $http.get(REST + '/' + id).then(tratarResposta, tratarErro)
            },
            exec_DEL : function(id){
                return $http.delete(REST + '/' + id).then(tratarResposta, tratarErro)
            },
            exec_POST : function(paciente){
                return $http.post(REST, paciente).then(tratarResposta, tratarErro)
            },
            exec_PUT : function(paciente){
                return $http.put(REST + '/' + paciente.id, paciente).then(tratarResposta, tratarErro)
            }
        }

        function tratarResposta(response){
            return response.data
        }

        function tratarErro(error){
            return error.data
        }

        return service
    }