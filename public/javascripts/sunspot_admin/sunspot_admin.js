function rotateFan() {
	var count = 0;
	$('still').toggle();
	$('spinning').toggle();
	playAudioFile('fan-start-audio');
	playAudioFile('fan-middle-audio');
	function rotate() {
	  var elem2 = $('spinning');
	  elem2.style.MozTransform = 'scale(1) rotate('+count+'deg)';
	  elem2.style.WebkitTransform = 'scale(1) rotate('+count+'deg)';
	  if (count==360) { count = 0 }
	  count+=90;
	  window.setTimeout(rotate, 25);
	}
	window.setTimeout(rotate, 25);
}

function playAudioFile(fileId) {
	$(fileId).play();
}

function stopAudioFile(fileId) {
	$(fileId).pause();
}