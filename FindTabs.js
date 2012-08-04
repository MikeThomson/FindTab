var FindTab = (function() {
	
	var watchSites = {
		'Pandora' : 'pandora.com'
	};

	var getTabsCallback = function(tabs) {
		alert('starting');
		for(i in tabs) {
			document.body.innerHTML = document.body.innerHTML + "<p>" + tabs[i].url + "</p>";
		}
	}

	var getTabs = function() {
		chrome.tabs.query({
				url: '*://*/*'
			}, getTabsCallback
		);
	};

	return {
		getFoundTabList : function() {
			getTabs();
		}
	}

})();
