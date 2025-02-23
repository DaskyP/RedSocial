$(document).ready(function() {
    $('.btn-like').on('click', function () {
      const icon = $(this).find('img');
      const currentSrc = icon.attr('src');
      if (currentSrc.includes('like.svg')) {
        icon.attr('src', 'like2.svg');
      } else {
        icon.attr('src', 'like.svg');
      }
    });
  });