(function() {
  angular
    .module('pomodime')
    .component('pdTaskTimer', {
      templateUrl: '/templates/components/task_timer.html',
      controller: 'TaskTimerComponentCtrl as vm'
    });

})();