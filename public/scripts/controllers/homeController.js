'use strict';
var app = app || {};

(function(module) {
  const homeController = {};

  homeController.init = function() {
    $('#home').show();

  }

  module.homeController = homeController;
})(app);
