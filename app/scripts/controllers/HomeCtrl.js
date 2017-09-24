(function() {
  function HomeCtrl() {
    var home = this;

    // Testing Controller Scope
    home.test = "Testing controller scope";


  }

  angular
    .module('pomodime')
    .controller('HomeCtrl', [HomeCtrl]);
})();