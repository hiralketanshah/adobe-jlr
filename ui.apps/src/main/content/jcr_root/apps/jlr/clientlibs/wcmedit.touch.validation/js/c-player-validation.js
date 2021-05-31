$(window).adaptTo("foundation-registry").register("foundation.validation.validator", {
    selector: "div[data-c-player-component='true'] div[data-c-player-header='true']",
    validate: function(el) {
        if ($(el).closest('.richtext-container').find('[data-c-player-header]').val().length < 1) {
            return "Error: Please fill out this field.";
        }
    }
});

$(window).adaptTo("foundation-registry").register("foundation.validation.validator", {
    selector: "div[data-c-player-component='true'] div[data-c-player-summary='true']",
    validate: function(el) {
        if ($(el).closest('.richtext-container').find('[data-c-player-summary]').val().length < 1) {
            return "Error: Please fill out this field.";
        }
    }
});