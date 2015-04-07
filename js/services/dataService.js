(function (angular) {
    'use strict';

    angular
            .module('zhApp')
            .factory('dataservice', dataservice);

    dataservice.$inject = ['$http', '$log', 'zhAppSettings'];

    function dataservice($http, $log, zhAppSettings) {
        return {
            getSpells: getSpells
        };

        function getSpells() {
            return $http.get(zhAppSettings.db + '/_design/spells/_view/list')
                    .then(getSpellsComplete)
                    .catch(getSpellsFailed);

            function getSpellsComplete(response) {
                return response.data;
            }

            function getSpellsFailed(error) {
                $log.error('XHR Failed for getSpells.' + error.data);
            }
        }
    }

})(this.angular);
