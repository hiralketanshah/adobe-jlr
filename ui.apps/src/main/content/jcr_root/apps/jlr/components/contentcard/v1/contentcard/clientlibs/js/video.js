var modal = document.getElementById("contentCardModal");
var closeBtn = document.getElementsByClassName("contentCardClose")[0];

$('.ContentCard__Youtube').click(function () {
    var url = $(this).attr("data-videourl");
    url = url + '?autoplay=1';
    $('.contentCardVideo').attr('src', url);
    modal.style.display = "block";
});
if (closeBtn) {
    closeBtn.onclick = function () {
        $('.contentCardVideo').each(function () {
            var el_src = $(this).attr("src");
            $(this).attr("src", "");
        });
        modal.style.display = "none";
    }
}
window.onclick = function (event) {
    if (modal) {
        if (event.target == modal) {
            $('.contentCardVideo').each(function () {
                var el_src = $(this).attr("src");
                $(this).attr("src", el_src);
            });
            modal.style.display = "none";
        }
    }
}