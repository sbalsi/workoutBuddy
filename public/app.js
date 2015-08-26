/**
 * Created by Stefan on 26.08.2015.
 */
'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.contacts'

]).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/contacts'});
    }]);
