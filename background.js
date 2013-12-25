chrome.webRequest.onBeforeRequest.addListener(
  function(req) {
    //console.log( "onBeforeRequest", req.url );
	if (req && req.url) {
		url = new Uri(req.url);
		if (url.getQueryParamValue('w') != '1') {
			url = url.replaceQueryParam('w', '1');
			return {redirectUrl: url.toString() };
		}
	}
  },
  // filters
  {
    urls: [
      "https://github.com/*/commit/*",
      "https://github.com/*/compare/*",
	  "https://github.com/*/pull/*"
    ]
  },
  // extraInfoSpec
  ["blocking"]);