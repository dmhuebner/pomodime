(function() {
  angular
    .module('pomodime')
    .run(['$rootScope', runBlock]);

  function runBlock($rootScope) {
    $rootScope.$on('timerIsOn', function(event, timerIsOn) {
      return $rootScope.timerIsOn = timerIsOn;
    });
  }
})();