(function (angular) {
    'use strict';

    angular
            .module('zhApp')
            .controller('mainController', controller);

    controller.$inject = ['$rootScope', '$log'];

    function controller($rootScope, $log) {
        var vm = this;
        $rootScope.$on("$routeChangeStart", function (event, next, current) {
            $rootScope.isLoaded = false;
        });
        $rootScope.$on("$routeChangeSuccess", function (event, next, current) {
            $rootScope.isLoaded = true;
        });



    }

})(this.angular);



