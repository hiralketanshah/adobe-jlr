(function() {
    var cplayers = document.getElementsByClassName("cmp-cplayer");
    if(cplayers.length>0){
        var buildItem = localStorage.getItem("ConfiguratorPrompt_jlr");
        if(buildItem){
        var items = JSON.parse(buildItem);
        for(var j = 0;j<=cplayers.length;j++){
            var cplayer = cplayers[j];
            var vechicleId = cplayer && cplayer.dataset &&cplayer.dataset.vechicleId?cplayer.dataset.vechicleId:"";
            var modelYear = cplayer && cplayer.dataset &&cplayer.dataset.modelYear?cplayer.dataset.modelYear:"";
            var userAuthored = false;
            if(vechicleId || modelYear){
                userAuthored = true;
            }
            for(var i = 0;i<items.length;i++){
                    var item = items[i];   
                    var isUserBuild = item.length>1 && item[1] && item[1].vehicleId == vechicleId && item[1].modelYear == modelYear;
                    if(isUserBuild || item[0]=="latest")   {
                        if(userAuthored && !isUserBuild){
                            break;
                        }
                        if(cplayer){
                            cplayer.classList.remove("cmp-cplayer-hidden");
                            cplayer.style.display = 'flex';
                            var summary = item[1].vehicleDetail.join(" | ");
                            var imgUrl = item[1].media.desktop.frames[0].layers[0].image;
                            var vechicleSummary = cplayer.querySelector('.vechicleSummary span');
                            vechicleSummary.innerHTML = item[1].vehicleName;
                            cplayer.getElementsByClassName('summary')[0].innerHTML = `<p>${summary}</p>`;
                            cplayer.getElementsByTagName('picture')[0].innerHTML = `<img alt="" class="Picture__img" src="${imgUrl}" style="max-width:100%;height:max-height:100%;"/>`;
                             
                            var primaryLink = cplayer.getElementsByClassName('primaryLinkWithStyle');
                            var secondaryLink =cplayer.getElementsByClassName('secondaryLinkWithStyle');
                            if(primaryLink.length>0){
                                var currentBuildUrl = item[1].currentBuildUrl;
                                if(!primaryLink[0].href){
                                    primaryLink[0].href = currentBuildUrl;
                                }
                            }                      
                            if(secondaryLink.length>0){
                                var startNewBuildUrl = item[1].startNewBuildUrl;
                                if(!secondaryLink[0].href){
                                    secondaryLink[0].href = startNewBuildUrl;
                                }
                            }
                            if(isUserBuild)
                            break;
                        }
                    
                    }      
                }
        }
    }
}
 
})();