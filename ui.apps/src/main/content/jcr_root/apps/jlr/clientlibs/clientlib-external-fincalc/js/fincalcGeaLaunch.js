(function () {
    var nameplateId = document.currentScript.getAttribute('nameplateId'),
        modelYear = document.currentScript.getAttribute('modelYear'),
        configState = document.currentScript.getAttribute('configState'),
        iso2 = document.currentScript.getAttribute('iso2'),
        lang = document.currentScript.getAttribute('lang'),
        view = document.currentScript.getAttribute('view'),
        env = document.currentScript.getAttribute('env'),
        brand = document.currentScript.getAttribute('brand'),
        financeType = document.currentScript.getAttribute('financeType'),
        repEgFinCode = document.currentScript.getAttribute('repEgFinCode'),
        repEgRef = document.currentScript.getAttribute('repEgRef'),
        baseUrl = document.currentScript.getAttribute('baseUrl'),
        personaliseQuoteUrl = document.currentScript.getAttribute('personaliseQuoteUrl'),
        ctaText = document.currentScript.getAttribute('ctaText'),
        ctaUrl = document.currentScript.getAttribute('ctaUrl'),
        orderNowEnabled = document.currentScript.getAttribute('orderNowEnabled');

    window.JLRFinCalc_INIT = {
        "nameplateId": nameplateId,
        "modelYear": modelYear,
        "configState": configState,
        "iso2": iso2,
        "lang": lang,
        "view": view,
        "env": env,
        "brand": brand,
        "financeType": financeType,
        "repEgFinCode": repEgFinCode,
        "repEgRef": repEgRef,
        "baseUrl": baseUrl,
        "personaliseQuoteUrl": personaliseQuoteUrl,
        "orderNowCta": {"ctaText": ctaText, "ctaUrl": ctaUrl},
        "orderNowEnabled": orderNowEnabled
    };
    JSON.parse(document.currentScript.getAttribute('quickQuoteData'));

    var loadDiv = document.getElementById('fincalc-gea-container');
    var contentDiv = document.createElement("div");
    contentDiv.classList.add("QuickQuote");

    var quoteDiv = document.createElement("div");
    quoteDiv.classList.add("fincalc_app");
    quoteDiv.id = "fincalc-quickQuote";

    var staticDiv = document.createElement("div");
    staticDiv.classList.add("fincalc_app");
    staticDiv.id = "fincalc-static";

    var fincalcStylesheet = document.createElement("link");
    fincalcStylesheet.rel = "stylesheet";
    fincalcStylesheet.type = "text/css";
    fincalcStylesheet.id = "fincalc-styling";
    fincalcStylesheet.href = baseUrl + "/fincalc_v3/dist/quickQuote.landrover.css";

    var fincalcScript = document.createElement("script");
    fincalcScript.src = baseUrl + "/fincalc_v3/dist/quickQuote.js";

    loadDiv.appendChild(contentDiv);
    contentDiv.appendChild(quoteDiv);
    contentDiv.appendChild(staticDiv);
    contentDiv.appendChild(fincalcStylesheet);

    loadDiv.appendChild(fincalcScript);
})();

