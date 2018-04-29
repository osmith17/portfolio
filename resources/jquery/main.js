$(document).ready(function(){

  $('.button').click(function(){
    $('nav').toggleClass('backgroundToggle');
    $('.navbar-brand').toggleClass('textToggle');
    $('p').toggleClass('textToggle');
    $('body').toggleClass('bodyToggle');
    $('h2').toggleClass('textToggle');
    $('h1').toggleClass('textToggle');
    $('.jumbotron .container').toggleClass('backgroundToggle');
    $('.jumbotron').toggleClass('jumbotronToggle');
    $('a img').toggleClass('imgToggle');
    $('nav a').toggleClass('navAToggle');
  });

});
