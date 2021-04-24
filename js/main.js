const scroll = function() {
	if ($(window).scrollTop() > 60) {
		$('body').addClass('page_scroll');
	} else {
		$('body').removeClass('page_scroll');
	}
};