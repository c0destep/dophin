$('.masthead').visibility({
    once: false,
    onBottomPassed: function () {
        $('.fixed.menu').transition('fade in');
    },
    onBottomPassedReverse: function () {
        $('.fixed.menu').transition('fade out');
    }
});

$('.ui.sidebar').sidebar('attach events', '.toc.item');

//<![CDATA[preloader
$(window).on('load', function () {
  $('#preloader .inner').fadeOut();
  $('#preloader').delay(350).fadeOut('slow'); 
  $('body').delay(350).css({'overflow': 'visible'});
})
//]]>


