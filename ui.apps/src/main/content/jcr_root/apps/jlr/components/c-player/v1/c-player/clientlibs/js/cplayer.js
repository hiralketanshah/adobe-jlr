(function() {
    var cplayers = document.getElementsByClassName("cmp-cplayer");
    if(cplayers.length>0){
        var buildItem = localStorage.getItem("ConfiguratorPrompt_jlr");
        if(buildItem){
        var items = JSON.parse(buildItem);
        for(var j = 0;j<=cplayers.length;j++){
            var cplayer = cplayers[j];
            var vechicleId = cplayer && cplayer.dataset &&cplayer.dataset.vechicleId?cplayer.dataset.vechicleId:"";
                for(var i = 0;i<items.length;i++){
                    var item = items[i];   
                    if(item.length>1 && item[1] && item[1].vehicleId == vechicleId)   {
                        cplayer.style.display = 'flex';
                        var vehicleDetail = item[1].vehicleDetail.join(" ");
                        var summary = item[1].vehicleName+" | "+vehicleDetail;
                        cplayer.getElementsByClassName('summary')[0].innerHTML = `<p>${summary}</p>`;
                        break;
                    }      
                }
        }
    }
}
 
})();