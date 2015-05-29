
function initBootstrap() {
	// init scrollspy
	$('body').scrollspy({
		target: '#navbar-main',
		offset: 70
	});

	// fix issue that bootstrap nav bar hides part of content https://github.com/twbs/bootstrap/issues/1768
	var shiftWindow = function() { scrollBy(0, -70) };
	if (location.hash) shiftWindow();
	window.addEventListener("hashchange", shiftWindow);
}
