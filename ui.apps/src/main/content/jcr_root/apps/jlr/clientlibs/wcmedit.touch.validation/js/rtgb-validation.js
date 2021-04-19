$(window).adaptTo("foundation-registry").register("foundation.validation.validator", {
    selector: "coral-multifield[data-rtgb-component='true'] input[data-rtgb-text]",
    validate: function(el) {
        if ($(el).parent().parent().parent().parent().parent(["data-rtgb-component"]).length) {
            var input = el.value;
            if (input.length <= 0) {
                return "Error: Please fill out this field.";
            }
        }
    }
});

$(window).adaptTo("foundation-registry").register("foundation.validation.validator", {
    selector: "coral-multifield[data-rtgb-component='true'] div[data-rtgb-copy='true']",
    validate: function(el) {
        if ($(el).closest('.richtext-container').find('[data-rtgb-copy]').val().length < 1) {
            return "Error: Please fill out this field.";
        }
    }
});