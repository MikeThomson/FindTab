$(function() {
	FindTab.initList();
	$('a.tabLink').click(function() {
		FindTab.open($(this).data('link'));
	});
});
