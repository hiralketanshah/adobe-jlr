  $(window).adaptTo("foundation-registry").register("foundation.validation.validator", {
		selector: "div[data-legacy-browser-component='true'] div[data-legacy-browser-header='true']",
		validate: function (el) {
			if ($(el).closest('.richtext-container').find('[data-legacy-browser-header]').val().length < 1) {
				return "Error: Please fill out this field.";
			}
		}
	});
  
  $(window).adaptTo("foundation-registry").register("foundation.validation.validator", {
		selector: "div[data-legacy-browser-component='true'] div[data-legacy-browser-summary='true']",
		validate: function (el) {
			if ($(el).closest('.richtext-container').find('[data-legacy-browser-summary]').val().length < 1) {
				return "Error: Please fill out this field.";
			}
		}
	});
