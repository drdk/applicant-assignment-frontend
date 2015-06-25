$(el).on('click', function() {
    $(el).addClass('slide-in');
	$(el).css('opacity', '1.0');
	$(el).css('color', 'red');
	$(el).css('width', '200px');
	$(el).css('height', '200px');
	$('#secondary-content').hide();
	$('#main-content').append($('<ul>'));
	for (var i=0; i<100; i++) {
		$('#main-content').find('ul').append($("<li>"));
	}
});