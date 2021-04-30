$(window).adaptTo("foundation-registry").register("foundation.validation.validator", {
	selector: "coral-multifield[data-seat-slider-component='true'] div[data-seat-slider-header]",
	validate: function (el) {
			if ($(el).closest('.richtext-container').find('[data-seat-slider-header]').val().length < 1) {
			return "Error: Please fill out this field.";
		}
	}
});

  $(window).adaptTo("foundation-registry").register("foundation.validation.validator", {
	selector: "coral-multifield[data-seat-slider-component='true'] div[data-seat-slider-summary='true']",
	validate: function (el) {
		if ($(el).closest('.richtext-container').find('[data-seat-slider-summary]').val().length < 1) {
			return "Error: Please fill out this field.";
		}
	}
});
$(window).adaptTo("foundation-registry").register("foundation.validation.validator", {
        selector: "coral-multifield[data-seat-slider-component='true'] coral-fileupload[data-seat-slider-image='true']",
        validate: function(el) {
            if(!$(el).find('.cq-FileUpload-thumbnail-img').is(':parent')){
                return "Error: Please fill out this field.";
            }
        }
    });
