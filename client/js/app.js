var myAngular = angular.module("techkids", ["ui.router"]);

myAngular.config(["$stateProvider", "$urlRouterProvider",
  function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/");

    $stateProvider.state("home", {
      url: "/",
      templateUrl: "templates/home.html"
    });

    $stateProvider.state("search-girl", {
      url: "/search-girl",
      templateUrl: "templates/search-girl.html",
      controller: "GirlController"
    });
}])

myAngular.controller("GirlController", ["$scope", function($scope){
  $scope.data = [
    {
      name: "Dzung",
      age: 21,
      facebook: "Dzung",
      password: "bananhtung"
    }, {
      name: "Ha",
      age: 22,
      facebook: "Ha San",
      password: "bananhtung1"
    },
    {
      name: "Ha",
      age: 22,
      facebook: "Ha San",
      password: "bananhtung1"
    },
    {
      name: "XXX",
      age: 22,
      facebook: "XXX",
      password: "XXX"
    },
    {
      name: "YYY",
      age: 22,
      facebook: "YYY",
      password: "YYY"
    },
    {
      name: "XXX",
      age: 22,
      facebook: "XXX",
      password: "XXX"
    },
    {
      name: "YYY",
      age: 22,
      facebook: "YYY",
      password: "YYY"
    }
  ];

  $scope.girls =  $scope.data;

  $scope.search = function() {
    $scope.girls = [];
    for (var i = 0; i<$scope.data.length;i++) {
        var name = $scope.data[i].name.toLowerCase();
        var age = $scope.data[i].age;
        var facebook = $scope.data[i].facebook.toLowerCase();
        var password = $scope.data[i].password.toLowerCase();

        var match = $scope.form.name && (name.indexOf($scope.form.name.toLowerCase()) != -1);
        match = match || $scope.form.age && age == $scope.form.age;
        match = match || $scope.form.facebook && (facebook.indexOf($scope.form.facebook.toLowerCase()) != -1);
        match = match || $scope.form.password && (password.indexOf($scope.form.password.toLowerCase()) != -1);

        if (match) {
          $scope.girls.push($scope.data[i]);
        }
    }
  }

}])

myAngular.directive("navbar", [function(){
  return {
    restrict: "AE",
    templateUrl: "templates/navbar.html"
  }
}])
