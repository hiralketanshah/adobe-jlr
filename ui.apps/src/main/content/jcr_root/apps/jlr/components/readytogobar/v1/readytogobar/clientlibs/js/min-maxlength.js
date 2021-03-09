(function($, Coral) {
    "use strict";

    console.log(" --------CLIENTLIBS LOADED------- ");

    var registry = $(window).adaptTo("foundation-registry");

    // Validator for required for multifield max and min items
    registry.register("foundation.validation.validator", {
        selector: "[data-validation=minmax]",
        validate: function(element) {
            var el = $(element);
            let max=el.data("max-items");
            let min=el.data("min-items");
            let items=el.children("coral-multifield-item").length;
            let domitems=el.children("coral-multifield-item");
            console.log("{} : {} :{} ",max,min,items);
            if(items>max){
              /* Use below line if you don't want to add item in multifield more than max limit */
              domitems.last().remove();
              return "You can add maximum "+max+" items."
            }
            if(items<min){
                return "You add minimum "+min+" items."
            }
        }
    });

})(jQuery, Coral);