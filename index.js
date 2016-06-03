$(document).ready(function(){
  $(".well").hover(function(){
    $(".well").css("opacity", .9);
    $(".well").mouseleave(function() {
      $(".well").css("opacity", .5);
    })
  })
});