
$(window).adaptTo("foundation-registry").register("foundation.validation.validator", {
    selector: "[data-validation='schema-json']",
    validate: function(el) {
        var input = el.value;
        if (input == "" || IsValidJSONString(input) || input == null) {
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