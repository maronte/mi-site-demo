/** Smooth Scroll */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  /** Navbar Color Change */
  $(document).ready(function(){
    var $cabecera = $('#navbar');
    var previousScroll = 0;
    $(window).scroll(function(event){
       var scroll = $(this).scrollTop();
       if (scroll > previousScroll || scroll > 200){
           $cabecera.addClass('navbar-scrolled');
       } else {
           $cabecera.removeClass('navbar-scrolled');
       }
       previousScroll = scroll;    });
 
  });

