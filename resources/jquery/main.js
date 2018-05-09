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
});
