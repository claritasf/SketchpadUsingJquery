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
		$('.container').off('mouseenter', '.square');

	});

	$('#colors').on('change', function() {
    
    	var color = $("#colors option:selected").val();
    	switch(color){
		  case 'black':
		    $('.container').on('mouseenter', '.square', function(){
			$(this).css("background-color", 'black');
			});
		    break;
		  case 'blue':
		    $('.container').on('mouseenter', '.square', function(){
			$(this).css("background-color", 'blue');
			});
		    break;
		  case 'red':
		    $('.container').on('mouseenter', '.square', function(){
			$(this).css("background-color", 'red');
			});
		    break;
		  case 'yellow':
		    $('.container').on('mouseenter', '.square', function(){
			$(this).css("background-color", 'yellow');
			});
		    break;
		  case 'rainbow':
		    $('.container').on('mouseenter', '.square', function(){
			var multiplecolor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
			$(this).css("background",multiplecolor);
			});
		}	
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