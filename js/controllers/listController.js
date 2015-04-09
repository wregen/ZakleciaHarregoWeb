(function (angular) {
    'use strict';

    angular
            .module('zhApp')
            .controller('listController', controller);

    controller.$inject = ['$rootScope', '$log', 'dataService'];

    function controller($rootScope, $log, dataService) {
        $rootScope.isLoaded  = false;
        
        var vm = this;
        vm.offset = 0;
        vm.total_rows = 0;
        vm.spells = [];
        activate();

        function getSpells() {
            return dataService.getSpells().then(function (data) {
                vm.offset = data.offset;
                vm.total_rows = data.total_rows;
                vm.spells = data.rows;
                $rootScope.isLoaded = true;
                return vm.spells;
            });
        }

        function activate() {
            return getSpells().then(function () {
//                $log.info('Activated List');
            });
        }


    }
})(this.angular);



