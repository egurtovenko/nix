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

        breakpoint: 321,
        settings: {
            slidesToShow: 1,
            dots: true
        }
    }]
});