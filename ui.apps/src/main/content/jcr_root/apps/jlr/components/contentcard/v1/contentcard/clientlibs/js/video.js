let contentCardYoutubeDom = `<div id="contentCardModal" class="contentCard_Modal">
    <div class="contentCard_ModalContent">
        <div class="contentCardModel_Header">
            <span class="contentCardClose">&times;</span>
        </div>
        <iframe class="contentCardVideo" width="560" height="315" src="" frameborder="0" allowfullscreen></iframe>
    </div>
</div>`;
$(document.body).append(contentCardYoutubeDom);
var modal = document.getElementById("contentCardModal");
var closeBtn = document.getElementsByClassName("contentCardClose")[0];

$('.ContentCard__Youtube').click(function () {
    var url = $(this).attr("data-videourl");
    url = url + '?autoplay=1';
    $('.contentCardVideo').attr('src', url);
    modal.style.display = "block";
    $('html').css('overflow', 'hidden');
});
if (closeBtn) {
    closeBtn.onclick = function () {
        $('.contentCardVideo').each(function () {
            var el_src = $(this).attr("src");
            $(this).attr("src", "");
        });
        modal.style.display = "none";
        $('html').css('overflow', 'auto');

    }
}
window.onclick = function (event) {
    if (modal) {
        if (event.target == modal) {
            $('.contentCardVideo').each(function () {
                var el_src = $(this).attr("src");
                $(this).attr("src", "");
            });
            modal.style.display = "none";
            $('html').css('overflow', 'auto');
        }
    }
 
}
