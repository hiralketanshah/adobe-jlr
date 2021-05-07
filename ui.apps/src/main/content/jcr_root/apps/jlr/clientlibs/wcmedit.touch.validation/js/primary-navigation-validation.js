(function(document, $) {
    "use strict";

    // when dialog gets injected
    $(document).on("foundation-contentloaded", function(e) {
        // if there is already an inital value make sure the according target element becomes visible
        $(".cq-dialog-checkbox-nav-showhide").each( function() {
            showHide($(this));
        });

    });

    $(document).on("change", ".cq-dialog-checkbox-nav-showhide", function(e) {
        showHide($(this));
    });

    function showHide(el){

        // is checkbox checked?
        var checked = el.prop('checked');

        if(checked){
			 $('.cust-portal-hide-show').show();
             $('.cust-portal-hide-show').siblings('label').show();
             $('.cust-portal-hide-show').siblings('coral-icon').show();
             $('.cust-portal-aria-hide-show').show();
             $('.cust-portal-aria-hide-show').siblings('label').show();
             $('.cust-portal-aria-hide-show').siblings('coral-icon').show();
        }
        else{

			$('.cust-portal-hide-show').hide();
            $('.cust-portal-hide-show').siblings('label').hide();
            $('.cust-portal-hide-show').siblings('coral-icon').hide();
            $('.cust-portal-aria-hide-show').hide();
            $('.cust-portal-aria-hide-show').siblings('label').hide();
            $('.cust-portal-aria-hide-show').siblings('coral-icon').hide();
        }

   }

})(document,Granite.$);