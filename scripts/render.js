function fullscreen() {
	document.documentElement.requestFullscreen()
	$('body').css('background-color','black')
	$('polygon.mask').css('fill','black')
	$('button').css('background-color','#444')
	$('input').css('background-color','#444')
	$('.base').css('background-color','#444')
	$('.controls').hide()
	// $('.roster').hide()
}

function RENDER() {

	for (var i = 1; i < svg_icons.length; i++) {
		$('.'+svg_icons[i]).removeClass('away')
		$('.'+svg_icons[i]).removeClass(GET['away'])
		$('.'+svg_icons[i]).text('')
		$('.'+svg_icons[i]).removeClass('home')
		$('.'+svg_icons[i]).removeClass(GET['home'])
		$('.'+svg_icons[i]).text('')
	}

	for (var i = 1; i <= 3; i++) {
		render(bases[i], $(`#b${i}`))
		render(bases[i], $(`#bs${i}`))
		if (bases[i]) {
			bases[i].svg('B'+i)
		}
	}
	bases[0].svg('H')
	$(`#bs0`).text(bases[0].jersey)
	// $(`text.H`).text(bases[0].jersey)
	render(bases[0])

	for (var i = 0; i < bases.length; i++) {
		if (bases[i]) {
			$(`#bs${i}`).text(bases[i].jersey)
			if (bases[i].name) {
				$(`#bs${i}`).prop('title',`${bases[i].position} ${bases[i].name()}`)
			}
		} else {
			$(`#bs${i}`).html('&nbsp;')
			$(`#bs${i}`).prop('title','')
		}
	}

	var _balls = $('#balls div.circles div')
	for (var i = 0; i < 3; i++) {
		render(balls > i, _balls[i])
	}
	$('.nballs').text(balls)

	var _strikes = $('#strikes div.circles div')
	for (var i = 0; i < 3; i++) {
		render(strikes > i, _strikes[i])
	}
	$('.nstrikes').text(strikes)

	var _outs = $('#outs div.circles div')
	for (var i = 0; i < 3; i++) {
		render(outs > i, _outs[i])
	}
	$('.nouts').text(outs)

	$('.pitchcount').text(pitches[homein ? 'home' : 'away'])

	$('.away .runs').text(sum(score.away))
	$('.home .runs').text(sum(score.home))
	
	$('.away .hits').text(hits.away)
	$('.home .hits').text(hits.home)
	
	$('.away .errors').text(errors.away)
	$('.home .errors').text(errors.home)

	$('.away .lob').text(lob.away)
	$('.home .lob').text(lob.home)

	$('.arrow').html(homein ? '&#9660;' : '&#9650;')
	$('.inning').text(inning)

	$('.roster td').removeClass('atbat')
	if (homein) {
		$(`td.home_${batting_order.home}`).addClass('atbat')
	} else {
		$(`td.away_${batting_order.away}`).addClass('atbat')
	}

	defending_roster = roster[homein ? 'away' : 'home']
	for (var i = 0; i < defending_roster.length; i++) {
		if (defending_roster[i] && defending_roster[i].svg) {
			position = defending_roster[i].position
			defending_roster[i].svg(position)
		}
	}

}

function render(condition,element) {
	if (condition) {
		$(element).addClass('true')
	} else {
		$(element).removeClass('true')
	}
}
