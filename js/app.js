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

// Click button to start countdown and call all functions inside
$('header').on('click', 'button', function(){
	startCountdown();
	setTimeout(function() {
		hasWon();
	}, 6100);
	$('#first2three').text('Round:' + round);
	changeScreen();
});	

/* Once function is called, players can choose R/P/S but choices are disabled after 3 seconds
 * Classes are all reset as well
*/
function startCountdown() {
	sec = 4;
	var timer = setInterval(function(){
		$('#countdown').fadeIn('fast');
		$('#countdown').text(sec--);
		if(sec == 0) {
			$('#countdown').fadeOut('slow');
			clearInterval(timer);
		}
	}, 1000);
	left.addClass('alt')
		.removeClass('spinLeft leftLose');
	right.addClass('alt')
		.removeClass('spinRight rightLose');
	leftHand.attr('src', '')
			.removeClass('newHand rock paper scissors');
	rightHand.attr('src', '')
			.removeClass('newHand rock paper scissors');
	$('#oneWinner, #twoWinner, #tie').removeClass('alt');
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
		$('#oneWinner').addClass('alt');
	} else if (rightHand.hasClass('rock') && leftHand.hasClass('scissors') ||
			  	rightHand.hasClass('paper') && leftHand.hasClass('rock') ||
				rightHand.hasClass('scissors') && leftHand.hasClass('paper')) {
		playerTwoWin += 1;
		round += 1;
		right.addClass('spinRight').removeClass('alt rightLose');
		left.addClass('leftLose').removeClass('alt');
		$('#twoWinner').addClass('alt');
	} else {
		left.addClass('spinLeft').removeClass('alt leftLose');
		right.addClass('spinRight').removeClass('alt rightLose');
		$('#tie').addClass('alt');
	}
	// Adds score depending on win state
	$('#playerOneScore').text(playerOneWin);
	$('#playerTwoScore').text(playerTwoWin);

	//If player gets 5 wins the page reloads
	if (playerOneWin === 3) {
		alert('Player One Wins! Click ok to restart.');
		location.reload();
	} else if (playerTwoWin === 3) {
		alert('Player Two Wins! Click ok to restart');
		location.reload();
	}
}

//Changes background image depending on round
function changeScreen() {
	if (round === 2) {
		$('body').css('background-image', 'url(images/space.jpg)');
	} else if (round == 3) {
		$('body').css('background-image', 'url(images/Battleback_coliseum.png)');
	} else if (round === 4) {
		$('body').css('background-image', 'url(images/Arena_Battle_Background.jpg)');
	} else if (round === 5) {
		$('body').css('background-image', 'url(images/final.jpg)');
	}
}

});