"use strict";

(function(){
  angular
  .module("wdinstagram", [
    "ui.router",
    "ngResource"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])

function RouterFunction($stateProvider){
  $stateProvider
  .state("imagesIndex", {
    url: "/images",
    templateUrl: "js/ng-views/index.html",
    controller: "ImageIndexController",
    controllerAs: "vm"
  })
  .state("imageShow", {
    url: "/image/:id",
    templateUrl: "js/ng-views/show.html",
    controller: "ImageShowController",
    controllerAs: "vm"
  })
}
})();
