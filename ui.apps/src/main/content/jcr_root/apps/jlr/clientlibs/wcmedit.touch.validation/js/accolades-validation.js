$(window).adaptTo("foundation-registry").register("foundation.validation.validator", {
    selector: "div[data-accolades-component='true'] div[data-accolades-header='true']",
    validate: function(el) {
        if ($(el).closest('.richtext-container').find('[data-accolades-header]').val().length < 1) {
            return "Error: Please fill out this field.";
        }
    }
});