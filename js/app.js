$(function(){
	// Global Variables
	var leftHand = $('#left-hand');
	var rightHand = $('#right-hand');
	var left = $('#left');
	var right = $('#right');
	var sec = 0;
	var playerOneWin = 0;
	var playerTwoWin = 0;
	
	$('header').on('click', 'button', function(){
		startCountdown();
		setTimeout(function() {
			hasWon();
		}, 5000);
	});	


	function startCountdown() {
		sec = 3;
		var timer = setInterval(function(){
			$('#countdown').text(sec--);
			$('#countdown').fadeIn('fast');
			if(sec == 0) {
				$('#countdown').fadeOut('slow');
				clearInterval(timer);
			}
		}, 1000);
		$('#left').toggleClass('alt');
		$('#right').toggleClass('alt');

		//Changes left hand to rock
		$('body').keyup(function(e) {
			if (e.keyCode == 81 && sec > 0) {
				$('#left-hand')
				.attr('src', 'images/rock-left.png')
				.addClass('newHand rock')
				.removeClass('paper scissors');
			}

		});

		//Changes left hand to paper
		$('body').keyup(function(e) {
			if (e.keyCode == 87 && sec > 0) {
				$('#left-hand')
				.attr('src', 'images/paper-left.png')
				.addClass('newHand paper')
				.removeClass('rock scissors');
			}
		});

		//Changes left hand to scissors
		$('body').keyup(function(e) {
			if (e.keyCode == 69 && sec > 0) {
				$('#left-hand')
				.attr('src', 'images/scissors-left.png')
				.addClass('newHand scissors')
				.removeClass('rock paper');
			}
		});

		//Changes right hand to rock
		$('body').keyup(function(e) {
			if (e.keyCode == 73 && sec > 0) {
				$('#right-hand')
				.attr('src', 'images/rock-right.png')
				.addClass('newHand rock')
				.removeClass('paper scissors');

			}
		});

		//Changes right hand to paper
		$('body').keyup(function(e) {
			if (e.keyCode == 79 && sec > 0) {
				$('#right-hand')
				.attr('src', 'images/paper-right.png')
				.addClass('newHand paper')
				.removeClass('rock scissors');
			}
		});

		//Changes right hand to scissors
		$('body').keyup(function(e) {
			if (e.keyCode == 80 && sec > 0) {
				$('#right-hand')
				.attr('src', 'images/scissors-right.png')
				.addClass('newHand scissors')
				.removeClass('rock paper');
			}
		});

	}
function hasWon() {	
	if (leftHand.hasClass('rock') && rightHand.hasClass('scissors') ||
		leftHand.hasClass('paper') && rightHand.hasClass('rock') ||
		leftHand.hasClass('scissors') && rightHands.hasClass('paper')){
	}
	left.toggleClass('spin');
	playerOneScore += 1;
}

	//Check for left hand winner 


});