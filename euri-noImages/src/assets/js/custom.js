// Custom JavaScript
$(document).ready(function() {
    "use strict";
    
    // header
    function headerSticky(){
        var windowPos=$(window).scrollTop();
        if( windowPos>150){
            $('#euri-header-global').addClass("header-fixed");
            $('.main-navigation').addClass("euri-menu-alt").removeClass("euri-menu-default");
        } else {
            $('#euri-header-global').removeClass("header-fixed");
            $('.main-navigation').addClass("euri-menu-default").removeClass("euri-menu-alt");
        }
    }
    headerSticky();
    $(window).on('scroll',headerSticky);

    // mobile menu
    $('#euri-menu-button').on('click', function() { 
        // $('.slicknav_nav').slideToggle(); 
        $(this).toggleClass('is-active');
        $('.euri-nav').toggleClass('is-active');
    });

    // testimonial
    var swiper = new Swiper(".euri-testimonial-carousel", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        speed: 1200,
        //effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        pagination: {
            el: ".swiper-pagination.euri-testimonial__dots",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next.euri-testimonial__next",
            prevEl: ".swiper-button-prev.euri-testimonial__prev",
        },
        autoplay: {
            delay: 6000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true
        },
        breakpoints: {
          782: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        },
    });
    
     // testimonial
    var swiper = new Swiper(".euri-testimonial-single", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        speed: 1200,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        pagination: {
            el: ".swiper-pagination.euri-testimonial__dots",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next.euri-testimonial__next",
            prevEl: ".swiper-button-prev.euri-testimonial__prev",
        },
        autoplay: {
            delay: 6000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true
        },
    });
    
    // recent post
    var swiper = new Swiper(".euri-recentposts-carousel", {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        speed: 1200,
        //effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        pagination: {
            el: ".swiper-pagination.euri-recentposts__dots",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next.euri-recentposts__next",
            prevEl: ".swiper-button-prev.euri-recentposts__prev",
        },
        autoplay: {
            delay: 6000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true
        },
        breakpoints: {
          782: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        },
    });
    
    // Sroll to top
    var offset = 800;
    var duration = 400;
    $(window).scroll(function() {
    if ($(this).scrollTop() > offset) {
        $('#take-to-top').addClass("active");
    } else {
        $('#take-to-top').removeClass("active");
    }
    });
    $('#take-to-top').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, duration);
        return false;
    });
    
    // video popup
    $(".euri-video-popup").venobox(); 
    
    // menu scroll	
    var headeroffset = $('#euri-header-global').height();
    $('.euri-nav a[href^="#"], .euri-header-btn[href^="#"], .euri-scroll-link').on('click', function(){  
        event.preventDefault();  
        var target = this.hash;
        var $target = $(target);
        if($target.length){
            $('html, body').animate({
                scrollTop: $($target).offset().top - headeroffset - 60
            }, 500);
            return false;
        }
    });
    
    // responsive scroll
    var mnavoffset = $('#euri-responsive-header').height();
    $('.euri-responsive-header-menu a[href^="#"]').on('click', function(){  
        event.preventDefault();  
        var target = this.hash;
        var $target = $(target);
        if($target.length){
            $('html, body').animate({
                scrollTop: $($target).offset().top - mnavoffset + 40
            }, 500);
            return false;
        }
    });
     
    // scrollspy   
    var win = $(window);
    var smallwin = $(window);
    function scrollSpy() {
        $("section").each(function () {
            if (win.scrollTop() >= $(this).offset().top - 180) {
                $(".euri-header-global-content a[href='#" + $(this).attr("id") + "']").addClass("active").parent().siblings().find("a").removeClass("active");
            }
            if (smallwin.scrollTop() >= $(this).offset().top - 180) {
                $(".slicknav_menu li a[href='#" + $(this).attr("id") + "']").addClass("active").parent().siblings().find("a").removeClass("active");
            }
        });
    }
    win.on("scroll", scrollSpy);
    smallwin.on("scroll", scrollSpy);

    // sectionAnchor - link to section from another page
    function sectionAnchor() {
    var navoffset = $('#euri-header-global').height();
        var hash = window.location.hash;
        if (hash !== '') {
            setTimeout(function() {
                $('html, body').stop().animate({
                    scrollTop: $(hash).offset().top - navoffset - 40
                }, 800);
                history.pushState('', document.title, window.location.pathname);
            }, 500);
        }
    } sectionAnchor();

    // responsiveAnchor - link to section from another page
    function responsiveAnchor() {
    var windowWidth=$(window).width();
        if(windowWidth<992){
            var mnavoffset = $('#euri-responsive-header').height();
            var hash = window.location.hash;
            if (hash !== '') {
                setTimeout(function() {
                    $('html, body').stop().animate({
                        scrollTop: $(hash).offset().top - mnavoffset + 40
                    }, 800);
                    history.pushState('', document.title, window.location.pathname);
                }, 500);
            }
        }
    } responsiveAnchor();
    
    // counter
    $(".euri-counter").appear(function () {
        $(".counting-number").countTo();
    });
    
    // contact form
    $(function () {
        var v = $("#contactform").validate({
            submitHandler: function (form) {
                $(form).ajaxSubmit({
                    target: "#contactresult",
                    clearForm: true
                });
            }
        });
    });

});
// document ready end

// on load
$(window).on('load', function(){
	"use strict";
	$('.euri-preloader').delay(400).fadeOut(500);
});