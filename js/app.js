(function (angular) {
    'use strict';

    angular
            .module('zhApp', ['ngMaterial', 'ngRoute', 'ngResource'])
            .constant('appSettings', {
                db: 'https://zakleciaharrego-wregenczuk.rhcloud.com/zakleciaharrego',
                suffix: '?callback=JSON_CALLBACK'
            })
            .config(['$routeProvider', '$mdThemingProvider', '$mdIconProvider', function ($routeProvider, $mdThemingProvider, $mdIconProvider) {
                    $mdIconProvider
                            .defaultIconSet('img/svg/core-icons.svg', 22);
                    
                    $mdThemingProvider.theme('default')
                            .primaryPalette('blue-grey')
                            .accentPalette('orange');

                    $routeProvider.
                            when('/about', {
                                templateUrl: './js/views/about.html'
                            }).
                            when('/categories', {
                                templateUrl: './js/views/categories.html'
                            }).
                            when('/list', {
                                templateUrl: './js/views/list.html',
                                controller: 'listController',
                                controllerAs: 'list'
                            }).
                            when('/', {
                                templateUrl: './js/views/home.html'
                            }).
                            otherwise({
                                redirectTo: '/'
                            });
                }]);
})(this.angular);
//MuppetApp