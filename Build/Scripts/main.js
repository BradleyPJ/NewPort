$(document).ready(function () {
  
  
  //Animation
  $('.about').addClass('animate');
  $('.aboutcopy').delay(200).queue(function () {
    $(this).addClass('animate');
  });
  $('.btn').delay(400).queue(function () {
    $(this).addClass('animate');
  });

  $('.social').delay(600).queue(function () {
    $(this).addClass('animate');
  });

  $('.image').delay(200).queue(function () {
    $(this).addClass('animate');
  });

  $('.galleryToggle').on('click', function (e) {
    $('.gallery').toggleClass("displayTrue"); //you can list several class names 
    e.preventDefault();
 });

});

