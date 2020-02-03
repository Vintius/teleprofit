import $ from "jquery";

let $sliderSamples  = $('.js-samples-slider'),
    $sliderTabs     = $('.js-slider-tabs'),
    $tabslinks      = $('.js-slider-tablink');

$sliderTabs.slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.js-samples-slider'
});

$sliderSamples.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.js-slider-tabs',
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    // variableWidth: true,
    // centerMode: true,
    focusOnSelect: true
});

//  Change(sync) slider to tablinks
$tabslinks.on('click', function() {
    let tabIndex = $(this).closest('.slick-slide').index();

    $sliderSamples.slick('slickGoTo', tabIndex);
});