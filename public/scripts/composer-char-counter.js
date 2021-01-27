$(document).ready(function() {
  const textArea = $('#tweet-text');
  
  textArea.on('keyup', function() {
    const length = 140;
    const counter = $(this).closest('form').find('.counter');
    const chars = $(this).val().length;
    counter.html(length - chars);

    if (length < chars) {
      counter.addClass('red');
    } else {
      counter.removeClass('red');
    }
  });
});