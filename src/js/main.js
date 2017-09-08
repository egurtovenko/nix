/**
 * Created by egurtovenko on 08.09.17.
 */
$(".review__slider").slick({
    infinite: false,
    dots: true,
    responsive: [{

        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            infinite: true
        }

    }, {

        breakpoint: 780,
        settings: {
            slidesToShow: 2,
            dots: true
        }

    }, {

        breakpoint: 350,
        settings: {
            slidesToShow: 1,
            dots: true
        }
    }]
});
$(".posts__slider").slick({
    infinite: false,
    dots: false,
    responsive: [{

        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            infinite: false
        }

    }, {

        breakpoint: 780,
        settings: {
            slidesToShow: 2,
            dots: false
        }

    }, {

        breakpoint: 350,
        settings: {
            slidesToShow: 1,
            dots: true
        }
    }]
});