var FindTab = (function() {
	
	var watchSites = {
		'Pandora' : 'pandora.com'
	};

	var getTabsCallback = function(tabs) {
		for(i in tabs) {
			document.body.innerHTML = document.body.innerHTML + "<p>" + tabs[i].url + "</p>";
			goToTab(tabs[i]);
		}
	}

	var getTabs = function() {
		chrome.tabs.query({
				url: '*://movies.netflix.com/*'
			}, getTabsCallback
		);
	};

	var goToTab = function(tab) {
		alert('going to ');
		chrome.windows.update(tab.windowId, {
			focused : true
		});
		chrome.tabs.update(tab.id, {
			active : true
		});
	}

	return {
		getFoundTabList : function() {
			getTabs();
		},

	}

})();
