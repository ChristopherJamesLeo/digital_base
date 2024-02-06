$(document).ready(function(){
    window.onscroll = function(){

        let getScrollAmount = $(this).scrollTop();

    }

    $("#package_carousel").owlCarousel({
        items : 1,
        loop: true,
        nav: false,
        responsive : {
            0 : {
                stagePadding : 20,
            },

            450 : {
                stagePadding : 30,
            },
            470 : {
                stagePadding : 50,
            }
        }
    })

    $("#client_say_carousel").owlCarousel({
        items:1,
        loop : true,
        nav : true,
        dots : false,
        navText: ["<button class='custom-prev'><i class='fas fa-arrow-left'></i></button>", "<button class='custom-next'><i class='fas fa-arrow-right'></i></button>"]
    })
})

// wow js
new WOW().init();
// end wow js