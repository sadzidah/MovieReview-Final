// by Sadžida Halvadžić
// Add smooth scrolling to all links using jQuery

$(document).ready(function(){   // when the webpage loads
  $("a").on('click', function(event) {  // we put event listener on <a> and if it gets clicked..
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      // We animate scrolldown from that location to location specified by href attribute in anchor link
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});
