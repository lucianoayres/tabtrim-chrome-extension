chrome.action.onClicked.addListener(async (tab) => {
	chrome.tabs.query(
		{
			url: [
				'chrome://newtab/',
				'*://www.google.com/search*',
				'*://www.bing.com/search*',
				'*://duckduckgo.com/?q=*',
				'*://*.search.yahoo.com/*',
				'*://yandex.com/search/*',
				'*://www.baidu.com/s?*',
				'*://www.ask.com/web?q=*',
				'*://search.naver.com/*',
				'*://www.ecosia.org/search*',
				'*://search.aol.com/*',
				'*://archive.org/search*',
				'*://www.wolframalpha.com/input*',
				'*://www.zoom.us/j/*',
				'*://zoom.us/j/*',
				'*://*.zoom.us/j/*',
				'*://*.zoom.us/postattendee*',
			],
		},
		function (tabs) {
			tabs.map((tab) => chrome.tabs.remove(tab.id))
		}
	)
})
