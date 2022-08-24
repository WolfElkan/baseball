function fullscreen() {
	document.documentElement.requestFullscreen()
	$('body').css('background-color','black')
	$('button').css('background-color','#444')
	$('input').css('background-color','#444')
	$('.base').css('background-color','#444')
	$('.controls').hide()
	// $('.roster').hide()
}