(function() {
  function TasksCtrl($interval) {
    var tasks = this;

    tasks.test = "TasksCtrl scope test";

    tasks.taskTimerStart = 1500;
    tasks.taskTimer = tasks.taskTimerStart;

    tasks.startTimer = function() {
      $interval(function() {
        tasks.taskTimer -= 1;
      }, 1000);


    }

  }

  angular
    .module('pomodime')
    .controller('TasksCtrl', ['$interval', TasksCtrl]);
})();