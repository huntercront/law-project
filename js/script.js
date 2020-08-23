var nav = $('.blur');

$(window).scroll(function() {
    if ($(this).scrollTop() > 125) {
        $('.blur').addClass("blur-active");
    } else {
        $('.blur').removeClass("blur-active");
    }
});

function getScrollBarWidth() {
    var jQueryouter = jQuery('<div>').css({ visibility: 'hidden', width: 100, overflow: 'scroll' }).appendTo('body'),
        widthWithScroll = jQuery('<div>').css({ width: '100%' }).appendTo(jQueryouter).outerWidth();
    jQueryouter.remove();
    return 100 - widthWithScroll;
};
var scrollWidth = getScrollBarWidth();

function bodyLock() {
    $('body').addClass('noscroll').css('padding-right', scrollWidth + 'px')
    if ($(window).width() < 1680) {
        $('.header-container').css('margin-right', scrollWidth + 'px')
    } else {
        $('.header-container').css('padding-right', scrollWidth + 'px')
    }

}

function bodyFree() {
    $('body').removeClass('noscroll').css('padding-right', '0px')
    if ($(window).width() < 1680) {
        $('.header-container').css('margin-right', '0px')
    } else {
        $('.header-container').css('padding-right', '0px')
    }

}

$('.close-side-page').on('click', function(event) {
    $('.side-page').removeClass('open-side-page');
    bodyFree()
})

$('.side-page').on('click', function(event) {
        $('.side-page').removeClass('open-side-page');
        bodyFree()
    }).children()
    .click(function(e) {
        e.stopPropagation();
    })

$('.read-all-text').on('click', function(event) {
    $('.side-page').addClass('open-side-page');
    bodyLock()
})



$(".question-text").on('click', function(event) {
    var panel = $(this).next(".question-descr");
    if (panel.css('max-height') == '0px') {
        $(this).toggleClass('question-text-active')
        panel.css('max-height', panel.prop('scrollHeight') + "px")
    } else {
        panel.css('max-height', '0px');
        $(this).toggleClass('question-text-active')
    }
})

// mobile-nav

function menuShow() {
    $('.ham').addClass('active')
    $('.mob-blur').addClass('blur-active')
    $('.blur').addClass("menu-open");
    $('.nav-outer').addClass('menu-show');
    $('.header-overlay').addClass('overlay-active')
}

function menuhide() {
    $('.ham').removeClass('active')
    $('.mob-blur').removeClass('blur-active')
    $('.blur').removeClass("menu-open");
    $('.nav-outer').removeClass('menu-show');
    $('.header-overlay').removeClass('overlay-active')
}

$('.mobile-icon').on('click', function(event) {
    if ($('.nav-outer').hasClass('menu-show')) {
        menuhide()
    } else {
        menuShow()
    }
})
$('.nav-inner ul li a').on('click', function(event) {
    if ($('.nav-outer').hasClass('menu-show')) {
        menuhide()
    }
})
$('.header-overlay').on('click', function(event) {
    if ($('.nav-outer').hasClass('menu-show')) {
        menuhide()
    }
})

// modal
$('.close-modal').on('click', function(event) {
    $('.modal').removeClass('open-modal');
    setTimeout(function() {
        bodyFree();
    }, 300)
})
$('.main-button ').on('click', function(event) {
    $('.modal').addClass('open-modal');
    bodyLock();
    setTimeout(function() {
        $('.modal-form-inner .input-wrapper:first-child input').focus()
    }, 100)

})
$('.modal').on('click', function(event) {
        if ($('.modal').hasClass('open-modal')) {
            $('.modal').removeClass('open-modal');
            setTimeout(function() {
                bodyFree();
            }, 300)
        }
    }).children()
    .click(function(e) {
        e.stopPropagation();
    })