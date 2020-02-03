import $ from "jquery";

export function toggleClasses(){
    $('.js-menu').toggleClass('menu--is-opened');
    $('.js-menu-trigger').toggleClass('menuTrigger--is-opened');
}

$('.js-menu-button').click(toggleClasses);