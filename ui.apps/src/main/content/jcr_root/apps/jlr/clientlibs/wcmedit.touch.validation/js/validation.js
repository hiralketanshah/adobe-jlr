(function (window, $) {
    'use strict';
    $(window).on("dialog-ready", function() {
    setTimeout(function(){ $(".rte-toolbar").css("visibility","visible") }, 800);
    });
    /*
     * Generic regular expression validation for text fields.
     *
     * Dialog field requires the data-foundation-validation attribute
     * containing 'regex' and a data-regex attribute with the regular
     * expression.
     *
     * Example:
     * @DialogField(fieldLabel = "Name", name = "./name", ranking = 100,
     *     additionalProperties={
     *             @Property(name = "regex", value = "^data-.+$"),
     *             @Property(name = "foundation-validation", value = "regex")})
     */
    $(window).adaptTo("foundation-registry").register("foundation.validation.validator", {
        selector: "[data-foundation-validation~='regex'],[data-validation~='regex']",
        validate: function (el) {
            var $el = $(el);
            var v = $el.val();
            var regexStr = $el.data('regex');

            if (!regexStr) {
                console.log('Missing regex string for ', el);
                return;
            }

            try {
                var re = new RegExp(regexStr);

                if (!v) v = '';

                if (v.match(re)) {
                    return;
                }

                return 'Value [' + v + '] is not valid.';
            } catch (e) {
                console.log(e);
            }
        }
    });

})(window, Granite.$);


(function (window, $) {
    'use strict';
    $(document).on(
        "dialog-ready",
        function () {

            $(".coral3-Button").click(
                function () {
                    var field = $(this).parent();
                    var size = field.attr("data-maxlimit");
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

                });
        });


    /**
     * Rich-Text Editor Max Length Validation
     *
     * @class RichTextMaxLengthValidation
     * @classdesc registers a new validator to the foundation-registry service focused on the
     * cq/gui/components/authoring/dialog/richtext component.
     *
     * Usage: the attribute maxlength to the richtext component, example: maxlength="100"
     */
    var RichTextMaxLengthValidation = function () {
        var CONST = {
            TARGET_GRANITE_UI: '.coral-RichText-editable',
            ERROR_MESSAGE: 'Your character limit {0} exceeds the allowed limit of {1}!',
            REQUIRED_MESSAGE: 'Please fill the value',
        };
        /**
         * Initializes the RichTextMaxLengthValidation
         */
        function init() {
            // register the validator which includes the validate algorithm
            $(window).adaptTo('foundation-registry').register('foundation.validation.validator', {
                selector: CONST.TARGET_GRANITE_UI,
                validate: function (el) {
                    var $rteField = $(el);
                    var $field = $rteField.closest('.richtext-container').find('input.coral-Form-field');
                    var compName = $(".cq-dialog-content").data("name");
                    var maxLength = $field.data('maxlength');
                    var required;
                    if (compName) {
                        maxLength = $field.data(compName + '-maxlength');
                        required = $field.data(compName + '-required');
                    }
                    var textLength = $rteField.text().trim().length;
                    if (maxLength && textLength > maxLength) {
                        return Granite.I18n.get(CONST.ERROR_MESSAGE, [textLength, maxLength]);
                    }
                    if (required && textLength < 1) {
                        return Granite.I18n.get(CONST.REQUIRED_MESSAGE);
                    }
                    return null;
                }
            });
            // execute Jquery Validation onKeyUp
            $(document).on('keyup', CONST.TARGET_GRANITE_UI, function (e) {
                executeJqueryValidation($(this));
            });
        }
        /**
         * Execute foundation.validation.validator's validate algorithm.
         */
        function executeJqueryValidation(el) {
            var validationApi = el.adaptTo('foundation-validation');
            if (validationApi) {
                validationApi.checkValidity();
                validationApi.updateUI();
            }
        }
        return {
            init: init
        }
    }();
    RichTextMaxLengthValidation.init();
})(window, Granite.$);

(function ($, Coral) {
    "use strict";

    var registry = $(window).adaptTo("foundation-registry");

    // Validator for required for multifield max and min items
    registry.register("foundation.validation.validator", {
        selector: "[data-validation=minmax]",
        validate: function (element) {
            var el = $(element);
            let max = el.data("max-items");
            let min = el.data("min-items");
            let items = el.children("coral-multifield-item").length;
            let domitems = el.children("coral-multifield-item");
            if (items > max) {
                /* Use below line if you don't want to add item in multifield more than max limit */
                domitems.last().remove();
                return "You cannot exceed maximum of " + max + " items."
            }
            if (items < min) {
                return "Your items count is lesser than the minimum limit of " + min + " items."
            }
        }
    });

})(jQuery, Coral);


// Validator for to hide/show alt text field
$(window).adaptTo("foundation-registry").register("foundation.validation.validator", {
    selector: ".img-decorative",
    validate: function (el) {
        var status = $(el).prop("checked");
        if (status) {
            $(el).parent().parent().find(".img-alt").parent().hide();
        } else {
            $(el).parent().parent().find(".img-alt").parent().show();
        }
    }
});

$(window).on("dialog-ready", function() {
    $('.img-decorative').each(function(index, value){
        var status = $(this).prop("checked");
        if (status) {
            $(this).parent().parent().find(".img-alt").parent().hide();
        } else {
            $(this).parent().parent().find(".img-alt").parent().show();
        }
    });
});