
(function(window, $) {
    'use strict';

    /*
     * Generic regular expression validation for text fields.
     *
     * Dialog field requires the data-foundation-validation attribute
     * containing 'regex' and a data-regex attribute with the regular
     * expression.
     *
     * Example:
     * @DialogField(fieldLabel = "Name", name = "./name", ranking = 100,
     *     additionalProperties={
     *             @Property(name = "regex", value = "^data-.+$"),
     *             @Property(name = "foundation-validation", value = "regex")})
     */
    $(window).adaptTo("foundation-registry").register("foundation.validation.validator", {
        selector: "[data-foundation-validation~='regex'],[data-validation~='regex']",
        validate: function(el) {
            var $el = $(el);
            var v = $el.val();
            var regexStr = $el.data('regex');

            if (!regexStr) {
                console.log('Missing regex string for ', el);
                return;
            }

            try {
                var re = new RegExp(regexStr);

                if (!v) v = '';

                if (v.match(re)) {
                    return;
                }

                return 'Value [' + v + '] is not valid.';
            } catch (e) {
                console.log(e);
            }
        }
    });

})(window, Granite.$);


(function(window, $) {
    'use strict';
	    $(document).on(
			"dialog-ready",
			function() {

				$(".coral3-Button").click(
						function() {
							var field = $(this).parent();
							var size = field.attr("data-maxlimit");
							if (size) {

								var ui = $(window).adaptTo("foundation-ui");
								var totalLinkCount = $(this).parent().children(
										'coral-multifield-item').length;
								if (totalLinkCount >= size) {
									ui.alert("Warning", "Maximum " + size
											+ " items are allowed!", "notice");
									return false;
								}
							}

						});
			});
})(window, Granite.$);

$(window).adaptTo("foundation-registry").register("foundation.validation.validator", {
	selector: "form [data-validation='schema-json']",
	validate: function (el) {
		var input = el.value; 
		if (input != "" && IsValidJSONString(input) && input != null) {
		// Valid JSON Format
		} else {
			return el.getAttribute("data-error-message");
		}
	}

});

function IsValidJSONString(str) {
	try {
		JSON.parse(str);
	} catch (e) {
		return false;
	}
	return true;
}

