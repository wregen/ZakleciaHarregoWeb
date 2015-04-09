(function (angular) {
    'use strict';

    angular
            .module('zhApp')
            .factory('dataService', dataService);

    dataService.$inject = ['$http', '$log', 'appSettings'];

    function dataService($http, $log, appSettings) {
        return {
            getSpells: getSpells
        };

        function getSpells() {
            return $http.get(appSettings.db + '/_design/spells/_view/list')
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
