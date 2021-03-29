function openOverlay(event, url) {
    event.preventDefault();
    var modalUrl = url;
    if (isBreakpointSmall() || isMobileDevice())
        return window.open(url);

    if (modalUrl.indexOf('?') > -1) {
        modalUrl += '&cnst_bnr=1';
    } else {
        modalUrl += '?cnst_bnr=1';
    }
    $.magnificPopup.open({
        closeMarkup: '',
        closeOnBgClick: true,
        fixedContentPos: true,
        alignTop: true,
        focus: '.mfp-close',
        type: 'iframe',
        items: {
            src: modalUrl
        },
        callbacks: {
            beforeClose: function beforeClose() {
                document.querySelector('.pageWrapper').removeAttribute('aria-hidden');
            },
            open: function open() {
                $('.mfp-iframe').wrap('<div class="mfp-iframe-alt-wrap"></div>');
                $('<button type="button" class="mfp-close alt"></button>').insertBefore('.mfp-iframe');
                $('.mfp-bg').addClass('mfp-bg--whitened');
                document.querySelector('.pageWrapper').setAttribute('aria-hidden', 'true');
            }
        }
    });
}
var getLargerBreakpoint = width => (
    width <= breakpoints.medium ? 'medium' : 'large'
);

var getBreakpointSize = (oldCalc = true) => {
    const width = oldCalc ? $(window).width() : window.innerWidth;
    return (width <= breakpoints.small) ? 'small' : getLargerBreakpoint(width);
};

var isBreakpointSmall = (oldCalc = true) => {
    return getBreakpointSize(oldCalc) === 'small';
};
var breakpoints = {
    small: 740,
    medium: 900,
    wider: 1000,
    current: null
};
var isMobileDevice = () => {
    return (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch || navigator.msMaxTouchPoints); // eslint-disable-line
};
$(document).ready(function() {
    $("a[data-target=overlay]").click(function() {
        var url = $(this).attr('href');
        openOverlay(event, url);
    });
});