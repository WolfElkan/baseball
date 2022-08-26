var NBASES, BALLS, STRIKES, OUTS, INNINGS, FOULS
var balls, strikes, outs, runs, bases
var score, hits, errors, pitches, pitcher, homein, inning, batting_order, lob

// var lineup = []

// House Rules, total number that exist
NBASES = 3
BALLS = 4
STRIKES = 3
OUTS = 3
INNINGS = GET.innings ? GET.innings : 9
FOULS = Infinity // Number of fouls for a strikeout

var KeyBindings = {}

function newGame() {
	// Current count in game
	// bases = [true,false,false,false,false]
	balls = 0
	strikes = 0
	outs = 0
	runs = 0

	score = {
		'away':[null],
		'home':[null],
	}

	hits = {
		'away':0,
		'home':0,
	}

	errors = {
		'away':0,
		'home':0,
	}

	lob = {
		'away':0,
		'home':0,		
	}

	pitches = {
		'away':0,
		'home':0,
	}

	pitcher = {
		'away':0,
		'home':0,
	}

	batting_order = {
		'away':1,
		'home':0,
	}

	bases = [true]
	for (var i = 0; i < NBASES + 1; i++) {
		bases.push(null)
	}
	bases[0] = lineup.away[0]

	homein = false
	inning = 1

	// for (var i = 0; i < lineup.away.length; i++) {
	// 	lineup.away[i].reset()
	// }
	// for (var i = 0; i < lineup.home.length; i++) {
	// 	lineup.home[i].reset()
	// }
}

newGame()

function sum(arr) {
	var result = 0
	for (var i = 0; i < arr.length; i++) {
		result += arr[i]
	}
	return result
}

svg_icons = positions.concat(['H','B1','B2','B3'])


function get_inning() {
	if (homein) {
		box = $('#score .home td')
	} else {
		box = $('#score .away td')
	}
	box = box[inning]
	return $(box)
}

function pitch() {
	pitches[homein ? 'home' : 'away']++
}

function ball() {
	balls++
	if (balls >= BALLS) walk()
}
KeyBindings.b = ball

function walk() {
	readvance(0)
}
KeyBindings.h = walk
	
function strike() {
	strikes++
	if (strikes >= STRIKES) strikeout()
}
KeyBindings.s = strike

function strikeout() {
	out()
	bases[0] = null
}
KeyBindings.p = strikeout

KeyBindings.n = () => {
	batting_order[homein ? 'home' : 'away']--
}

function foul() {
	if (strikes < 2) strike()
}
KeyBindings.f = foul

function out() {
	outs++
	if (outs >= 3) {
		next_inning()
	}
	three_run_rule()
}
KeyBindings.o = out

function standard_hit(nBases) {
	// nBases = 1 for single, 2 for double, 3 for triple, 4 for home run
	for (var i = 1; i <= nBases; i++) {
		readvance(i-1)
	}
	hits[ homein ? 'home' : 'away' ]++
}
KeyBindings['1'] = () => {standard_hit(1)}
KeyBindings['2'] = () => {standard_hit(2)}
KeyBindings['3'] = () => {standard_hit(3)}
KeyBindings['4'] = () => {standard_hit(4)}

function steal_first() {
	readvance(1)
	bases[1] = bases[0]
	bases[0] = null
}
KeyBindings['`'] = steal_first
KeyBindings.a = steal_first // counts as pitch
KeyBindings['+'] = () => {batting_order[homein ? 'home' : 'away']++}
KeyBindings['-'] = () => {batting_order[homein ? 'home' : 'away']--}

function readvance(base) {
	// runner on base b moves to b+1
	if (base == 4) {
		// This case should only be called by recursion
		return null
	}
	if (bases[base+1]) {
		readvance(base+1)
	}
	bases[base+1] = bases[base]
	bases[base] = null
	if (bases[4]) {
		run()
	}
	return bases
}

function advance(base) {
	// runner on base b-1 moves to b
	if (bases[base-1] && !bases[base]) {
		bases[base] = bases[base-1]
		bases[base-1] = null
		if (bases[4]) {
			run()
		}
	}
}
KeyBindings.q = () => {advance(2)}
KeyBindings.w = () => {advance(3)}
KeyBindings.e = () => {advance(4)}

function error() {
	errors[ homein ? 'away' : 'home' ]++
}
KeyBindings.r = error

function run() {
	runs++
	get_inning().text(runs)
	score[homein ? 'home' : 'away'][inning] = runs
	if (homein && inning >= INNINGS && sum(score['home']) > sum(score['away'])) game_over()
	three_run_rule()
	bases[4] = null
	return runs
}

function game_over() {
	$('.circles div').removeClass('true')
	$('.circles div').css('background-color','gray')

	buttons = $('button')
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].disabled = true
	}

	$('.arrow').html('')
	$('.inning').text('Final')
}

function baseout(base) {
	if (bases[base]) {
		// bases[base].out()
		bases[base] = null
		out()
	}
}
KeyBindings['!'] = () => {baseout(1)}
KeyBindings['@'] = () => {baseout(2)}
KeyBindings['#'] = () => {baseout(3)}



function new_pitcher() {
	pitches[homein ? 'home' : 'away'] = 0
	RENDER()
}
KeyBindings['0'] = new_pitcher

function get_batter() {
	let team = homein ? 'home' : 'away'
	return lineup[team][batting_order[team]-1]
}

function next_batter() {
	let team = homein ? 'home' : 'away'
	batting_order[team] %= 9
	batting_order[team] ++
	strikes = 0
	balls = 0
	return get_batter()
}
KeyBindings.n = next_batter

function display_players() {}

function next_inning() {
	outs = 0
	var go = true
	var extend = false

	var team = homein ? 'home' : 'away'

	score[team][inning] = runs

	if (inning >= INNINGS) {
		if (homein && sum(score['home']) == sum(score['away'])) {
			extend = true
		} else if (homein || sum(score['home']) > sum(score['away'])) {
			game_over()
			go = false
		}
	}

	for (var i = 1; i <= 3; i++) {
		if (bases[i]) {
			lob[team]++
		}
	}

	var _old_inning = get_inning()

	if (homein) inning++
	homein = !homein
	
	var _new_inning = get_inning()

	$('.score td').removeClass('current_inning')

	$(_old_inning).text(runs)
	runs = 0

	bases = [get_batter(),null,null,null,null]

	if (extend) {
		rows = $('table.score tr')
		rows[0].innerHTML += `<th>${inning}</th>`
		rows[1].innerHTML += '<td class="current_inning"></td>'
		rows[2].innerHTML += '<td></td>'
	}

	if (go) {
		$(_new_inning).addClass('current_inning')
	}
	display_players()
}

function three_run_rule() {
	return false
	if (runs >= 3 && !(bases[1]||bases[2]||bases[3])) next_inning()
}

// Meta Functions

function event(key) {
	if ('AQWE'.includes(key)) {
		error()
	}

	key = key.toLowerCase()

	if ('bsfph1234aj'.includes(key)) {
		pitch()
	}

	if (key in KeyBindings) {
		KeyBindings[key]()
	}

	if (!bases[0]) {
		bases[0] = next_batter()
	}

}

function j(team, order, jersey) {
	lineup[team][order-1].jersey = jersey
}

function homej(order, jersey) {
	j('home', order, jersey)
}

function awayj(order, jersey) {
	j('away', order, jersey)
}

// function log(key) {
// 	if (key.length == 1) { console.log(key, new Date().toISOString()) } else { console.log(new Date().toISOString(), key) }
// }


function log(key, extra='') {
	console.log(key, new Date(new Date().valueOf()).toISOString(), extra)
}

function reimport(press) {
	var before = $('#keys')[0].value
	setTimeout(function() {
		var after = $('#keys')[0].value
		if (press) {
			if (before + press.key == after) {
				log(press.key)
			} else {
				log(`\u2192`,after)
			}
		} else if (before != after) {
			if (before.slice(0,-1) == after) {
				log(`\u2190`)
			} else {
				log(`\u2193`,after)
			}
		}
		newGame()
		for (var i = 0; i < after.length; i++) {
			event(after[i])
		}
		RENDER()
	}, 0);
}

$(document).ready(function() {

	if (FOULS != Infinity) {
		for (var i = 0; i < FOULS; i++) {
			$(".foulcircles").append("<div></div>")
		}
	}

	// $('.yyyymmdd').text(strftime(new Date(), '%Y%m%d'))
	$('.away_abbr').text(GET['away'])
	$('.home_abbr').text(GET['home'])

	for (var i = 2; i <= INNINGS; i++) {
		let inhead = document.createElement('th')
		$(inhead).text(i)
		$('#score').find('thead').find('tr').find('th')[i-1].after(inhead)
		
		let away = document.createElement('td')
		$('#score').find('tr.away').find('td')[i-1].after(away)
		
		let home = document.createElement('td')
		$('#score').find('tr.home').find('td')[i-1].after(home)
	}

	$('#fullscreen').click(fullscreen)

	$('#keys').keypress(function(press) {
		reimport(press)
	})
	$('html').keydown(function(press) {
		if(press.keyCode == 8) {
			reimport()
	 	}
	});

	RENDER()

})