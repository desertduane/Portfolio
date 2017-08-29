'use strict';

var app = app || {};

page('/home', app.homeController.init);
page('/project', app.projectController.init);
page('/about', app.aboutController.init);
page();
