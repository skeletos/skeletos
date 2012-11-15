/* Author:

*/
jQuery(function() {
  return $("a.scroll").click(function() {
    $("html,body").animate({
      scrollTop: $(this.hash).offset().top
    }, 750);
    return false;
  });
});




