$(document).ready(function () {
  
  
  //Animation
  Animate('.about', 0, 'animate');
  Animate('.aboutcopy', 200, 'animate');
  Animate('.btn', 200, 'animate');
  Animate('.social', 600, 'animate');
  Animate('.image', 200, 'animate');

  Animate('#image-item-5', 0, 'animate');
  Animate('#image-item-10', 200, 'animate');
  Animate('#image-item-4', 200, 'animate');
  Animate('#image-item-3', 400, 'animate');
  Animate('#image-item-9', 400, 'animate');
  Animate('#image-item-15', 400, 'animate');
  Animate('#image-item-14', 600, 'animate');
  Animate('#image-item-8', 600, 'animate');
  Animate('#image-item-2', 600, 'animate');
  Animate('#image-item-20', 600, 'animate');
  Animate('#image-item-13', 800, 'animate');
  Animate('#image-item-7', 800, 'animate');
  Animate('#image-item-1', 800, 'animate');
  Animate('#image-item-19', 800, 'animate');
  Animate('#image-item-18', 1000, 'animate');
  Animate('#image-item-12', 1000, 'animate');
  Animate('#image-item-6', 1000, 'animate');
  Animate('#image-item-11', 1200, 'animate');
  Animate('#image-item-17', 1200, 'animate');
  Animate('#image-item-16', 1400, 'animate');
    
    
    

  function Animate(id, delay, animationClass) {
    $(id).delay(delay).queue(function () {
      $(this).addClass(animationClass);
    });
  }

  $('.galleryToggle').on('click', function (e) {
    $('.gallery').toggleClass("displayTrue"); //you can list several class names 
    e.preventDefault();
  });

});


