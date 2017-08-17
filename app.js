'use strict';

function navList() {
  $('.nav-list').on('click', 'li', function(){
    $('.tab-content').hide();
    $('.tab-content[id = "' + $(this).attr('data-content') + '"]').fadeIn();

    $('.nav-list .tab:first').click();
  })

}
$(document).ready(function (){
  navList();
});
