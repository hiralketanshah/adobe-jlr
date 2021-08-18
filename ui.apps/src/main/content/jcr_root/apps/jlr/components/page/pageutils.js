use(function () {

    var path= this.value;
    var shortenedPath = path.replace("/content/landrover/global/row/published-sites/en_au/", "/");
    shortenedPath = shortenedPath.replace("/content/landrover/global/europe/published-sites/de_de/", "/");

    return {
        updatedPath: shortenedPath
    };
});