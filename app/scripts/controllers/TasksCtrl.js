(function() {
  angular
    .module('pomodime')
    .controller('TasksCtrl', ['$scope', 'timer', TasksCtrl]);

  function TasksCtrl($scope, timer) {
    var vm = this;

    vm.periodicLongBreak = true;

    vm.timerTypeIsTask = timerTypeIsTask;
    vm.getTimerOn = getTimerOn;
    vm.updateBreakConfig = updateBreakConfig;

    ///////////////

    function timerTypeIsTask() {
      return timer.timerTypeIsTask;
    }

    function getTimerOn() {
      $scope.$emit('timerIsOn', timer.timerOn);
      return vm.timerIsOn = timer.timerOn;
    }

    function updateBreakConfig() {
      timer.togglePeriodicLongBreak();
    }

  }

})();