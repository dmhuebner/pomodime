(function() {
  angular
    .module('pomodime')
    .factory('timer', ['$interval', timer]);

  function timer($interval) {

    // TODO use constant services for taskTimerTime and breakTime
    var taskTimerTime = 1500;
    var breakTime = 300;
    var taskTimerStartingTime = taskTimerTime;

    var service =  {
      startTimer: startTimer,
      resetTimer: resetTimer,
      taskTimer: taskTimerTime,
      timerOn: false,
      timerTypeIsTask: true
    }

    return service;

    var taskInterval;

    function startTimer() {
      if (!taskInterval) {
        service.timerOn = true;
        taskInterval = $interval(function() {
          service.taskTimer -= 1;
        }, 1000, taskTimerStartingTime);

        taskInterval.then(function() {
          if (service.timerTypeIsTask) {
            service.timerTypeIsTask = false;
            taskTimerStartingTime = breakTime;
          } else if (!service.timerTypeIsTask) {
            service.timerTypeIsTask = true;
            taskTimerStartingTime = taskTimerTime;
          }

          service.taskTimer = taskTimerStartingTime;
          service.timerOn = false;
          taskInterval = null;
        });
      }
    }

    function resetTimer() {
      if (taskInterval) {
        /* Automatically restarts timer for next task */
        if (!service.timerTypeIsTask) {
          service.timerTypeIsTask = true;
          taskTimerStartingTime = taskTimerTime;
        }

        $interval.cancel(taskInterval);
        service.timerOn = false;
        taskInterval = null;
        service.taskTimer = taskTimerStartingTime;
      }
    }

  }
})();