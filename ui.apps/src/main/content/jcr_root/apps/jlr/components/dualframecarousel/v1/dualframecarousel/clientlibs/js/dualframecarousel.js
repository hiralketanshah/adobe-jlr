$("div.carousel.aem-GridColumn").each(function (index, value) {
  if ($(value).find(".dualframecarousel").first().hasClass("right")) {

    $(value).find("div.dualframecarousel:first").parents("div.carousel").find("div.dualframecarousel").addClass("right").removeClass("left");
    $(value).find("div.dualframecarousel:first").parents("div.carousel").find(".cmp-dualframe_pagination").removeClass("left");

  } else if (!$(value).find(".dualframecarousel").first().hasClass("right") || $(value).find(".dualframecarousel").first().hasClass("left")) {

    $(value).find("div.dualframecarousel:first").parents("div.carousel").find("div.dualframecarousel").addClass("left").removeClass("right");
    $(value).find("div.dualframecarousel:first").parents("div.carousel").find(".cmp-dualframe_pagination").addClass("left");
  }
});