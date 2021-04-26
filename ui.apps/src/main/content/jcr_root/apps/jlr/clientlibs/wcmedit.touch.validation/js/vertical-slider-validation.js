$(window).adaptTo("foundation-registry").register("foundation.validation.validator", {
	selector: "coral-multifield[data-vertical-slider-component='true'] div[data-vertical-slider-header]",
	validate: function (el) {
			if ($(el).closest('.richtext-container').find('[data-vertical-slider-header]').val().length < 1) {
			return "Error: Please fill out this field.";
		}
	}
});

  $(window).adaptTo("foundation-registry").register("foundation.validation.validator", {
	selector: "coral-multifield[data-vertical-slider-component='true'] div[data-vertical-slider-summary='true']",
	validate: function (el) {
		if ($(el).closest('.richtext-container').find('[data-vertical-slider-summary]').val().length < 1) {
			return "Error: Please fill out this field.";
		}
	}
});
$(window).adaptTo("foundation-registry").register("foundation.validation.validator", {
        selector: "coral-multifield[data-vertical-slider-component='true'] coral-fileupload[data-vertical-slider-image='true']",
        validate: function(el) {
            if(!$(el).find('.cq-FileUpload-thumbnail-img').is(':parent')){
                return "Error: Please fill out this field.";
            }
        }
    });
