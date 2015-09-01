'use strict';

$(document).ready(init);

function init() {
	console.log('this');
	$('#block1').val(1);
	$('#block2').val(2);	
	$('#block3').val(3);
	var blockSelected = $('.selected').length;	
	console.log(blockSelected);
	$('.block').on('click', blockToggle);
	$('.tower').on('click', moveBlock);
}

function blockToggle(event){
	console.log('block');
	event.stopPropagation();
	if ($(this).hasClass("selected")) {
		$(this).removeClass('selected').addClass('unselected');
	} else {
	$(this).removeClass('unselected').addClass('selected');
		}
};


function moveBlock(event) {
	event.stopPropagation();
	var $this = $(this);
	var $selectedBlock = $this.children().children('.selected')
		if ($selectedBlock.length === 0) {
			var $originTower = $('.selected').parent().parent().attr('id');
			var $destinationTower = $this.attr('id');
			if ($originTower !== $destinationTower) {
				var selectedBox = $('.selected');
				$this.children().prepend(selectedBox);
				$('.selected').addClass('unselected').removeClass('selected');
			}
		}
	};