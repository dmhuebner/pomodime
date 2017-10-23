(function() {
  function TasksCtrl(timer) {
    var vm = this;

    vm.test = "TasksCtrl scope test";

    vm.timer = timer;

    vm.startTimer = startTimer;
    vm.resetTimer = resetTimer;

    ///////////

    function startTimer() {
      timer.startTimer();
    }

    function resetTimer() {
      timer.resetTimer();
    }

  }

  angular
    .module('pomodime')
    .controller('TasksCtrl', ['timer', TasksCtrl]);
})();