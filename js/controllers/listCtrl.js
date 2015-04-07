(function (angular) {
    'use strict';

    angular
            .module('zhApp')
            .controller('listCtrl', controller);

    controller.$inject = ['$rootScope', '$scope', '$log', '$http', 'dataservice'];

    function controller($rootScope, $scope, $log, $http, dataservice) {
        var vm = this;
        vm.offset = 0;
        vm.total_rows = 0;
        vm.spells = [];
        $rootScope.showPreloader = true;
        activate();

        function getSpells() {
            return dataservice.getSpells().then(function (data) {
                vm.offset = data.offset;
                vm.total_rows = data.total_rows;
                vm.spells = data.rows;
                $rootScope.showPreloader = false;
                return vm.spells;
            });
        }

        function activate() {
            return getSpells().then(function () {
                $log.info('Activated List');
            });
        }


    }
})(this.angular);



