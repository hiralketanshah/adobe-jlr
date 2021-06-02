var CONST = {
    REQUIRED_MESSAGE: 'Error: Please fill out this field.',
};

(function (window, $) {
    'use strict';

    /*
    /* TemplateA => 1 Column with Large Promo Image
    *  TemplateB => 2 Column with Small Promo Image 
    *  TemplateC => 1 Column with Large Promo Panel
    *  TemplateD => 1 Column with Dual Promo Panel
    *  TemplateE => External Link with Large Promo Image
    */

    // Remove the second multi field in right pane once templateC is choosen in the drop down.
    $(document).on("change", ".template-selector", function () {
        if ($(".template-selector").val() === "templateC") {
            if ($("[data-promo-panel='true']").find("coral-multifield-item").length > 1) {
                $("[data-promo-panel='true']").find("coral-multifield-item:last").remove();
            }
        }
    });

    // Limit the maximum multi field set for each template. Use maxlimit data attribute to determine value.
    $(document).on(
        "dialog-ready",
        function () {
            $(".coral3-Button").click(
                function () {
                    if ($("[value='templateA']").attr('selected') || $("[value='templateB']").attr('selected') || $("[value='templateC']").attr('selected') || $("[value='templateD']").attr('selected')) {
                        var field = $(this).parent();
                        var size = field.attr("data-maxlimit-" + $(".template-selector").val());
                        if (size) {
                            var ui = $(window).adaptTo("foundation-ui");
                            var totalLinkCount = $(this).parent().children(
                                'coral-multifield-item').length;
                            if (totalLinkCount >= size) {
                                ui.alert("Warning", "Maximum " + size +
                                    " item(s) are allowed!", "notice");
                                return false;
                            }
                        }
                    }
                });
        });

    //Validate if the first CTA text box is authored
    $(window).adaptTo("foundation-registry").register("foundation.validation.validator", {
        selector: "input[data-cta-text-templatec='true']",
        validate: function (el) {
            if ($("[value='templateC']").attr('selected')) {
                if ($(el).first().val().length < 1) {
                    return CONST.REQUIRED_MESSAGE;
                }
            }
        }
    });

    //Validate if the first Promo Summary field text area is authored
    $(window).adaptTo("foundation-registry").register("foundation.validation.validator", {
        selector: "coral-multifield div[data-promo-summary-templatec='true']",
        validate: function (el) {
            if ($("[value='templateC']").attr('selected')) {
                if ($(".promo-summary-templatec").first().val().length < 1) {
                    return CONST.REQUIRED_MESSAGE;
                }
            }
        }
    });

    //Validate if the first Promo Header field text area is authored
    $(window).adaptTo("foundation-registry").register("foundation.validation.validator", {
        selector: "coral-multifield div[data-promo-header-templatec='true']",
        validate: function (el) {
            if ($("[value='templateC']").attr('selected')) {
                if ($(".promo-header-templatec").first().val().length < 1) {
                    return CONST.REQUIRED_MESSAGE;
                }
            }
        }
    });

    //Validate if the both CTA text box is authored if 2 multi field is enabled
    $(window).adaptTo("foundation-registry").register("foundation.validation.validator", {
        selector: "input[data-cta-text-templated='true']",
        validate: function (el) {
            if ($("[value='templateD']").attr('selected')) {
                if ($(el).val().length < 1) {
                    return CONST.REQUIRED_MESSAGE;
                }
            }
        }
    });

    //Validate if the both Promo Summary field text area is authored
    $(window).adaptTo("foundation-registry").register("foundation.validation.validator", {
        selector: "coral-multifield div[data-promo-summary-templated='true']",
        validate: function (el) {
            if ($("[value='templateD']").attr('selected')) {
                if ($(el).closest('.richtext-container').find("[data-promo-summary-templated='true']").val().length < 1) {
                    return CONST.REQUIRED_MESSAGE;
                }
            }
        }
    });

    //Validate if the both Promo Header field text area is authored
    $(window).adaptTo("foundation-registry").register("foundation.validation.validator", {
        selector: "coral-multifield div[data-promo-header-templated='true']",
        validate: function (el) {
            if ($("[value='templateD']").attr('selected')) {
                if ($(el).closest('.richtext-container').find("[data-promo-header-templated='true']").val().length < 1) {
                    return CONST.REQUIRED_MESSAGE;
                }
            }
        }
    });





    // Validate if the first CTA link is authored 
    $(window).adaptTo("foundation-registry").register("foundation.validation.validator", {
        selector: "[data-cta-link-templatec='true'] span input",
        validate: function (el) {
            if ($("[value='templateC']").attr('selected')) {
                if ($(el).first().val().length < 1) {
                    return CONST.REQUIRED_MESSAGE;
                }

            }
        }
    });

    // Validate if the CTA link is authored (upto 2)
    $(window).adaptTo("foundation-registry").register("foundation.validation.validator", {
        selector: "[data-cta-link-templated='true'] span input",
        validate: function (el) {
            if ($("[value='templateD']").attr('selected')) {
                if ($(el).val().length < 1) {
                    return CONST.REQUIRED_MESSAGE;
                }
            }
        }
    });

})(window, Granite.$);

// Validate the image is authored depending on the choosen template
$(window).adaptTo("foundation-registry").register("foundation.validation.validator", {
    selector: "coral-fileupload[data-mandatory-templatea='true'],coral-fileupload[data-mandatory-templateb='true'],coral-fileupload[data-mandatory-templatec='true'],coral-fileupload[data-mandatory-templated='true'],coral-fileupload[data-mandatory-templatee='true']",
    validate: function (el) {
        if ($("[value='templateA']").attr('selected')) {
            if (!$('.img-templatea').find('div.cq-FileUpload-thumbnail').find('div.cq-FileUpload-thumbnail-img').find("img").length) {
                return CONST.REQUIRED_MESSAGE;
            }

        } else if ($("[value='templateB']").attr('selected')) {
            if (!$('.img-templateb').find('div.cq-FileUpload-thumbnail').find('div.cq-FileUpload-thumbnail-img').find("img").length) {
                return CONST.REQUIRED_MESSAGE;
            }

        } else if ($("[value='templateC']").attr('selected')) {
            if (!$('.img-templatec').find('div.cq-FileUpload-thumbnail').find('div.cq-FileUpload-thumbnail-img').find("img").length) {
                return CONST.REQUIRED_MESSAGE;
            }

        } else if ($("[value='templateD']").attr('selected')) {
            if ($('.img-templated').find('div.cq-FileUpload-thumbnail').find('div.cq-FileUpload-thumbnail-img').find("img").length < 2) {
                return CONST.REQUIRED_MESSAGE;
            }

        } else if ($("[value='templateE']").attr('selected')) {
            if (!$('.img-templatee').find('div.cq-FileUpload-thumbnail').find('div.cq-FileUpload-thumbnail-img').find("img").length) {
                return CONST.REQUIRED_MESSAGE;
            }

        }
    }

});

// Validator for to hide/show customer portal link and aria-label
$(window).adaptTo("foundation-registry").register("foundation.validation.validator", {
    selector: ".primary-nav-cp",
    validate: function (el) {
        var status = $(el).prop("checked");
        if (status) {
            $(el).parent().parent().find(".primary-nav-cp-link").parent().show();
            $(el).parent().parent().find(".primary-nav-cp-aria").parent().show();
            $(el).parent().parent().find(".primary-nav-cp-icon").parent().show();
        } else {
            $(el).parent().parent().find(".primary-nav-cp-link").parent().hide();
            $(el).parent().parent().find(".primary-nav-cp-aria").parent().hide();
            $(el).parent().parent().find(".primary-nav-cp-icon").parent().hide();
        }
    }
});

$(window).on("dialog-ready", function() {
    $('.primary-nav-cp').each(function(index, value){
        var status = $(this).prop("checked");
        if (status) {
            $(this).parent().parent().find(".primary-nav-cp-link").parent().show();
            $(this).parent().parent().find(".primary-nav-cp-aria").parent().show();
            $(this).parent().parent().find(".primary-nav-cp-icon").parent().show();
        } else {
            $(this).parent().parent().find(".primary-nav-cp-link").parent().hide();
            $(this).parent().parent().find(".primary-nav-cp-aria").parent().hide();
            $(this).parent().parent().find(".primary-nav-cp-icon").parent().hide();
        }
    });
});

// Validator to make customer portal aria label as mandatory
$(window).adaptTo("foundation-registry").register("foundation.validation.validator", {
    selector: ".primary-nav-cp-aria",
    validate: function (el) {
        var status = $(".primary-nav-cp").prop("checked");
        if (status) {
            if( $(".primary-nav-cp-aria").val().length < 1)
           {
               return CONST.REQUIRED_MESSAGE;
           }
        }
    }
});