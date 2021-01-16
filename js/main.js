$(function () {
    $('.first-screen__slider').slick({
        prevArrow: '<button type="button" class="first-screen__slider-arrows first-screen__slider-prev"><img src="images/arrow-left.png" alt=""></button>',
        nextArrow: '<button type="button" class="first-screen__slider-arrows first-screen__slider-next"><img src="images/arrow-right.png" alt=""></button>'
    });
    $('.tab').on('click', function (e) {
        e.preventDefault();
        $($(this).siblings()).removeClass('tab--active');
        $($(this).closest('.tabs-wrapper').siblings().find('div')).removeClass('tabs-content--active');
        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tabs-content--active');
    });
});