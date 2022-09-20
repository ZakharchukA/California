

$(document).ready(function(){
    $( function() {
        $( "#accordion" ).accordion({
            collapsible: true
        });
    } );

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        smartSpeed: 800,
        autoHeight: true,
        lazyLoad:true,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },
            
            1000:{
                items:1
            }
        }
    });
});

// mobile menu
$(document).ready(function(){
    $('.nav-button').click(function(){
        $('body').toggleClass('nav-open');
    });
});


setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 500);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
}


AOS.init();
new WOW().init();