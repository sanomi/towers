$(document).ready(function() {
	$('#block1').val(1);
	$('#block2').val(2);	
	$('#block3').val(3);	

	$('.block').click(function(event) {
		var $wrapper = $(this).parent();
		var selectedBlock = $wrapper.('div:first-child');