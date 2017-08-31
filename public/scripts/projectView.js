'use strict';

var projects = [];

function Project(projectDataObj) {
  this.projectUrl = projectDataObj.projectUrl;
  this.title = projectDataObj.title;
  this.imgUrl = projectDataObj.imgUrl;
}
Project.prototype.toHtml = function() {
  var template = $('#projects-template').html();
  var templateRender = Handlebars.compile(template);

  return templateRender(this);

};

projectData.forEach(function(projectObject) {
  projects.push(new Project(projectObject))
});

projects.forEach(function(project) {
  $('#projects').append(project.toHtml());
})

