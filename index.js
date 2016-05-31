var host = "jvans7.github.io";
if ((host == window.location.host) && (window.location.protocol != "https:"))
    window.location.protocol = "https";


$(document).ready(function(){
  $(".well").hover(function(){
    $(".well").css("opacity", .9);
    $(".well").mouseleave(function() {
      $(".well").css("opacity", .5);
    })
  })
});