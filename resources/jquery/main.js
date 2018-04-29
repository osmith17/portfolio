$(document).ready(function(){

  $('.button').click(function(){
      $('nav').toggleClass('backgroundToggle');
      $('.navbar-brand').toggleClass('textToggle');
      $('p').toggleClass('textToggle');
      $('body').toggleClass('backgroundToggle');
      $('h2').toggleClass('textToggle');
      $('h1').toggleClass('textToggle');
      $('.jumbotron .container').toggleClass('backgroundToggle');
  });

});
