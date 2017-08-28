// fixed menu // navbar

$(document)
    .ready(function () {
        // fix menu when passed
        $('.masthead').visibility({
                once: false,
                onBottomPassed: function () {
                    $('.fixed.menu').transition('fade in');
                },
                onBottomPassedReverse: function () {
                    $('.fixed.menu').transition('fade out');
                }
            });
    });


//Smooth scroll to move services button down
$('.ui.animated.fade.large.blue.button').on('click', function () {
    $.smoothScroll({
        scrollElement: $('div.scrollme'),
        scrollTarget: '.ui.vertical.stripe.segment'
    });
    return false;
});