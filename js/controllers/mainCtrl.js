(function (angular) {
    'use strict';

    angular
            .module('zhApp')
            .controller('mainCtrl', controller);

    controller.$inject = ['$scope', '$log', 'pagesService'];

    function controller($scope, $log, pagesService) {
        $scope.$on( "$routeChangeStart", function(event, next, current) {
            $scope.pageTitle = pagesService.getTextFromRoute(next.originalPath);
        });

    }
})(this.angular);



