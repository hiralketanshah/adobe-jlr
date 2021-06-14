
  $(window).adaptTo("foundation-registry").register("foundation.validation.validator", {
    selector: "input[name='contentPublishingDate']",
    validate: function(el) {
         console.log("failed");
        if ($(el).val().length < 1) {

            return "Error: Please fill out this field.";
        }
    }
	});

$(document).on("click", ".cq-inbox-workitem-complete", function(e) {
    setTimeout(function(){ validateForm() },800);
     });

function validateForm() {






     $(".workitem-complete-dialog-cancel,.workitem-complete-dialog-submit").click(function(event){



         if($("input[name='contentPublishingDate']").val()=='undefined') {
			event.preventDefault();
          console.log("The cancel was clicked."+$("input[name='contentPublishingDate']").val());

         }
    });



  if ("doNothing" == $("input[name='activateNowLater']:checked").val()) {
    $(".embargo-lift-date").hide();
    $(".content-publishing-date").hide();
  }
  $("input[name='activateNowLater']").change(function () {
    if ("doNothing" != $("input[name='activateNowLater']:checked").val()) {
      $(".embargo-lift-date").show();
      $(".content-publishing-date").show();
    } else {
      $(".embargo-lift-date").hide();
      $(".content-publishing-date").hide();
    }
  });

}
