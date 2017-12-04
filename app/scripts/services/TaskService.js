(function() {
  angular
    .module('pomodime')
    .factory('TaskService', TaskService);

  function TaskService() {
    var completedSessionCount = 0;

    var service =  {
      completedSessionCount: completedSessionCount,
      // Service Methods
      addCompletedSessionCount: addCompletedSessionCount,
      resetCompletedSessionCount: resetCompletedSessionCount
    };

    return service;

    ///////////////

    function addCompletedSessionCount() {
      service.completedSessionCount++;
    }

    function resetCompletedSessionCount() {
      service.completedSessionCount = 0;
    }

  }
})();