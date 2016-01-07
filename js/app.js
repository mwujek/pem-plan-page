$(document).ready(function() {
	
	// click on navigation
	$('ul.nav-list li:not(.current-section)').click(function() {
		var direction = $(this).find('a').text();
		window.alert('***Site redirects to the [' + direction + "] page***");
	});

	//click on start/end date icons
	$('.selection-container i').click(function() {
		$(this).toggleClass('exact-date');
	});

	//click on "datepickers"
	$('select.date').click(function() {
		var date = $(this).find('option').text();
		window.alert('***Opens for datepicker for [' + date + "]***");
	});

});