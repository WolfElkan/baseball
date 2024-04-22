league_roster = csv_to_object(roster_csv)

function team(abbr) {
	result = {'abbr':abbr}
	let listing = league[abbr]
	if (listing) {
		result['location'] = listing[0]
		result['mascot']   = listing[1]
	}
	return result
}

AWAY = team(GET.away)
HOME = team(GET.home)

function Player(datum) {
	for (key in datum) {
		this[key] = datum[key]
	}
	this.jersey = Number(this.jersey)// < 100 ? this.jersey : 0)
	this.dob = new Date(this.dob)
	this.height   = Number(this.height)
	this.weight   = Number(this.weight)

	this.hits = 0
	this.runs = 0
	this.outs = 0
	this.hit = function() {this.hits++}
	this.run = function() {this.runs++}
	this.out = function() {this.outs++}
	this.clear = function() {
		this.hits = 0
		this.runs = 0
		this.outs = 0
	}
	this.sp = function(position) {
		this.position = position
		return this
	}
	this.sfx = function(suffix) {
		this.suffix = suffix
		return this
	}
	this.name = function() {
		result = ''
		if (this.first) {
			result += this.first
			if (this.first.length == 1) {
				result += '.'
			}
		}
		if (this.middle) {
			result += ' '
			result += this.middle
			if (this.middle.length == 1) {
				result += '.'
			}
		}
		if (this.last) {
			result += ' '
			result += this.last
			if (this.last.length == 1) {
				result += '.'
			}
		}
		if (this.suffix) {
			result += ' '
			result += this.suffix
			if (this.suffix.includes('r')) {
				result += '.'
			}
		}
		return result
	}
	this.svg = function(pos) {
		if (GET['home'] == this.team) {
			$('.'+pos).addClass('home')
		}
		if (GET['away'] == this.team) {
			$('.'+pos).addClass('away')
		}
		$('.'+pos).addClass(this.team)
		$('text.'+pos).text(this.jersey)
		$('circle.'+pos).append(`<title>${this.name()}</title>`)
		$('polygon.'+pos).append(`<title>${this.name()}</title>`)
	}
	this.repr = function() {
		result = `getPlayer("${this.team}",${this.jersey < 10 ? ' ' : ''}${this.jersey})`
		if (this.position) {
			result += `.sp("${this.position}")`
		}
		return result
	}
}

function get_player_data(team, jersey) {
	for (var i = 0; i < league_roster.length; i++) {
		if (league_roster[i].team == team && league_roster[i].jersey == jersey) {
			return league_roster[i]
		}
	}
}

function getPlayerByName(first, last) {
	for (var i = 0; i < league_roster.length; i++) {
		if ((first || league_roster[i].first) == first && league_roster[i].last == last) {
			let player = league_roster[i]
			return `getPlayer('${player.team}',${player.jersey})`
		}
	}
}

function getPlayer(team, jersey) {
	var player = get_player_data(team, jersey)
	if (player) {
		return new Player(player)
	} else {
		return {
			'team':team,
			'jersey':jersey,
		}
	}
}

function getTeam(team) { // By Jersey Number
	var result = []
	for (var jersey = 1; jersey <= 50; jersey++) {
		player = new Player(get_player_data(team, jersey))
		if (player) {
			result.push(player)
		}
	}
	return result
}

function getTeam(team) { // Alphabetical
	if (['East','West'].includes(team)) {
		return getAllStarTeam(team)
	}
	var result = []
	for (var i = 0; i < league_roster.length; i++) {
		if (league_roster[i].team == team) {
			player = new Player(league_roster[i])
			result.push(player)
		}
	}
	return result
}

// Default Lineup

var lineup = {'away':[],'home':[]}

for (var i = 0; i <= 9; i++) {
	let a = new Player()
	// a.jersey = '#'+i
	a.jersey = '_'
	lineup.away.push(a)
	let h = new Player()
	// h.jersey = '#'+i
	h.jersey = '_'
	lineup.home.push(h)
}

function array_to_string(array, quote='"', separator="") {
	result = '[' + separator
	for (var i = 0; i < array.length; i++) {
		if (type(array[i]) == String) {
			result += quote + array[i] + quote
		} else {
			result += array[i]
		}
		if (i < array.length - 1) {
			result += "," + separator
		}
	}
	result += ']'
	return result
}

// function log_lineup() {
// 	var awaynum = 'var awaynum=['
// 	var awaypos = 'var awaypos=['
// 	var homenum = 'var homenum=['
// 	var homepos = 'var homepos=['
// 	for (var i = 0; i <= 9; i++) {
// 		awaynum += lineup.away[i].jersey+","
// 		awaypos += "'"+lineup.away[i].position+"',"
// 		homenum += lineup.home[i].jersey+","
// 		homepos += "'"+lineup.home[i].position+"',"
// 	}

// 	awaynum += ']'
// 	awaypos += ']'
// 	homenum += ']'
// 	homepos += ']'

// 	console.log(`${awaynum}\n${awaypos}\n${homenum}\n${homepos}`)
// }

function log_lineup() {
	let lineup_away = []
	for (var i = 0; i < lineup.away.length; i++) {
		if (lineup.away[i] && lineup.away[i].repr) {
			lineup_away.push(lineup.away[i].repr())
		} else {
			lineup_away.push(null)
		}
	}
	let lineup_home = []
	for (var i = 0; i < lineup.home.length; i++) {
		if (lineup.home[i] && lineup.home[i].repr) {
			lineup_home.push(lineup.home[i].repr())
		} else {
			lineup_home.push(null)
		}
	}
	console.log(
`lineup = {
	'away':${array_to_string(lineup_away,'','\n\t\t')},
	'home':${array_to_string(lineup_home,'','\n\t\t')},
}
selectlineup()
`	)
}

function submitlineup() {
	lineup = {
		'away':[null,null,null,null,null,null,null,null,null,null],
		'home':[null,null,null,null,null,null,null,null,null,null],
	}
	for (var t = 0; t < 2; t++) {
		let ah = ['away','home'][t]

		lineup[ah][0] = get_pitcher(ah)
		for (var i = 1; i <= 9; i++) {
			jersey = $(`#${ah}_${i}_num`).val()
			// console.log(i, $(`#${ah}_${i}_num`))
			// if (jersey === null) {
			// 	let manual = t ? homenum : awaynum
			// 	jersey = manual[i-1]
			// }
			player = getPlayer(GET[ah],jersey)
			player.position = $(`#${ah}_${i}_pos`).val()
			lineup[ah][i] = player
		}
	}
	log_lineup()
	bases = [get_batter(),null,null,null,null]
	reimport({'key':'\u00ae'})
}

positions = ['','C',
// 'P',
'1B','2B','SS','3B','RF','CF','LF','DH']

function jpad(jersey) {
	if (jersey >= 100) {
		jersey = 0
	} 
	string = String(jersey)
	spacer = '&hairsp;'.repeat((string.match(/1/g) || []).length)
	if (jersey < 10) {
		spacer += '&nbsp;'
	} 
	return spacer + string + spacer
}

roster = {
	'away':{'pitcher':[],'hitter':[]},
	'home':{'pitcher':[],'hitter':[]},
}
for (var t = 0; t < 2; t++) {
	let ah = ['away','home'][t]
	let team = GET[ah]
	let team_roster = getTeam(team)
	for (var i = 0; i < team_roster.length; i++) {
		let player = team_roster[i]
		roster[ah][player.pos == 'P' ? 'pitcher' : 'hitter'].push(player)
	}
}

$(document).ready(function() {
	$('.controls').hide()

	position_selects = $('.position')
	for (var i = 0; i < position_selects.length; i++) {
		for (var j = 0; j < positions.length; j++) {
			$(position_selects[i]).append(`<option value="${positions[j]}">${positions[j]}</option>`)
		}
	}

	for (var i = 0; i < 2; i++) {
		let ah = ['away','home'][i]
		let team = GET[ah]

		$(`.${ah}-hitter`).append(`<option value="0"></option>`)

		for (var j = 0; j < 2; j++) {
			let ph = ['pitcher','hitter'][j]
			for (var k = 0; k < roster[ah][ph].length; k++) {
				let player = roster[ah][ph][k]
				$(`.${ah}-${ph}`).append(
					`<option value="${player.jersey}">${jpad(player.jersey)}&emsp;${player.name()}</option>`
				)
			}
		}

	}
	
	$('#submitlineup').click(submitlineup)

})

function importlineup() {
	for (var i = 1; i <= 9; i++) {
		$(`#away_${i}_num`).val(awaynum[i-1])
		$(`#away_${i}_pos`).val(awaypos[i-1])
		$(`#home_${i}_num`).val(homenum[i-1])
		$(`#home_${i}_pos`).val(homepos[i-1])
	}
}

function selectlineup() {
	for (var i = 0; i < 2; i++) {
		let ah = ['away','home'][i]
		let team = GET[ah]
		for (var j = 0; j <= 9; j++) {
			$(`#${ah}_${j}_num`).val(lineup[ah][j].jersey)
			$(`#${ah}_${j}_pos`).val(lineup[ah][j].position)
		}
	}
}

function get_players(away, home, order) {
	var roster = {
		'away':[],
		'home':[],
	}	
	for (var i = 0; i < 9; i++) {
		roster.home.push(home[order.home[i]])
		roster.away.push(away[order.away[i]])
	}
	return roster
}
