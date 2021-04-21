(function(document, $) {
    "use strict";

    // when dialog gets injected
    $(document).on("foundation-contentloaded", function(e) {
        // if there is already an inital value make sure the according target element becomes visible
        $(".cq-dialog-checkbox-showhide").each( function() {
            showHide($(this));
        });

    });

    $(document).on("change", ".cq-dialog-checkbox-showhide", function(e) {
        showHide($(this));
    });

    function showHide(el){

        // is checkbox checked?
        var checked = el.prop('checked');

        if(checked){
			 $('.fields-hide-show').show();
             $('.fields-hide-show').siblings('label').show();
             $('.fields-hide-show').siblings('coral-icon').show();
        }
        else{

			$('.fields-hide-show').hide();
            $('.fields-hide-show').siblings('label').hide();
            $('.fields-hide-show').siblings('coral-icon').hide();
        }

   }

})(document,Granite.$);