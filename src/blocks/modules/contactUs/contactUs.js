import $ from "jquery";
import Inputmask from "jquery.inputmask";

$(document).ready(function() {
    $('.js-contact-us-tel').inputmask("+7(999)999-99-99");
});