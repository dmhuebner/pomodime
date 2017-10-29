(function() {
  angular
    .module('pomodime')
    .controller('HomeCtrl', [HomeCtrl]);

  function HomeCtrl() {
    var vm = this;

    // Testing Controller Scope
    vm.test = "Testing controller scope";

  }
})();