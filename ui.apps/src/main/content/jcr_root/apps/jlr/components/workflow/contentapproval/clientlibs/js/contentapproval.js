(function (document, $, ns) {

    "use strict";

    $(document).on("click", ".foundation-collection-action", function (e) {
        setTimeout(function () {
            collectAndSubmitForm()
        }, 1000);
    });

    function collectAndSubmitForm() {
        $(".workitem-complete-dialog-submit").click(function () {
            console.log("The submit was clicked." + $(".external-dialog-injection").attr("data-payloadpath"));

            $.ajax({
                type: 'GET',
                url: '/content/request/approval.json',
                data: {
                    "approvalStatus": $("select[name='./jcr:content/approvalStatus']").val(),
                    "activateNowLater": $("input[name='./jcr:content/activateNowLater']").val(),
                    "contentPublishingDate": $("input[name='./jcr:content/contentPublishingDate']").val(),
                    "embargoLiftDate": $("input[name='./jcr:content/embargoLiftDate']").val(),
                    "path": $(".external-dialog-injection").attr("data-payloadpath")
                },
                success : function(data, textStatus, jqXHR) {
                    //write your logic that you need to perform on sucess
                    alert(data + " -- "+textStatus+" -- "+jqXHR);
                },
                error : function(XMLHttpRequest, textStatus, errorThrown) {
                    alert(XMLHttpRequest + " -- "+textStatus+" -- "+errorThrown);
                    //write your logic that you need to perform on error
                }
            });
        });

    }

})(document, Granite.$, Granite.author);