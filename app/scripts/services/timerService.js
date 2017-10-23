(function() {
  angular
    .module('pomodime')
    .factory('timer', ['$interval', timer]);

  function timer($interval) {

    var timerTime = 5;

    var service =  {
      startTimer: startTimer,
      resetTimer: resetTimer,
      taskTimerStartingTime: timerTime,
      taskTimer: timerTime,
      timerOn: false
    }

    return service;

    var taskInterval;

    function startTimer() {
      // TODO fix if
      if (!taskInterval) {
        service.timerOn = true;
        taskInterval = $interval(function() {
          service.taskTimer -= 1;
        }, 1000, service.taskTimerStartingTime);

        taskInterval.then(function() {
          service.taskTimer = service.taskTimerStartingTime;
          service.timerOn = false;
          taskInterval = null;
        });
      }
    }

    function resetTimer() {
      if (taskInterval) {
        $interval.cancel(taskInterval);
        service.timerOn = false;
        service.taskTimer = service.taskTimerStartingTime;
        taskInterval = null;
      }
    }

  }
})();