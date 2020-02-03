import $ from "jquery";
import "slick-slider";

$(document).ready(function(){
    $('.js-questions-slider').slick({
        infinite: true,
        // speed: 300,
        slidesToShow: 1,
        fade: true,
        nextArrow: '<button type="button" class="slick-next">СЛЕДУЮЩИЙ ВОПРОС</button>'
    });
});