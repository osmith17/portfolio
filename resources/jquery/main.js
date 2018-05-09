$(document).ready(function(){

  $('.button').click(function(){
if (  ($('body').attr('id'))== 'snow'){
    $('body').removeAttr('id','snow');
  $('body').attr('id','fire');
} else if (($('body').attr('id'))== 'fire') {
  $('body').removeAttr('id','fire');
$('body').attr('id','forest');
} else if (($('body').attr('id'))== 'forest') {
  $('body').removeAttr('id','forest');
$('body').attr('id','sea');
} else if (($('body').attr('id'))== 'sea') {
  $('body').removeAttr('id','sea');
$('body').attr('id','snow');
}
});

$('.carousel-desktop').slick({
  autoplay:true,
  autoplaySpeed:4000,
  arrows:false,
  slidesToScroll:1,
  pauseOnFocus:false,
  pauseOnHover:false,
  draggable:false,
  speed:1800

});
$('.carousel-mobile').slick({
  autoplay:true,
  autoplaySpeed:2500,
  arrows:false,
  slidesToScroll:1,
  pauseOnFocus:false,
  pauseOnHover:false,
  draggable:false,
  speed:1500

});









});
