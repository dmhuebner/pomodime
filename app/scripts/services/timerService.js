(function() {
  angular
    .module('pomodime')
    .factory('timer', ['$interval', 'TASK_TIMER_TIME', 'BREAK_TIME', timer]);

  function timer($interval, TASK_TIMER_TIME, BREAK_TIME) {

    // TODO use constant services for taskTimerTime and breakTime
    var taskTimerTime = TASK_TIMER_TIME;
    var breakTime = BREAK_TIME;
    var taskTimerStartingTime = taskTimerTime;
    var taskInterval;

    var service =  {
      taskTimer: taskTimerTime,
      timerOn: false,
      timerTypeIsTask: true,
      /* Service Methods */
      startTimer: startTimer,
      resetTimer: resetTimer
    }

    return service;

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
        }).catch(function(error) {
            console.log(error);
        });
      }
    }

    function resetTimer(resetBreak) {
      if (taskInterval) {
        /* Automatically restarts timer for next task */
        if (!service.timerTypeIsTask && resetBreak) {
          service.timerTypeIsTask = false;
        } else {
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