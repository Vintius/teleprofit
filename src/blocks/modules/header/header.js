import $ from "jquery";

let $window = $(window),
    $fullHeightElem = $('.js-full-window-height');

$window.on('load resize', function() {
    let windowHeight = $window.height();

    $fullHeightElem.height(windowHeight);
});