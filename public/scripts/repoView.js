'use strict';
var app = app || {};

(function(module) {
  const repoView = {};

  const repoTemplate = $('#repo-template').html();
  const render = Handlebars.compile(repoTemplate);

  module.repoView = repoView;
})(app);
