$(document).ready(function() {
    $('.comment-slider__list').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: `<button type='button' class='slick-prev pull-left'><i class="revius-icon fa-solid fa-arrow-left"></i></button>`,
        nextArrow: `<button type='button' class='slick-next pull-right'><i class="next-icon fa-solid fa-arrow-right"></i></button>`,
        dots: true,
    });
});