(function(document, $, ns) {
"use strict";

$(document).on("click", ".cq-dialog-submit", function(e) {

$.ajax({
type: 'GET',
url:  '/content/request/approval',
data : {
"approvalStatus":"approve"
},
success: function(msg) {
alert('success');
}
});

});
})(document, Granite.$, Granite.author);