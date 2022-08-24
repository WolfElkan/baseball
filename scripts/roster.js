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
	// this.pos      = pos
	// this.first    = first
	// this.last     = last
	// this.dex      = {'bats':b,'throws':t}
	// this.college  = college
	// this.grade    = ['High School','Freshman','Sophomore','Junior','Senior'][grade]
	// this.hometown = hometown
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


R = 'right'
L = 'left'
S = 'ambidextrous'


// var roster = {'away': BAL, 'home': BOS}

// var roster = {
// 	'away':[4,8,7,23,24,40,19,5,16],
// 	'home':[19,13,20,29,3,40,24,30,22],
// }

var Abbott = Costello = [
	null,
	new Player(1,'1B',"Who"),
	new Player(2,'2B',"What"),
	new Player(3,'3B',"I Don't Know"),
	new Player(4,'LF',"Why"),
	new Player(5,'CF',"Because"),
	new Player(6,'P' ,"Tomorrow"),
	new Player(7,'C' ,"Today"),
	new Player(8,'SS',"I Don't Give A Darn"),
	new Player(9,'RF',"Nobody"),
]

var roster = {'away':[],'home':[]}

for (var i = 1; i <= 9; i++) {
	let a = new Player()
	a.jersey = '#'+i
	roster.away.push(a)
	let h = new Player()
	h.jersey = '#'+i
	roster.home.push(h)
}

function log_roster() {
	var awaynum = 'var awaynum=['
	var awaypos = 'var awaypos=['
	var homenum = 'var homenum=['
	var homepos = 'var homepos=['
	// var awaynum = awaypos = homenum = homepos = ''
	for (var i = 0; i < 9; i++) {
		awaynum += roster.away[i].jersey+","
		awaypos += "'"+roster.away[i].position+"',"
		homenum += roster.home[i].jersey+","
		homepos += "'"+roster.home[i].position+"',"
	}

	awaynum += ']'
	awaypos += ']'
	homenum += ']'
	homepos += ']'

	console.log(`${awaynum}\n${awaypos}\n${homenum}\n${homepos}`)
}

function submitroster() {
	for (var t = 0; t < 2; t++) {
		let team = ['away','home'][t]
		for (var i = 1; i <= 9; i++) {
			jersey = $(`#${team}_${i}_num`).val()
			if (jersey === null) {
				let manual = t ? homenum : awaynum
				jersey = manual[i-1]
			}
			player = getPlayer(GET[team],jersey)
			player.position = $(`#${team}_${i}_pos`).val()
			roster[team][i-1] = player
		}
	}
	log_roster()
	bases = [get_batter(),null,null,null,null]
	reimport({'key':'\u00ae'})
}

positions = ['','C','P','1B','2B','SS','3B','RF','CF','LF','DH']

function jpad(jersey) {
	if (jersey >= 100) {
		jersey = 0
	} 
	string = String(jersey)
	spacer = '&hairsp;'.repeat((string.match(/1/g) || []).length)
	if (jersey < 10) {
		spacer += '&nbsp;'
		// result += jersey
		// return `&nbsp;${jersey}&nbsp;`
		// return `&numsp;${jersey}`
	} 
	return spacer + string + spacer
	// else {
	// 	return jersey
	// }
}

// function jpad(jersey) {
// 	if (jersey >= 100) {
// 		jersey = 0
// 	}
// 	if (jersey >= 100) {
// 		jersey = 0
// 	}

// 	return `<div class="jersey">${jersey}</div>`
// }

$(document).ready(function() {
	$('.controls').hide()
	
	
	position_selects = $('.position')
	home_player_selects = $('.home-player')
	away_player_selects = $('.away-player')
	away_team = getTeam(GET.away)
	home_team = getTeam(GET.home)
	for (var i = 0; i < position_selects.length; i++) {
		for (var j = 0; j < positions.length; j++) {
			$(position_selects[i]).append(`<option value="${positions[j]}">${positions[j]}</option>`)
		}
		$(away_player_selects[i]).append(`<option value="0"></option>`)
		for (var j = 0; j < away_team.length; j++) {
			$(away_player_selects[i]).append(
				`<option value="${away_team[j].jersey}">${jpad(away_team[j].jersey)}&emsp;${away_team[j].name()}</option>`
			)
		}
		$(home_player_selects[i]).append(`<option value="0"></option>`)
		for (var j = 0; j < home_team.length; j++) {
			$(home_player_selects[i]).append(
				`<option value="${home_team[j].jersey}">${jpad(home_team[j].jersey)}&emsp;${home_team[j].name()}</option>`
			)
		}
	}

	// July20_ELZ_KNG()
	// submitroster()

	$('#submitroster').click(submitroster)
})


function July10_PUL_DAN_1() {
	var awaynum = [25,12,19,31,34,29,7,27,8]
	var awaypos = ['CF','3B','SS','1B','RF','LF','C','2B','DH']
	var homenum = [24,8,3,39,44,38,2,12,20]
	var homepos = ['2B','SS','CF','C','RF','1B','DH','LF','3B']
	// importroster()
}

function July14_BUR_BRS() {
	var awaynum = [3,17,8,35,10,27,12,13,1]
	var awaypos = ['SS','2B','DH','1B','C','RF','LF','3B','CF']
	var homenum = [25,18,4,78,9,26,3,34,28]
	var homepos = ['SS','LF','RF','C','CF','C','DH','1B','2B']
	importroster()
}

function July15_PRN_BLU() {
	var awaynum = [23,2,18,44,8,19,12,20,24]
	var awaypos = ['CF','LF','C','RF','SS','1B','DH','3B','2B']
	var homenum = [17,3,35,8,12,27,13,10,1]
	var homepos = ['2B','SS','DH','1B','LF','RF','3B','C','CF']
	importroster()
}

function July17_JCY_ELZ() {
	var awaynum = [34,50,36,37,60,6,5,15,2]
	var awaypos = ['CF','1B','C','3B','DH','LF','RF','SS','2B']
	var homenum = [14,2,25,24,12,37,32,28,13]
	var homepos = ['LF','SS','RF','3B','1B','DH','C','2B','CF']
	importroster()
}

function July20_ELZ_KNG() {
	var awaynum=[0,24,37,10,18,12,34,28,8]
	var awaypos=['LF','RF','3B','CF','DH','1B','C','SS','2B']
	var homenum=[4,62,12,35,7,63,66,28,2]
	var homepos=['DH','CF','RF','1B','LF','3B','2B','C','SS']
	importroster()
}

function importroster() {
	for (var i = 1; i <= 9; i++) {
		$(`#away_${i}_num`).val(awaynum[i-1])
		$(`#away_${i}_pos`).val(awaypos[i-1])
		$(`#home_${i}_num`).val(homenum[i-1])
		$(`#home_${i}_pos`).val(homepos[i-1])
	}
}

// away pitcher = 12
// home pitcher = 23


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

// roster = get_players(Abbott, Costello, roster)




