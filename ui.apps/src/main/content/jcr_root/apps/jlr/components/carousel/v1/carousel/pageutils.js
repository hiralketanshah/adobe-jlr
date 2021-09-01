use(function () {

    var path= this.value;
    var isExp=false;
    if(path.indexOf("/content/experience-fragments")!=-1){
        isExp=true;
    }
     return {

        isExp: isExp

    };

});