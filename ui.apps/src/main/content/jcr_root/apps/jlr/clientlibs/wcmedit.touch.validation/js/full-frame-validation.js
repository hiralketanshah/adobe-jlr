$(window).adaptTo("foundation-registry").register("foundation.validation.validator", {
    selector: "div[data-full-frame-component='true'] coral-fileupload[data-full-frame-image='true']",
    validate: function(el) {
        if (!$(el).find('.cq-FileUpload-thumbnail-img').is(':parent') && !$(el).parent().parent().parent().hasClass('hide')) {
            return "Error: Please fill out this field.";
        }
    }
});