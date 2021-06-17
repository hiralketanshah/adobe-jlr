
  $(window).adaptTo("foundation-registry").register("foundation.validation.validator", {
		selector: "div[data-site-notification-component='true'] div[data-site-notification-header='true']",
		validate: function (el) {
			if ($(el).closest('.richtext-container').find('[data-site-notification-header]').val().length < 1) {
				return "Error: Please fill out this field.";
			}
		}
	});
  
  $(window).adaptTo("foundation-registry").register("foundation.validation.validator", {
		selector: "div[data-site-notification-component='true'] div[data-site-notification-summary='true']",
		validate: function (el) {
			if ($(el).closest('.richtext-container').find('[data-site-notification-summary]').val().length < 1) {
				return "Error: Please fill out this field.";
			}
		}
	});
