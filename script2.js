
'use strict';

$(document).ready(function() {

	$('#block1').val(1);
	$('#block2').val(2);	
	$('#block3').val(3);	

	var blockSelected = false;
	var n;

	$('.block').click(function() {
		console.log('block');
		event.stopPropagation();
		var $this = $(this);
		var $wrapper = $this.parent()
		var numOfBlocks = $wrapper.children().length;
		var smallestBlockSize = 3;
		for( n = 0; n < numOfBlocks; n++) {
			var $block = $wrapper.children("div :nth-child(" + (n + 1) + ")");
			var blockSize = $block.val();
			if(blockSize <= smallestBlockSize) {
				smallestBlockSize = blockSize;
			}
		}

		if( $this.val() === smallestBlockSize) {

			if (!blockSelected) {
				$this.removeClass('unselected').addClass('selected');
				blockSelected = true;
				} else {
					$this.removeClass('selected').addClass('unselected');
					blockSelected = false;
					}	
		}
	})



	$('.tower').click(function() {
		console.log('tower');
		event.stopPropagation();
		var $wrapper = $(this).children('.wrapper');
		if (blockSelected) {
			var $selectedBlock = $('.selected');
			var $oldwrapper = $('.selected').parent();
			$('.selected').remove();
			$wrapper.prepend($selectedBlock)
			$wrapper.children('.selected').addClass('unselected').removeClass('selected');
			blockSelected = false;
		}
	})




})