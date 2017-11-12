$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: false,
        responsiveClass: true,
        margin: 10,
        responsive: {
            0: {
                items: 1,
                loop: true
            },
            1200: {
                items: 3
            }
        }
    });

        var touch 	= $('#touch-menu');
        var menu 	= $('nav');

        $(touch).click(function(e) {
            e.preventDefault();
            menu.slideToggle();
        });
        $(touch).click(
            function(){$(this).toggleClass('active')}
        );

});

