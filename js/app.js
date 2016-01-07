$(document).ready(function() {
	$('ul.nav-list li:not(.current-section)').click(function() {
		var direction = $(this).find('a').text();
		window.alert('***Site redirects to the [' + direction + "] page***");
	});
});