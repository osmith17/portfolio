$(document).ready(function(){

  $('.button').click(function(){
    $('.navbar-brand, p, h2, h1').toggleClass('textToggle');
    $('body').toggleClass('bodyToggle');
    $('.jumbotron .container, nav').toggleClass('backgroundToggle');
    $('.jumbotron').toggleClass('jumbotronToggle');
    $('a img').toggleClass('imgToggle');
    $('nav a').toggleClass('navAToggle');
    $('.button').toggleClass('buttonToggle');
  });

});
