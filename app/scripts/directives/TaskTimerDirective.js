(function() {
  function TaskTimer() {

    return {
      restrict: 'E',
      templateUrl: '/templates/directives/task_timer.html',
      replace: true,
      link: function(scope, element, attrs, controller) {
        var taskTimerStart = 1500000;
        var taskTimer = taskTimerStart;
      }
    }

  }

  angular
    .module('pomodime')
    .directive('taskTimer', [TaskTimer]);
})();