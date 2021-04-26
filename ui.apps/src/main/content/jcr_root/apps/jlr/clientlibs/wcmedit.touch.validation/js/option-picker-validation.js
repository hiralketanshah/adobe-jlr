$(window).adaptTo("foundation-registry").register("foundation.validation.validator", {
    selector: ".cta-override",
    validate: function (el) {
        var status = $(el).prop("checked");
        if (status) {
            $(el).parent().parent().parent().parent(".horizontal-line").find(".cta-options").show();
        } else {
            $(el).parent().parent().parent().parent(".horizontal-line").find(".cta-options").hide();
        }
    }
});

$(window).on("dialog-ready", function () {

    $(".cta-override").each(function () {
        var status = $(this).prop("checked");
        if (status) {
            $(this).parent().parent().parent().parent(".horizontal-line").find(".cta-options").show();
        } else {
            $(this).parent().parent().parent().parent(".horizontal-line").find(".cta-options").hide();
        }
    });

    $(".coral3-Button:contains('Add')").click(function () {
        setTimeout(function () {
            $(".cta-options").last().hide();
        }, 800);

    });

});