import $ from "jquery";
import {toggleClasses} from "../menuTrigger/menuTrigger.js";

let $filteredBlocks = $('body>*').filter('div').add('header')
                                               .add('footer')
                                               .not('.js-menu')
                                               .not('.js-menu-trigger'),
    $menuItem = $('.js-menu-item');

$menuItem.on('click', function(e) {
    e.preventDefault();
    let target = $(this).attr('href'),
        $target = $(target);

    if (!$(this).hasClass('is-active')) {
        $('.js-menu-item.is-active').removeClass('is-active');
        $(this).addClass('is-active');
    }

    $('html, body').animate({
        scrollTop: $target.offset().top
    }, 700);

    toggleClasses();
});

let blockPositions = [],
    calculateBlockPositions = function() {
        blockPositions = [];

        for (let i = 0; i < $filteredBlocks.length; i++) {
            let blockTop = $filteredBlocks.eq(i).offset().top,
                blockBottom = blockTop + $filteredBlocks.eq(i).height(),
                position = [blockTop, blockBottom];

            blockPositions.push(position); // [[]]
        }
    },
    checkActiveBlock = function() {
        let currentPos = $(window).scrollTop(),
            $menuItemActive = $menuItem.filter('.is-active'),
            currentBlockId;

        for (let i = 0; i < blockPositions.length; i++) {
            if (currentPos >= blockPositions[i][0] && currentPos < blockPositions[i][1]) {
                currentBlockId = $filteredBlocks.eq(i).attr('id');

                $menuItemActive.removeClass('is-active');
                $menuItem.filter('[href = "#' + currentBlockId + '"]').addClass('is-active');
                break;
            }
        }
    };

$(window).on('load resize', function() {
    calculateBlockPositions();
    checkActiveBlock();
});

$(window).on('scroll', function() {
    checkActiveBlock();
});
