// Ionic Starter App, v0.9.20

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "menu.html",
      controller: 'AppCtrl'
    })

    .state('app.search', {
      url: "/search",
      views: {
        'menuContent' :{
          templateUrl: "home.html"
        }
      }
    })

    .state('app.browse', {
      url: "/browse",
      views: {
        'menuContent' :{
          templateUrl: "creditos.html"
        }
      }
    })
    .state('app.playlists', {
      url: "/playlists",
      views: {
        'menuContent' :{
          templateUrl: "playlists.html",
          controller: 'PlaylistsCtrl'
        }
      }
    })

    .state('app.single', {
      url: "/playlists/1",
      views: {
        'menuContent' :{
          templateUrl: "s1.html",
          controller: 'PlaylistCtrl'
        }
      }
    })

.state('app.hino2', {
      url: "/playlists/2",
      views: {
        'menuContent' :{
          templateUrl: "s2.html",
          controller: 'PlaylistCtrl2'
        }
      }
    })


.state('app.s3', {
      url: "/playlists/3",
      views: {
        'menuContent' :{
          templateUrl: "s3.html",
          controller: 'PlaylistCtrl3'
        }
      }
    })


.state('app.submit', {
      url: "/submit",
      views: {
        'menuContent' :{
          templateUrl: "submit.html",
          controller: 'Submit'
        }
      }
    })

;




  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/search');
});
