function drawGrid (height, width){

		for (i=0; i < height; i++){
   			$('<div>').addClass('square-line').appendTo(".container");
   		};
    
    	var squareWidth = 600/width;
    	for (j=0; j < width; j++){
    		$('<div>').addClass('square').css("width",squareWidth).css("height",squareWidth).appendTo(".square-line");	
		};

	}

$(document).ready(function(){
    var height = 16;
    var width = 16;

    drawGrid (height, width);
	
	$('.button').on('click', function() {
		$('.square').removeAttr( 'style');
		$('.container').find('.change').removeClass('change');
		$('.container').off('mouseenter', '.square');

	});

	$('.colorButton').on('click', function() {
		$('.container').on('mouseenter', '.square', function(){
			var color = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
			$(this).css("background",color);
		});

	});

	$('.BWbutton').on('click', function() {
		$('.container').on('mouseenter', '.square', function(){	
			$(this).addClass('change');
		});
	});

	$('.newGrid').on('click', function() {
		
		$('.square-line').remove();
		var value = prompt('How many Squares per size do you want?');
		var height = value;
    	var width =value;
    	
    	drawGrid (height, width);
		
	});
	


});