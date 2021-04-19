$(window).adaptTo("foundation-registry").register("foundation.validation.validator", {
    selector: "div[data-signpost-component='true'] coral-fileupload[data-signpost-image='true']",
    validate: function(el) {
        if (!$(el).find('.cq-FileUpload-thumbnail-img').is(':parent')) {
            return "Error: Please fill out this field.";
        }
    }
});