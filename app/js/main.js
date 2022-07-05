$(function () {
    // tabs
    $('.catalog-tabs .tab').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.catalog-tabs').find('.tab-item').removeClass('active-tab').hide();
        $('.catalog-tabs .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });


    $('.specials-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        prevArrow: '<button type="button" class="slick-prev specials-slider-btn btn-primary"><svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 1L1 5L5 9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
        nextArrow: '<button type="button" class="slick-next specials-slider-btn btn-primary"><svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 9L5 5L1 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>'
    });

})