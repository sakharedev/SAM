(function () {
  'use strict';

  // Call the initialize API first
  microsoftTeams.app.initialize().then(function () {
    microsoftTeams.app.getContext().then(function (context) {
      if (context?.app?.host?.name) {
        updateHubState(context.app.host.name);
      }
    });
  });

  function updateHubState(hubName) {
    const hubStateElement = document.getElementById('hubState');
    if (hubName && hubStateElement) {
      hubStateElement.innerHTML = `in ${hubName}`;
    }
  }
})();
