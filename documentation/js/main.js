/*-----------------------------------------------------------------------------------

    CUSTOM JS - FRONT-END SCRIPTS
 
-----------------------------------------------------------------------------------*/

(function ($) {

'use strict';

$(function() {  //same as $(document).ready(); (Document is ready when the only HTML DOM is loaded, NOT its content e.g Images, Videos etc)


/*-----------------------------------------------------------------------------------*/
/*  FOUNDATION FRAMEWORK
/*-----------------------------------------------------------------------------------*/

    $('code').each(function() {
        $(this).text($(this).html());
    });

	/*-----------------------------------------------------------------------------------*/
	/*  SMOOTH SCROLLING
	/*-----------------------------------------------------------------------------------*/

	var $root = $('html, body');

	$('a[href^="#"]').click(function() {
		var href = $.attr(this, 'href');

		$root.animate({
			scrollTop: $(href).offset().top
		}, 800, function () {
			window.location.hash = href;
		});

		return false;
	});


	   //Nav-link's to active as you scroll through sections
		 var sections = document.querySelectorAll("section");
		 var navLink = document.querySelectorAll(".sticky li a");
		 window.onscroll = () => {
			 var current = "";
		 
			 sections.forEach((section) => {
				 var sectionTop = section.offsetTop;
				 if (pageYOffset >= sectionTop - 60) {
					 current = section.getAttribute("id"); 
				 }
			 });
		 
			 navLink.forEach((a) => {
				 a.classList.remove("active");
				 if (a.classList.contains(current)) {
					 a.classList.add("active");
				 }
			 });
		 };

});



    
})(jQuery);