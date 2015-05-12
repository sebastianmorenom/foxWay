'use strict';

var angularModule = angular.module('foxWay', ['ngRoute']);

/*angularModule.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/home', {
            templateUrl: '/views/1.html',
        })
        .when('/page1', {
            templateUrl: '/views/2.html',
        })
        .otherwise({
            redirectTo: '/home'
        });
    
}]);*/

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/phones', {
        templateUrl: 'partials/phone-list.html',
        controller: 'PhoneListCtrl'
      }).
      when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).
      otherwise({
        redirectTo: '/phones'
      });
  }]);