import $ from 'jquery';

window.jQuery = window.$ = $;

import './lib/foundation-explicit-pieces';
import Scrollbar from './lib/smooth-scrollbar';
import Flickity from './lib/flickity';
// import Chart from 'chart.js';
// import Samples from './lib/utils.js';


$(document).foundation();

/* 
* ScrollBar
*/

Scrollbar.initAll({
    damping: 0.36,
    thumbMinSize: 20,
    renderByPixels: true,
    continuousScrolling: false,
    alwaysShowTracks: true
});

if($(".categories-menu__container").length) {
    var el = document.querySelector('.categories-menu__container');
    var scrollbar = Scrollbar.init(el);
}   

if($(".scroll-watcher").length) {
    var $container = $('.scroll-watcher');
    $container.on("down.zf.accordionMenu up.zf.accordionMenu",
    function () {
        $("#sportMenuContainer").removeClass("mini");
    });
    $container.on("transitionend down.zf.accordionMenu up.zf.accordionMenu",
        function () {
            if (Foundation.MediaQuery.atLeast('medium')) {
                scrollbar.update(el);
            }
    });

}


    
/* 
* Off-canvas menus 
*/
$(window).on('resize load',function() {

    //hide scroll for mobile
    // if (Foundation.MediaQuery.is('small only')) {
    //     $(".scroll").getNiceScroll().hide();
    // }
    // else {
    //     $(".scroll").getNiceScroll().resize();
    // }

    //categoriesMenu
  
    if ($('#categoriesMenu').length) {
        if (Foundation.MediaQuery.atLeast('xlarge')) {
            $('#categoriesMenu').addClass("page-grid__item categories-menu").removeClass("off-canvas position-bottom");
        } else {
            $('#categoriesMenu').removeClass("page-grid__item categories-menu").addClass("off-canvas position-bottom");
            initLiveTabs();
        }
    }
    // ProfileMenu
    if ($('#profileSidebar').length) {
        if (Foundation.MediaQuery.atLeast('large')) {
            $('#profileSidebar').removeClass("off-canvas position-right");
        } else {
            $('#profileSidebar').addClass("off-canvas position-right");
        }
    }

    //betslipArea
    if($('#betslipArea').length) {
        if (Foundation.MediaQuery.atLeast('xxlarge')) {
            $('#betslipArea').addClass("page-grid__item betslip-area").removeClass("off-canvas position-bottom");
        }
        else {
            $('#betslipArea').removeClass("page-grid__item betslip-area").addClass("off-canvas position-bottom right");
        }
    }
    //accountMenu
    // if($('#accountMenu').length) {
    //     if (Foundation.MediaQuery.atLeast('medium')) {
    //         $('#accountMenu').removeClass("off-canvas position-top");
    //     }
    //     else {
    //         $('#accountMenu').addClass("off-canvas position-top");
    //     }
    // }
    // close all menus
    //$('#categoriesMenu, #accountMenu, #betslipArea').foundation('close');

    // if (!Foundation.MediaQuery.atLeast('xxxlarge')) {
    //     $('.select-size-1__container').foundation('_destroy');
    // }
});

/* 
* COLLAPSE / EXPAND 
*/
$(window).on('changed.zf.mediaquery load', function(event, newSize, oldSize) {
    var cntr = $('.tournament-odd-group');
    var cntr2 = $('.btn-toggle-hide');
    var cntr3 = $('.header__sport-menu');
    var cntr4 = $('.tournaments-menu');

    if(oldSize == 'medium' || oldSize == 'small' && cntr.hasClass('collapse-tournaments')) {
        cntr.removeClass('collapse-tournaments');
        cntr2.removeClass('collapse-tournaments');
    }
    if((oldSize == 'large' || oldSize == 'xlarge' || oldSize == 'xxlarge') && (newSize == 'medium' || newSize == 'small') && cntr.hasClass('collapse-tournaments')) {
        cntr.removeClass('collapse-tournaments');
        cntr2.removeClass('collapse-tournaments');
    }
    if((oldSize == 'medium' || oldSize == 'small') && (newSize == 'large' || newSize == 'xlarge' || newSize == 'xxlarge' || newSize == 'xxxlarge') && cntr3.hasClass('collapse')) {
        cntr3.removeClass('collapse');
        cntr4.removeClass('hide-blk');
    }
    if((oldSize == 'large' || oldSize == 'xlarge' || oldSize == 'xxlarge' || oldSize == 'xxxlarge') && (newSize == 'medium' || newSize == 'small')) {
        cntr3.addClass('collapse');
        cntr4.addClass('hide-blk');
    }
    if (Foundation.MediaQuery.is('small only') || Foundation.MediaQuery.is('medium only')) {
        var cntr3 = $('.header__sport-menu');
        var cntr4 = $('.tournaments-menu');
        cntr3.addClass('collapse');
        cntr4.addClass('hide-blk');
    }
});


/* 
* Selectbox "Select events" in sports-menu
*/
$('.select__item').click(function() {
    $('.select-size-1__container').foundation('close');
});

/* Collapse sport menu */
$('.sport-menu__collapse-all').click(function() {
    $('.sport-menu').foundation('hideAll');
});

/* init Flickity */
function initLiveTabs () {
    if(!!document.querySelector('.sportmenu-list--live')) {
        var elem = document.querySelector('.sportmenu-list--live');
        var flkty = new Flickity( elem, {
            cellAlign: 'left',
            contain: true, 
            groupCells: true,
            freeScroll: true,
            dragThreshold: 5,
            pageDots: false,
            arrowShape: {
                x0: 10,
                x1: 45, y1: 45,
                x2: 50, y2: 40,
                x3: 20
            }
        });
        var flkty = new Flickity( '.sportmenu-list--live', {});
    }
    if(!!document.querySelector('.sub-tabs--live')) {
        var elem = document.querySelector('.sub-tabs--live');
        var flkty = new Flickity( elem, {
            cellAlign: 'left',
            contain: true, 
            groupCells: true,
            freeScroll: true,
            dragThreshold: 5,
            pageDots: false,
            arrowShape: {
                x0: 10,
                x1: 45, y1: 45,
                x2: 50, y2: 40,
                x3: 20
            }
        });
        var flkty = new Flickity( '.sub-tabs--live', {});
    }    
}

/* Preloader */
$( document ).ready(function() {
    $('.loading').fadeOut();
});


/* my bets filter  */
$('[data-mobile-app-toggle] .button').click(function () {
  $(this).siblings().removeClass('is-active');
  $(this).addClass('is-active');
});