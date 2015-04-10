(function (angular) {
    'use strict';

    angular
            .module('zhApp')
            .controller('toolbarController', controller);

    controller.$inject = ['$scope', '$log','$location', 'menuService'];

    function controller($scope, $log, $location, menuService) {
        var vm = this;
        vm.pageTitle = 'Home';
        vm.toggleMenu = function (menuId) {
            menuService.toggleMenu(menuId);
        };
        vm.selectItem = function(route, menuId) {
            menuService.hideMenu(menuId);
            $location.path(route);
        };

        $scope.$on("$routeChangeStart", function (event, next, current) {
            vm.pageTitle = menuService.getTextFromRoute(next.originalPath);
        });

    }
})(this.angular);



