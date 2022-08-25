function type(obj) {
	return obj.__proto__.constructor
}

const colors = {
	'Keene':'#672d91',
}

const necbl = {
	'Bristol'      :'logos/NECBL/necbl_com/Bristol.png',
	'Danbury'      :'logos/NECBL/necbl_com/Danbury.png',
	'Keene'        :'logos/NECBL/necbl_com/Keene.png',
	'Mystic'       :'logos/NECBL/other/Mystic.png',
	'Newport'      :'logos/NECBL/necbl_com/Newport.png',
	'NorthAdams'   :'logos/NECBL/necbl_com/NorthAdams.png',
	'NorthShore'   :'logos/NECBL/necbl_com/NorthShore.png',
	'OceanState'   :'logos/NECBL/necbl_com/OceanState.jpeg',
	'Sanford'      :'logos/NECBL/other/Sanford.png',
	'Upper'        :'logos/NECBL/other/Upper.png',
	'Valley'       :'logos/NECBL/necbl_com/Valley.png',
	'Vermont'      :'logos/NECBL/other/Vermont.png',
	'Vineyard'     :'logos/NECBL/necbl_com/Vineyard.png',
	'Winnipesaukee':'logos/NECBL/other/Winnipesaukee.png',
}


const mlb = [
	'BAL','BOS','NYY','TBR','TOR', // AL East
	'CLE','CWS','DET','KCR','MIN', // AL Cent
	'HOU','LAA','OAK','SEA','TEX', // AL West
	'ATL','MIA','NYM','PHI','WSH', // NL East
	'CHC','CIN','MIL','PIT','STL', // NL Cent
	'ARI','COL','LAD','SDP','SFG', // NL West
]

const appy = {
	'east':['BLU','BUR','DAN','PRN','PUL'],
	'west':['BRS','ELZ','GRN','JCY','KNG'],
}

const milb_aa_east = [
	'AK',
	'AT',
	'BN',
	// 'BW',
	// 'ER',
	// 'HR',
	// 'HF',
	// 'NH',
	// 'PT',
	'RD',
	// 'RM',
	'SO',
]

$(document).prop('title',`${AWAY.abbr} vs ${HOME.abbr}`)

function index(team) {
	if (team in necbl) {
		return necbl[team]
	}
	else if (mlb.includes(team)) {
		return `logos/MLB/sportslogos_net/${team}.png`
	}
	else if (appy.east.includes(team)) {
		return `logos/Appy/wikipedia/east/${team}.png`
	}
	else if (appy.west.includes(team)) {
		return `logos/Appy/wikipedia/west/${team}.png`
	}
	else if (milb_aa_east.includes(team)) {
		return `logos/MiLB/AA_East/${team}.png`
	}
}

$(document).ready(function() {
	$('.away.teamname').text(AWAY.mascot)
	$('.home.teamname').text(HOME.mascot)
	$('.away .teamloc').text(AWAY.location)
	$('.home .teamloc').text(HOME.location)
	$('.away .teamcolor').addClass(AWAY.abbr)
	$('.home .teamcolor').addClass(HOME.abbr)
	if (src = index(GET.away)) {
		$('.away.teamlogo').html(`<img src="../../${src}">`)
	} else {
		$('.away.teamlogo').text(AWAY.abbr)
	}
	if (src = index(GET.home)) {
		$('.home.teamlogo').html(`<img src="../../${src}">`)
	} else {
		$('.home.teamlogo').text(HOME.abbr)
	}
})

