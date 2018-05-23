var action='click';
var speed='400';

$(document).ready(function(){
  //Question Handler
  $('li.q').on(action, function(){
    //select the next element
    $(this).next()
      .slideToggle(speed)
        .siblings('li.a')
          .slideUp();
    // Get the image for questions
    var img = $(this).children('img');
    $('img').not(img).removeClass('rotate');
    //Toggle rotate class
    img.toggleClass('rotate');    
  });
});
