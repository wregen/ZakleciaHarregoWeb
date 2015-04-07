(function (angular) {
    'use strict';

    angular
            .module('zhApp', ['ngRoute', 'angular-loading-bar'])
            .constant('zhAppSettings', {
                db: 'https://zakleciaharrego-wregenczuk.rhcloud.com/zakleciaharrego'
            })
            .config(['$routeProvider', function ($routeProvider) {
                    $routeProvider.
                            when('/', {
                                templateUrl: './js/views/home.html'
                            }).
                            when('/list', {
                                templateUrl: './js/views/list.html',
                                controller: 'listCtrl',
                                controllerAs: 'list'
                            }).
                            when('/categories', {
                                templateUrl: './js/views/categories.html'
                            }).
                            when('/about', {
                                templateUrl: './js/views/about.html'
                            }).
                            otherwise({
                                redirectTo: '/'
                            });
                }]);
})(this.angular);
//MuppetApp