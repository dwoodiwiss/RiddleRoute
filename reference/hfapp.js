$(document).ready(function() {
	hide_screens();
	show_screen('home');

	$('#home a').click(function() {

		var $t = $(this);

		str = $t.attr('id').replace('_menu','');

		hide_screens();
		show_screen(str);
		return false;
	});

	$('.back_btn').click(function() {
		hide_screens();
		show_screen($(this).attr('rel'));
		return false;
	});

	$('#photolog a').click(function() {
	
		var $t = $(this);

		str = $t.attr('id').replace('_menu','');
		hide_screens();
		show_screen(str);
		return false;
	});

	$('.back_btn').click(function() {
		hide_screens();
		show_screen($(this).attr('rel'));
		return false;
	});
	
})

function hide_screens() {
	$('.screen').hide();
}

function show_screen(id) {
	$('#'+id).show();
}