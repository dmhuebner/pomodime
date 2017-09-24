(function() {
  function config($locationProvider, $stateProvider) {
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });

    $stateProvider
      .state('home', {
        url: '/',
        controller: 'HomeCtrl as home',
        templateUrl: '/templates/home.html'
      })
      .state('tasks', {
        url: '/tasks',
        controller: 'TasksCtrl as tasks',
        templateUrl: '/templates/tasks.html'
      })
  }

  angular
    .module('pomodime', ['ui.router'])
    .config(config);
})();