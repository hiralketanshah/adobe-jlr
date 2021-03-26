function openOverlay(event, url) {
            event.preventDefault();
            var modalUrl = url;
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
                                                //$('.mfp-iframe').prop('title', titleFrame).removeAttr('frameborder');
                                                // $('.mfp-close').attr('aria-label', closeFrame);
                                    }
                        }
            });
}

$(document).ready(function () {
            $("a[data-target=overlay]").click(function () {
                        var url = $(this).attr('href');
                        openOverlay(event, url);
            });
});
