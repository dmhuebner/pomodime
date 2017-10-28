(function() {
  angular
    .module('pomodime')
    .controller('TasksCtrl', ['timer', TasksCtrl]);

  function TasksCtrl(timer) {
    var vm = this;

    // vm.startTimer = startTimer;
    // vm.resetTimer = resetTimer;
    // vm.resetBreakTimer = resetBreakTimer;
    vm.timerTypeIsTask = timerTypeIsTask;
    vm.getTimerOn = getTimerOn;
    // vm.getTaskTimer = getTaskTimer;
    //
    // ///////////
    //
    // function startTimer() {
    //   timer.startTimer();
    // }
    //
    // function resetTimer() {
    //   timer.resetTimer();
    // }
    //
    // function resetBreakTimer() {
    //   timer.resetTimer(true);
    // }
    //
    function timerTypeIsTask() {
      return timer.timerTypeIsTask;
    }

    function getTimerOn() {
      return timer.timerOn;
    }
    //
    // function getTaskTimer() {
    //   return timer.taskTimer;
    // }

  }

})();