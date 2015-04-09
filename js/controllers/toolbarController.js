(function (angular) {
    'use strict';

    angular
            .module('zhApp')
            .controller('toolbarController', controller);

    controller.$inject = ['$scope', '$log', 'menuService'];

    function controller($scope, $log, menuService) {
        var vm = this;
        vm.pageTitle = 'Home';
        vm.toggleMenu = function (menuId) {
            menuService.toggleMenu(menuId);
        };

        $scope.$on("$routeChangeStart", function (event, next, current) {
            vm.pageTitle = menuService.getTextFromRoute(next.originalPath);
        });

    }
})(this.angular);



