    $(window).adaptTo("foundation-registry").register("foundation.validation.validator", {
    	selector: "coral-multifield[data-faq-component='true'] [data-faq-header='true']",
    	validate: function (el) {
            if ($(el).closest('.richtext-container').find('[data-faq-header]').val().length <1) {
                return "Error: Please fill out this field.";
        }
    	}
    }); 
    
    $(window).adaptTo("foundation-registry").register("foundation.validation.validator", {
    	selector: "coral-multifield[data-faq-component='true'] [data-faq-text='true']",
    	validate: function (el) {
            if ($(el).closest('.richtext-container').find('[data-faq-text]').val().length <1) {
                return "Error: Please fill out this field.";
        }
    	}
    }); 