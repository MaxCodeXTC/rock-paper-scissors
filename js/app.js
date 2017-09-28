$(function(){

// Global Variables
var leftHand = $('#left-hand');
var rightHand = $('#right-hand');
var left = $('#left');
var right = $('#right');
var sec = 0;
var playerOneWin = 0;
var playerTwoWin = 0;
var round = 1;
	
	// function enterName() {
	// 	var playerOne = prompt("Player One enter your name", "Name");
	// 	$('#playerOne').html(playerOne + " :");
	// }

	// enterName();
	
	// Click button to start countdown
	$('header').on('click', 'button', function(){
		startCountdown();
		setTimeout(function() {
			hasWon();
		}, 5000);
		//Changes background image depending on round
		if (round === 2) {
			$('body').css('background-image', 'url(images/Battleback_coliseum.png)');
		}
	});	

	// Once function is called, players can choose R/P/S but choices are disabled after 3 seconds
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
		left.addClass('alt')
			.removeClass('spinLeft leftLose');
		right.addClass('alt')
			.removeClass('spinRight rightLose');
		leftHand.attr('src', 'images/player1-hand.png')
				.removeClass('newHand rock paper scissors');
		rightHand.attr('src', 'images/player2-hand.png')
				.removeClass('newHand rock paper scissors');

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

//Determines all win states and adds according animations
function hasWon() {	
	if (leftHand.hasClass('rock') && rightHand.hasClass('scissors') ||
		leftHand.hasClass('paper') && rightHand.hasClass('rock') ||
		leftHand.hasClass('scissors') && rightHand.hasClass('paper')){
		playerOneWin += 1;
		round += 1;
		left.addClass('spinLeft').removeClass('alt leftLose');
		right.addClass('rightLose').removeClass('alt');
	} else if (rightHand.hasClass('rock') && leftHand.hasClass('scissors') ||
			  	rightHand.hasClass('paper') && leftHand.hasClass('rock') ||
				rightHand.hasClass('scissors') && leftHand.hasClass('paper')) {
		playerTwoWin += 1;
		round += 1;
		right.addClass('spinRight').removeClass('alt rightLose');
		left.addClass('leftLose').removeClass('alt');
	} else {
		left.addClass('spinLeft').removeClass('alt leftLose');
		right.addClass('spinRight').removeClass('alt rightLose');
	}
	// Adds score depending on win state
	$('#playerOneScore').text(playerOneWin);
	$('#playerTwoScore').text(playerTwoWin);

	//If player gets 5 wins the page reloads
	if (playerOneWin === 5) {
		alert('Player One Wins! Click okay to restart.');
		location.reload();
	} else if (playerTwoWin === 5) {
		alert('Player Two Wins! Click okay to restart');
		location.reload();
	}
}

});