var FindTab = (function() {
	
	var watchSites = {
		'Pandora' : '*://*.pandora.com/*',
		'Netflix' : '*://movies.netflix.com/*',
	 	'gMail' : '*://mail.google.com/*',
		'twitch.tv' : '*://www.twitch.tv/*'
	};

	var getTabsCallback = function(tabs) {
		for(i in tabs) {
			goToTab(tabs[i]);
		}
	};

	var getTab = function(search) {
		chrome.tabs.query({
				url : search
			}, getTabsCallback
		);
	};

	var goToTab = function(tab) {
		console.log('Opening: ' + tab.url);
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

		open : function(site) {
			getTab(watchSites[site]);
		},
		
		initList : function() {
			for(i in watchSites) {
				$('body').html($('body').html() + 
						'<div class="site_button"><img src="icons/'+i+'.ico" /><a href="#" class="tabLink" data-link="'+i+'">'+i+'</a></div>'
						);
				console.log('Trying: ' + i);
			}
		}
	}

})();
