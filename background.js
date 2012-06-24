<!-- http://code.google.com/p/jsuri/ -->
<script type="text/javascript" src="jsuri-1.1.1.min.js"></script>

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
    ],
    types: ["main_frame"]
  },
  // extraInfoSpec
  ["blocking"]);
