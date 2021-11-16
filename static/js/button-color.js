$('.button').hover(function () {
	if($(document).scrollTop() > 0) {
		$(this).css('color', '#F43B86');
	}
	else {
		$(this).css('color', '#F8F5F1');		
	}
})

$('.button').mouseout(function () {
	if($(document).scrollTop() > 0) {
		$(this).css('color', '#F8F5F1');
	}
	else {
		$(this).css('color', '#F43B86');		
	}
})
