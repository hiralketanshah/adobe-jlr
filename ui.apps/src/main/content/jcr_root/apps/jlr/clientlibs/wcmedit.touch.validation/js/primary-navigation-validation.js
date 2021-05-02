$(window).adaptTo("foundation-registry").register("foundation.validation.validator", {
    selector: ".enable-cp",
    validate: function (el) {
        var status = $(el).prop("checked");
        if (status) {
            $(el).parent().parent().find(".cp-link").parent().show();
            $(el).parent().parent().find(".cp-aria").parent().show();
        } else {
            $(el).parent().parent().find(".cp-link").parent().hide();
            $(el).parent().parent().find(".cp-aria").parent().hide();
        }
    }
});
