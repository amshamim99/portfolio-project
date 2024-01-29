(function ($) {
"use strict";

// background-img//
$("[data-background]").each(function(){
    $(this).css("background-image","url(" + $(this).attr("data-background") +")")
})

// magnificPopup//
$('.video-popup').magnificPopup({
  type: 'iframe'
  
});
var typed= new Typed(".text",{
  strings:['Frontend Developer','Youtuber','Web Developer'],
  typeSpeed:100,
  backSpeed:100,
  backDelay:1000,
  loop:true
});

})(jQuery);