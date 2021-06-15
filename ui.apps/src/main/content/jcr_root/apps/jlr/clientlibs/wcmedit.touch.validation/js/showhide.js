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
        var parent = $('.fields-hide-show').parent();

        if(checked){
			 parent.show();
             parent.siblings('label').show();
             parent.siblings('coral-icon').show();
        }
        else{

			parent.hide();
            parent.siblings('label').hide();
            parent.siblings('coral-icon').hide();
        }

   }

})(document,Granite.$);