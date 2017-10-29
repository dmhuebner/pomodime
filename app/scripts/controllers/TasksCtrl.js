(function() {
  angular
    .module('pomodime')
    .controller('TasksCtrl', ['$scope', 'timer', TasksCtrl]);

  function TasksCtrl($scope, timer) {
    var vm = this;

    vm.timerTypeIsTask = timerTypeIsTask;
    vm.getTimerOn = getTimerOn;

    function timerTypeIsTask() {
      return timer.timerTypeIsTask;
    }

    function getTimerOn() {
      $scope.$emit('timerIsOn', timer.timerOn);
      return vm.timerIsOn = timer.timerOn;
    }

  }

})();