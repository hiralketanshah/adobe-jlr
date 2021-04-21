$(window).adaptTo("foundation-registry").register("foundation.validation.validator", {
    selector: "div[data-hero-item-title-banner-component='true'] div[data-hero-item-title-banner-header='true']",
    validate: function(el) {
        if ($(el).closest('.richtext-container').find('[data-hero-item-title-banner-header]').val().length < 1) {
            return "Error: Please fill out this field.";
        }
    }
});

$(window).adaptTo("foundation-registry").register("foundation.validation.validator", {
    selector: "div[data-hero-item-title-banner-component='true'] coral-fileupload[data-hero-item-title-banner-image='true']",
    validate: function(el) {
        if (!$(el).find('.cq-FileUpload-thumbnail-img').is(':parent') && !$(el).parent().parent().parent().hasClass('hide')) {
            return "Error: Please fill out this field.";
        }
    }
});