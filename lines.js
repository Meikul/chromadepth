var colored = false;
console.log('loaded');
$(document).ready(function () {
  $(document).click(function () {
    console.log('clicked');
    if(colored){
      $('.line').css('background', 'white');
    }
    else{
      $('#red-line').css('background', '#f00');
      $('#green-line').css('background', '#0f0');
      $('#blue-line').css('background', '#00f');
    }
    colored = !colored;
  });
});