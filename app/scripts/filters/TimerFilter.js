(function() {
  function timerFilter() {
    return function(seconds) {
      var wholeSeconds = Math.floor(seconds);
      var minutes = Math.floor(seconds / 60);

      var secondsLeft = wholeSeconds % 60;
      if (secondsLeft < 10) {
        secondsLeft = '0' + secondsLeft;
      }

      var output = minutes + ":" + secondsLeft;

      return output;
    }
  }

  angular
    .module('pomodime')
    .filter('timerFilter', timerFilter);
})();