// Copyright (c) 2015 Timothy Jensen & Alexander Tappin. All rights reserved.

var app = angular.module('app', []);

app.controller('appCtrl', function($scope, $q, $location) {
  $scope.hello = "hello world";
});