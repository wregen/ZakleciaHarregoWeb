(function (angular) {
    'use strict';

    angular
            .module('zhApp')
            .controller('menuCtrl', controller);

    controller.$inject = ['$scope', '$log', '$location', 'pagesService'];

    function controller($scope, $log, $location, pagesService) {
        var me = this;
        me.items = pagesService.getMenuItems();

        me.selectItem = function (route) {
            $scope.toggleSidenav('left');
            $location.path(route);
        };
    }
})(this.angular);
