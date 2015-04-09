(function (angular) {
    'use strict';

    angular
            .module('zhApp')
            .factory('menuService', menuService);

    menuService.$inject = ['$mdSidenav'];

    function menuService($mdSidenav) {
        var items = [
            {inMenu: false, text: 'Home', route: '/', iconurl: './img/icons/home.png'},
            {inMenu: true, text: 'Lista Zaklęć', route: '/list', iconurl: './img/icons/spells.png'},
            {inMenu: true, text: 'Kategorie Zaklęć', route: '/categories', iconurl: './img/icons/categories.png'},
            {inMenu: true, text: 'O Aplikacji', route: '/about', iconurl: './img/icons/about.png'}
        ],
                factory = {
                    toggleMenu: toggleMenu,
                    getMenuItems: getMenuItems,
                    getTextFromRoute: getTextFromRoute
                };

        return factory;

        function toggleMenu(menuId) {
            $mdSidenav(menuId).toggle();
        }

        function getMenuItems() {
            var out = [];
            angular.forEach(items, function (value, key) {
                if (value.inMenu) {
                    this.push(value);
                }
            }, out);

            return out;
        }
        function getTextFromRoute(route) {
            var l = items.length;
            for (var i = 0; i < items.length; i++) {
                if (items[i].route === route) {
                    return items[i].text;
                }
            }
            return items[0].text;
        }
    }

})(this.angular);

