// JavaScript Document  
var $ = jQuery;
$(window).on('scroll', function() {
    var $window = $(window).scrollTop();
    var bannerOffset = $('#producttrials').outerHeight(true);
    if ($window > bannerOffset) {
		$('#navbar').addClass('active',300);
		$('#firstview').addClass('active',300);
        $('a.top').fadeIn(300);
    } else {
		$('#navbar').removeClass('active',300);
		$('#firstview').removeClass('active',300);
        $('a.top').fadeOut(300);
    }
});


function toggleMenu() {
    $('ul.header-link').toggleClass('active');
}
window.blockMenuHeaderScroll = false;
$(window).on('touchstart', function(e) {
    if ($(e.target).closest('.owl-grab').length == 1) {
        blockMenuHeaderScroll = true;
    }
});
$(window).on('touchend', function() {
    blockMenuHeaderScroll = false;
});
$(window).on('touchmove', function(e) {
    if (blockMenuHeaderScroll) {
        e.preventDefault();
    }
});

function fadeOutTooltip() {
    setTimeout(function() {
        $('.code-input').tooltip('destroy');
    }, 800);
}
$(function() {
    $("#nav-btn").click(function() {
        $('#nav-menu').toggleClass('active');
        $('#nav-btn').toggleClass('active');
    });
    $(".nav-link").click(function() {
        $("#nav-menu").removeClass('active');
        $("#nav-btn").removeClass('active');
    });	
	
    $('ul.header-link li a').on('click', function() {
        $('ul.header-link').removeClass('active');
    })
    $('a.more').on('click', function(event) {
        event.preventDefault();
        var dest = 0;
        if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
            dest = $(document).height() - $(window).height();
        } else {
            dest = $(this.hash).offset().top;
        }
        $('html,body').animate({
            scrollTop: dest
        }, 1500, 'swing');
    })
    $('a.top').on('click', function(event) {
        $('html, body').animate({
            scrollTop: 0
        }, 1500);
        return false;
    })
    $(".brickk-wrapper header a.scroll-link").click(function(event) {
        event.preventDefault();
        var dest = 0;
        if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
            dest = $(document).height() - $(window).height();
        } else {
            dest = $(this.hash).offset().top - 100;
        }
        $('html,body').animate({
            scrollTop: dest
        }, 1500, 'swing');
    });
});