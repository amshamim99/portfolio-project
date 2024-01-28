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


})(jQuery);