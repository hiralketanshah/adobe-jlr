
$(window).adaptTo("foundation-registry").register("foundation.validation.validator", {
    selector: "form [data-table-html-required='true']",
    validate: function(el) {
        var input = el.value;
        var ui = $(window).adaptTo("foundation-ui");
        if (input !== "" || input !== null) {
            var lowercaseText = input.toLowerCase()
            if (input.indexOf('<table>') !== -1) {
                ui.alert("Warning", "Enter HTML without table tag!");
                return false;
            }
        }
    }

});