	var whitelist ='publish-dev-jlr.corp.adobe.com';
	window.addEventListener('message', function(e) {
    console.log("added a message"+e.origin);
	 
      console.log("added a message2");
      if (e.data.retailerName !== null && e.data.retailerUrl !== null) {
        var NaaSRetailer = localStorage.getItem('NaaSRetailer') !== null ?
          JSON.parse(localStorage.getItem('NaaSRetailer')) :
          {};
        var expiry = new Date();
        expiry.setDate(expiry.getDate() + parseInt(e.data.expiryPeriod));
console.log("between to a message");
        if (e.data.locale !== undefined) {
          NaaSRetailer[e.data.locale] = {
            expiryDate: expiry.getTime(),
            name: e.data.retailerName,
            url: e.data.retailerUrl
          };
	 console.log("going to a message");
          localStorage.setItem('NaaSRetailer', JSON.stringify(NaaSRetailer));
        }
      }

	});

	var NaaSRetailer = localStorage.getItem('NaaSRetailer');
	var data = {
		message: 'NaaSRetailer',
    NaaSRetailer: NaaSRetailer
  };

  window.parent.postMessage(data, "*");