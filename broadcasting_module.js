var modulo = angular.module("miApp", [])
.controller("c_app", [ "$rootScope", "$scope", function($rootScope, $scope) {
    $rootScope.$on('miEvento', function(evento, objeto) {
        if(objeto.reiniciar) {
            $rootScope.valor = getRndInteger(1,99);
            $rootScope.propagacion = true;
            colorearPropagacion($rootScope.propagacion, document.getElementById('rootscope'));
        } else {
            $rootScope.valor = objeto.nuevoValor;
            if(!$rootScope.propagacion) evento.stopPropagation();
        }
    });

    $scope.reiniciarValores = function() {
        $rootScope.$broadcast('miEvento', { reiniciar: true });
    }

    $scope.broadcasting = function() {
        $rootScope.$broadcast('miEvento', { reiniciar: false, nuevoValor: $rootScope.valor });
    }

    $scope.rootBroadcasting = function() {
        $rootScope.$broadcast('miEvento', { reiniciar: false, nuevoValor: $rootScope.valor });
    }

    $scope.emit = function() {
        $rootScope.$emit('miEvento', { reiniciar: false, nuevoValor: $rootScope.valor });
    }

    $scope.switchPropagation = function() {
        $rootScope.propagacion = !$rootScope.propagacion;
        colorearPropagacion($rootScope.propagacion, document.getElementById('rootscope'));
    }
}])
.controller("c_scope1", [ "$rootScope", "$scope", function($rootScope, $scope) {
    $scope.$on('miEvento', function(evento, objeto) {
        if(objeto.reiniciar) {
            $scope.valor = getRndInteger(1,99);
            $scope.propagacion = true;
            colorearPropagacion($scope.propagacion, document.getElementById('scope1'));
        } else {
            $scope.valor = objeto.nuevoValor;
            if(!$scope.propagacion) evento.stopPropagation();
        }
    });

    $scope.broadcasting = function() {
        $scope.$broadcast('miEvento', { reiniciar: false, nuevoValor: $scope.valor });
    }

    $scope.rootBroadcasting = function() {
        $rootScope.$broadcast('miEvento', { reiniciar: false, nuevoValor: $scope.valor });
    }

    $scope.emit = function() {
        $scope.$emit('miEvento', { reiniciar: false, nuevoValor: $scope.valor });
    }

    $scope.switchPropagation = function() {
        $scope.propagacion = !$scope.propagacion;
        colorearPropagacion($scope.propagacion, document.getElementById('scope1'));
    }
}])
.controller("c_scope2", [ "$rootScope", "$scope", function($rootScope, $scope) {
    $scope.propagacion = true;

    $scope.$on('miEvento', function(evento, objeto) {
        if(objeto.reiniciar) {
            $scope.valor = getRndInteger(1,99);
            $scope.propagacion = true;
            colorearPropagacion($scope.propagacion, document.getElementById('scope2'));
        } else {
            $scope.valor = objeto.nuevoValor;
            if(!$scope.propagacion) evento.stopPropagation();
        }
    });

    $scope.broadcasting = function() {
        $scope.$broadcast('miEvento', { reiniciar: false, nuevoValor: $scope.valor });
    }

    $scope.rootBroadcasting = function() {
        $rootScope.$broadcast('miEvento', { reiniciar: false, nuevoValor: $scope.valor });
    }

    $scope.emit = function() {
        $scope.$emit('miEvento', { reiniciar: false, nuevoValor: $scope.valor });
    }

    $scope.switchPropagation = function() {
        $scope.propagacion = !$scope.propagacion;
        colorearPropagacion($scope.propagacion, document.getElementById('scope2'));
    }
}])
.controller("c_scope3", [ "$rootScope", "$scope", function($rootScope, $scope) {
    $scope.$on('miEvento', function(evento, objeto) {
        if(objeto.reiniciar) {
            $scope.valor = getRndInteger(1,99);
            $scope.propagacion = true;
            colorearPropagacion($scope.propagacion, document.getElementById('scope3'));
        } else {
            $scope.valor = objeto.nuevoValor;
            if(!$scope.propagacion) evento.stopPropagation();
        }
    });

    $scope.broadcasting = function() {
        $scope.$broadcast('miEvento', { reiniciar: false, nuevoValor: $scope.valor });
    }

    $scope.rootBroadcasting = function() {
        $rootScope.$broadcast('miEvento', { reiniciar: false, nuevoValor: $scope.valor });
    }

    $scope.emit = function() {
        $scope.$emit('miEvento', { reiniciar: false, nuevoValor: $scope.valor });
    }

    $scope.switchPropagation = function() {
        $scope.propagacion = !$scope.propagacion;
        colorearPropagacion($scope.propagacion, document.getElementById('scope3'));
    }
}])
.controller("c_scope4", [ "$rootScope", "$scope", function($rootScope, $scope) {
    $scope.$on('miEvento', function(evento, objeto) {
        if(objeto.reiniciar) {
            $scope.valor = getRndInteger(1,99);
            $scope.propagacion = true;
            colorearPropagacion($scope.propagacion, document.getElementById('scope4'));
        } else {
            $scope.valor = objeto.nuevoValor;
            if(!$scope.propagacion) evento.stopPropagation();
        }
    });

    $scope.broadcasting = function() {
        $scope.$broadcast('miEvento', { reiniciar: false, nuevoValor: $scope.valor });
    }

    $scope.rootBroadcasting = function() {
        $rootScope.$broadcast('miEvento', { reiniciar: false, nuevoValor: $scope.valor });
    }

    $scope.emit = function() {
        $scope.$emit('miEvento', { reiniciar: false, nuevoValor: $scope.valor });
    }

    $scope.switchPropagation = function() {
        $scope.propagacion = !$scope.propagacion;
        colorearPropagacion($scope.propagacion, document.getElementById('scope4'));
    }
}])
.controller("c_scope5", [ "$rootScope", "$scope", function($rootScope, $scope) {
    $scope.$on('miEvento', function(evento, objeto) {
        if(objeto.reiniciar) {
            $scope.valor = getRndInteger(1,99);
            $scope.propagacion = true;
            colorearPropagacion($scope.propagacion, document.getElementById('scope5'));
        } else {
            $scope.valor = objeto.nuevoValor;
            if(!$scope.propagacion) evento.stopPropagation();
        }
    });

    $scope.broadcasting = function() {
        $scope.$broadcast('miEvento', { reiniciar: false, nuevoValor: $scope.valor });
    }

    $scope.rootBroadcasting = function() {
        $rootScope.$broadcast('miEvento', { reiniciar: false, nuevoValor: $scope.valor });
    }

    $scope.emit = function() {
        $scope.$emit('miEvento', { reiniciar: false, nuevoValor: $scope.valor });
    }

    $scope.switchPropagation = function() {
        $scope.propagacion = !$scope.propagacion;
        colorearPropagacion($scope.propagacion, document.getElementById('scope5'));
    }
}])
.controller("c_scope6", [ "$rootScope", "$scope", function($rootScope, $scope) {
    $scope.$on('miEvento', function(evento, objeto) {
        if(objeto.reiniciar) {
            $scope.valor = getRndInteger(1,99);
            $scope.propagacion = true;
            colorearPropagacion($scope.propagacion, document.getElementById('scope6'));
        } else {
            $scope.valor = objeto.nuevoValor;
            if(!$scope.propagacion) evento.stopPropagation();
        }
    });

    $scope.broadcasting = function() {
        $scope.$broadcast('miEvento', { reiniciar: false, nuevoValor: $scope.valor });
    }

    $scope.rootBroadcasting = function() {
        $rootScope.$broadcast('miEvento', { reiniciar: false, nuevoValor: $scope.valor });
    }

    $scope.emit = function() {
        $scope.$emit('miEvento', { reiniciar: false, nuevoValor: $scope.valor });
    }

    $scope.switchPropagation = function() {
        $scope.propagacion = !$scope.propagacion;
        colorearPropagacion($scope.propagacion, document.getElementById('scope6'));
    }
}]);
