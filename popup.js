// Copyright (c) 2015 Timothy Jensen & Alexander Tappin. All rights reserved.

var app = angular.module('app', []);

app.controller('appCtrl', function($scope, $q, $location) {
  $scope.newName = "";
  $scope.selected = 'weekly';
  $scope.projects = [
    {
      name: 'WSNLA',
      weekly: '28h 10m 39s',
      total: '93h 10m 39s'
    },
    {
      name: 'DTNA',
      weekly: '18h 10m 39s',
      total: '193h 10m 39s'
    },
    {
      name: 'Nike',
      weekly: '10h 12m 36s',
      total: '13h 10m 31s'
    }
  ];

  $scope.addProject = function(name) {
    var newProject = {
      name,
      weekly: '0d 0m 0s',
      total: '0d 0m 0s',
    }
    $scope.projects.push(newProject);
  }
});