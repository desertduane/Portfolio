'use strict';
var app = app || {};

(function(module) {
  const projectController = {};

  projectController.init = function() {
    $('.tab-content').hide();
    $('#projects').show();

    app.repos.requestRepos(app.repoView.index);
  }

  module.projectController = projectController;
})(app);
