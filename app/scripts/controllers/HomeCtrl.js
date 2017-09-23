(function() {
  function HomeCtrl() {
    var $ctrl = this;

    // Testing Controller Scope
    $ctrl.test = "Testing controller scope";


  }

  angular
    .module('pomodime')
    .controller('HomeCtrl', [HomeCtrl]);
})();