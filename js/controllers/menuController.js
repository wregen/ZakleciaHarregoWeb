(function (angular) {
    'use strict';

    angular
            .module('zhApp')
            .controller('menuController', controller);

    controller.$inject = ['$scope', '$log', '$location', 'menuService'];

    function controller($scope, $log, $location, menuService) {
        var vm = this;
        vm.items = menuService.getMenuItems();
        vm.selectItem = selectItem;
        vm.toggleMenu = function (menuId) {
            menuService.toggleMenu(menuId);
        };
        vm.hideMenu = function (menuId) {
            menuService.hideMenu(menuId);
        };

        function selectItem(item, menuId) {
            menuService.hideMenu(menuId);
            $location.path(item);
        }


    }
})(this.angular);



