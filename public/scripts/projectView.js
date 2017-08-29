'use strict';
var app = app || {};

(function(module) {
function Project(projectDataObj) {
  this.projectUrl = projectDataObj.projectUrl;
  this.title = projectDataObj.title;
  this.imgUrl = projectDataObj.imgUrl;
  this.about = projectDataObj.about;
}
Project.all = [];

Project.prototype.toHtml = function() {
  var templateRender = Handlebars.compile($('#projects-template').text());

  return templateRender(this);

};

Project.loadAll = rows => {
  Project.All = rows.map(ele => new Project(ele));
};

Project.fetchAll = callback => {
  $.get('/projects')
  .then(
    results => {
      Project.loadAll(results);
      callback();
    }
  )
};
module.Project = Project;
})(app);

// projectData.forEach(function(projectObject) {
//   projects.push(new Project(projectObject))
// });
//
// projects.forEach(function(project) {
//   $('#projects').append(project.toHtml());
// })
