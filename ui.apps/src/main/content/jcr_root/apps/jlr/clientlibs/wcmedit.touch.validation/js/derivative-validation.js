$(window).adaptTo("foundation-registry").register("foundation.validation.validator", {
    selector: "div[data-derivative-component='true'] div[data-derivative-header='true']",
    validate: function(el) {
        if ($(el).closest('.richtext-container').find('[data-derivative-header]').val().length < 1) {
            return "Error: Please fill out this field.";
        }
    }
});

$(window).adaptTo("foundation-registry").register("foundation.validation.validator", {
    selector: "div[data-derivative-container-component='true'] div[data-derivative-container-header='true']",
    validate: function(el) {
        if ($(el).closest('.richtext-container').find('[data-derivative-container-header]').val().length < 1) {
            return "Error: Please fill out this field.";
        }
    }
});

$(window).adaptTo("foundation-registry").register("foundation.validation.validator", {
    selector: "div[data-derivative-component='true'] coral-fileupload[data-derivative-image='true']",
    validate: function(el) {
        if (!$(el).find('.cq-FileUpload-thumbnail-img').is(':parent') && !$(el).parent().parent().parent().hasClass('hide')) {
            return "Error: Please fill out this field.";
        }
    }
});