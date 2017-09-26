$(function(){
console.log('Working');

//Changes left hand to rock
$('body').keyup(function(e) {
	if (e.keyCode == 65) {
		$('#left-hand').attr('src', 'images/rock-left.png');
	}
});

//Changes left hand to paper
$('body').keyup(function(e) {
	if (e.keyCode == 83) {
		$('#left-hand').attr('src', 'images/paper-left.png').addClass('newHand');
	}
});


});