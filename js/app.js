$(function(){

$('header').on('click', 'button', function() {
	var sec = 3;
	var timer = setInterval(function(){
		$('#countdown').text(sec--);
		if(sec == 0) {
			$('#countdown').fadeOut('fast');
			clearInterval(timer);
		}
	}, 1000);
	$('#left').toggleClass('alt');
	$('#right').toggleClass('alt');

	//Changes left hand to rock
	$('body').keyup(function(e) {
		if (e.keyCode == 65) {
			$('#left-hand')
			.attr('src', 'images/rock-left.png')
			.addClass('newHand rock');
		}
	});

	//Changes left hand to paper
	$('body').keyup(function(e) {
		if (e.keyCode == 83) {
			$('#left-hand')
			.attr('src', 'images/paper-left.png')
			.addClass('newHand')
			.removeClass('rock');
		}
	});

	//Changes left hand to scissors
	$('body').keyup(function(e) {
		if (e.keyCode == 68) {
			$('#left-hand')
			.attr('src', 'images/scissors-left.png')
			.addClass('newHand')
			.removeClass('rock');
		}
	});

	//Changes right hand to rock
	$('body').keyup(function(e) {
		if (e.keyCode == 37) {
			$('#right-hand')
			.attr('src', 'images/rock-right.png')
			.addClass('newHand rock');

		}
	});

	//Changes right hand to paper
	$('body').keyup(function(e) {
		if (e.keyCode == 40) {
			$('#right-hand')
			.attr('src', 'images/paper-right.png')
			.addClass('newHand')
			.removeClass('rock');
		}
	});

	//Changes right hand to scissors
	$('body').keyup(function(e) {
		if (e.keyCode == 39) {
			$('#right-hand')
			.attr('src', 'images/scissors-right.png')
			.addClass('newHand')
			.removeClass('rock');
		}
	});

});

});