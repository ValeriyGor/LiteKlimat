$(document).ready(function(){

    

  $('.parent-elem').hover(function () {

     clearTimeout($.data(this,'timer'));

     $('ul.second-level',this).stop(true,true).slideDown(250);

  }, function () {

    $.data(this,'timer', setTimeout($.proxy(function() {

      $('ul.second-level',this).stop(true,true).hide(250);

    }, this), 50));

  });

});

var wrapperMenu = document.querySelector('.wrapper-menu');

wrapperMenu.addEventListener('click', function(){
  wrapperMenu.classList.toggle('open');  
  $(".head-menu").slideToggle(300);
})