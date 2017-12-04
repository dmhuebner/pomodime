(function() {
  angular
    .module('pomodime')
    .factory('timer', ['$interval', 'TASK_TIMER_TIME', 'BREAK_TIME', 'TaskService', timer]);

  function timer($interval, TASK_TIMER_TIME, BREAK_TIME, TaskService) {

    var taskTimerTime = TASK_TIMER_TIME,
        breakTime = BREAK_TIME,
        longBreakTime = 1800,
        periodicLongBreak = true,
        taskTimerStartingTime = taskTimerTime,
        taskInterval;

    var service =  {
      taskTimer: taskTimerTime,
      timerOn: false,
      timerTypeIsTask: true,
      /* Service Methods */
      startTimer: startTimer,
      resetTimer: resetTimer,
      togglePeriodicLongBreak: togglePeriodicLongBreak
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
            if (periodicLongBreak && TaskService.completedSessionCount < 3) {
              TaskService.addCompletedSessionCount();
              taskTimerStartingTime = breakTime;
            } else if (periodicLongBreak) {
              TaskService.resetCompletedSessionCount();
              taskTimerStartingTime = longBreakTime;
            } else {
              taskTimerStartingTime = breakTime;
            }

            console.log(TaskService.completedSessionCount);
            service.timerTypeIsTask = false;
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

    function togglePeriodicLongBreak() {
      periodicLongBreak = !periodicLongBreak;
    }

  }
})();