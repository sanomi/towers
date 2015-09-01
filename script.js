'use strict';

$(document).ready(init);

function init() {
	$('#block1').val(1);
	$('#block2').val(2);	
	$('#block3').val(3);
	var blockSelected = $('.selected').length;	
	$('.block').on('click', blockToggle);
	$('.tower').on('click', moveBlock);
}

function blockToggle(event){
	event.stopPropagation();
	var $this = $(this);
	if ($( this ).is( ":first-child" )) {
		if ($(this).hasClass("selected")) {
			$(this).removeClass('selected').addClass('unselected');
		} else {
		$(this).removeClass('unselected').addClass('selected');
			}
	}
};


function moveBlock(event) {
	event.stopPropagation();
	var $this = $(this);
	var $wrapper = $this.children();
	var $selectedBlock = $('.selected');
		// if ($selectedBlock.length === 0) {
			console.log($wrapper.children(':first-child').val());
			console.log($selectedBlock.val());
			if ($wrapper.children().length === 0 || $wrapper.children(':first-child').val() > $selectedBlock.val()) {
				var $originTower = $('.selected').parent().parent().attr('id');
				var $destinationTower = $this.attr('id');
				if ($originTower !== $destinationTower) {
					var selectedBox = $('.selected');
					$this.children().prepend(selectedBox);
					$('.selected').addClass('unselected').removeClass('selected');
				}
			}
		// }
	};