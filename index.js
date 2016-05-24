$(document).ready(function(){
  $(".well").hover(function(){
    $(".well").css("opacity", .6);
    $(".well").mouseleave(function() {
      $(".well").css("opacity", .9);
    })
  })
});