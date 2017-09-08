/**
 * Created by egurtovenko on 08.09.17.
 */
$(".review__slider").slick({

    // normal options...
    infinite: false,
    dots: true,
    // the magic
    responsive: [{

        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            infinite: true
        }

    }, {

        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            dots: true
        }

    }, {

        breakpoint: 300,
        settings: "unslick" // destroys slick

    }]
});