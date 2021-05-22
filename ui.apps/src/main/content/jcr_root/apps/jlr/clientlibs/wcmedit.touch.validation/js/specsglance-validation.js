$(window).adaptTo("foundation-registry").register("foundation.validation.validator", {
	selector: "coral-multifield[data-specs-glance-component='true'] div[data-specs-glance-header]",
	validate: function (el) {
			if ($(el).closest('.richtext-container').find('[data-specs-glance-header]').val().length < 1) {
			return "Error: Please fill out this field.";
		}
	}
});


