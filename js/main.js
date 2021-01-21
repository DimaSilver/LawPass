$(function () {
    $('.first-screen__slider').slick({
        prevArrow: '<button type="button" class="first-screen__slider-arrows first-screen__slider-prev"><img src="images/arrow-left.png" alt=""></button>',
        nextArrow: '<button type="button" class="first-screen__slider-arrows first-screen__slider-next"><img src="images/arrow-right.png" alt=""></button>',
        responsive: [
            {
                breakpoint: 871,
                settings: {
                    arrows: false,
                    dots: true,
                    dotsClass: 'first-screen__slider-dots'
                }
            }
        ]
    });
    $('.tab').on('click', function (e) {
        e.preventDefault();
        $($(this).siblings()).removeClass('tab--active');
        $($(this).closest('.tabs-wrapper').siblings().find('div')).removeClass('tabs-content--active');
        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tabs-content--active');
    });
    $('.menu__mobile').on("click", function(){
        $('.menu__list-mobile').slideToggle();
    });
    function myFunction() {
        if($(window).width() < 951)
        {
            $('.footer__top-inner').addClass('footer__top-inner--mobile');
            $('.footer__top-item__click').addClass('footer__top-item__click--mobile');
            $('.footer__top-item__title').on('click', function () {
                $('.footer__top-item__click.footer__top-item__click--mobile').toggleClass('footer__top-item__click--mobile__active');
            });

        }
        else
        {
            $('.footer__top-inner').removeClass('footer__top-inner--mobile');
            $('.footer__top-item__click').removeClass('footer__top-item__click--mobile');
        }
    }
    myFunction();
    $(window).resize(function() {
        myFunction();
    });
});
