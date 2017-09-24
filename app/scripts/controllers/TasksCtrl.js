(function() {
  function TasksCtrl($interval) {
    var tasks = this;

    tasks.test = "TasksCtrl scope test";

    tasks.taskTimerStart = 1500;
    tasks.taskTimer = tasks.taskTimerStart;
    tasks.timerOn = false;

    tasks.startTimer = function() {
      tasks.timerOn = true;
      $interval(function() {
        tasks.taskTimer -= 1;
      }, 1000, tasks.taskTimerStart).then(function() {
        tasks.taskTimer = tasks.taskTimerStart;
        tasks.timerOn = false;
      })};


    }

  angular
    .module('pomodime')
    .controller('TasksCtrl', ['$interval', TasksCtrl]);
})();