$(window).adaptTo("foundation-registry").register("foundation.validation.validator", {
    selector: "div[data-hero-item-component='true'] div[data-hero-item-header='true']",
    validate: function(el) {
        if ($(el).closest('.richtext-container').find('[data-hero-item-header]').val().length < 1) {
            return "Error: Please fill out this field.";
        }
    }
});

$(window).adaptTo("foundation-registry").register("foundation.validation.validator", {
    selector: "div[data-hero-item-component='true'] coral-fileupload[data-hero-item-image='true']",
    validate: function(el) {
        if (!$(el).find('.cq-FileUpload-thumbnail-img').is(':parent') && !$(el).parent().parent().parent().hasClass('hide')) {
            return "Error: Please fill out this field.";
        }
    }
});