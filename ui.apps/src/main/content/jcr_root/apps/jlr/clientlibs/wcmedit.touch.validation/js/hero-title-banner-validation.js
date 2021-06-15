$(window).adaptTo("foundation-registry").register("foundation.validation.validator", {
    selector: "div[data-hero-title-banner-component='true'] div[data-hero-title-banner-header='true']",
    validate: function(el) {
        if ($(el).closest('.richtext-container').find('[data-hero-title-banner-header]').val().length < 1) {
            return "Error: Please fill out this field.";
        }
    }
});

$(window).adaptTo("foundation-registry").register("foundation.validation.validator", {
    selector: "div[data-hero-title-banner-component='true'] coral-fileupload[data-hero-title-banner-image='true']",
    validate: function(el) {
        if (!$(el).find('.cq-FileUpload-thumbnail-img').is(':parent') && !$(el).parent().parent().parent().hasClass('hide')) {
            return "Error: Please fill out this field.";
        }
    }
});