from parseplayers import parse_player_functions
import re
from asciify import asciify
from soup import get_soup

# league = 'appy'
# league = 'milb'
league = 'mlb'
# league = 'necbl'
# league = 'smb3'

if league == 'milb':
	division = 'milb_aa_eastern'
else:
	division = league

urls = {
	'appy':'https://www.appyleague.com/{}/roster',
	'milb':'https://www.milb.com/{}/roster',
	'mlb':'https://www.mlb.com/{}/roster',
	'necbl':'http://necbl.wttbaseball.pointstreak.com/team_roster.html?leagueid=204&seasonid=33205&teamid={}',
	'smb3':'https://redundantrobot.com/super_mega_baseball/',
}

teams = {
	'appy': {
		'BLU':'bluefield',
		'BUR':'burlington',
		'DAN':'danville',
		'PRN':'princeton',
		'PUL':'pulaski',
		'BRS':'bristol',
		'ELZ':'elizabethton',
		'GRN':'greeneville',
		'JCY':'johnson-city',
		'KNG':'kingsport',
	},
	'milb_aa_eastern': {
		'AK':'akron',
		'AT':'altoona',
		'BN':'binghamton',
		'BW':'bowie',
		'ER':'erie',
		'HR':'harrisburg',
		'HF':'hartford',
		'NH':'new-hampshire',
		'PT':'portland',
		'RD':'reading',
		'RM':'richmond',
		'SO':'somerset',
	},
	'mlb': {
		'BAL':'orioles',   # AE
		'BOS':'redsox',    # AE
		'NYY':'yankees',   # AE
		'TBR':'rays',      # AE
		'TOR':'bluejays',  # AE
		'CWS':'whitesox',  # AC
		'CLE':'guardians', # AC
		'DET':'tigers',    # AC
		'KCR':'royals',    # AC
		'MIN':'twins',     # AC
		'HOU':'astros',    # AW
		'LAA':'angels',    # AW
		'OAK':'athletics', # AW
		'SEA':'mariners',  # AW
		'TEX':'rangers',   # AW
		'ATL':'braves',    # NE
		'MIA':'marlins',   # NE
		'NYM':'mets',      # NE
		'PHI':'phillies',  # NE
		'WSH':'nationals', # NE
		'CHC':'cubs',      # NC
		'CIN':'reds',      # NC
		'MIL':'brewers',   # NC
		'PIT':'pirates',   # NC
		'STL':'cardinals', # NC
		'ARI':'dbacks',    # NW
		'COL':'rockies',   # NW
		'LAD':'dodgers',   # NW
		'SDP':'padres',    # NW
		'SFG':'giants',    # NW
	},
	# 'necbl':{
	# 	'Bristol':      89490, # BR
	# 	'Danbury':       6402, # DN
	# 	'Keene':         6401, # KN
	# 	'Vineyard':    142675, # MV
	# 	'Mystic':       11912, # MY
	# 	'Newport':       6458, # NW
	# 	'North Adams':   6404, # NA
	# 	'North Shore': 154432, # NS
	# 	'OceanState':   51489, # OS
	# 	'Sanford':       6459, # SN
	# 	'Upper':       104040, # UV
	# 	'Valley':        6403, # VL
	# 	'Vermont':       6405, # VT
	# 	'Winnipesaukee': 6462, # WN
	# }
	'necbl':{
		'BR':  89490,
		'DN':   6402,
		'KN':   6401,
		'MV': 142675,
		'MY':  11912,
		'NW':   6458,
		'NA':   6404,
		'NS': 154432,
		'OS':  51489,
		'SN':   6459,
		'UV': 104040,
		'VL':   6403,
		'VT':   6405,
		'WN':   6462,
	},
	'smb3':{0:None},

}

parse_player = parse_player_functions[league]

unknown_jersey = {'cur':101}
players = []

for team in teams[division]:
	print(team)
	location = teams[division][team]
	url = urls[league].format(location)

	soup = get_soup(url)
	# print soup
	if league in ['mlb','milb','appy']:
		player_tables = soup.findAll('table', {'class':'roster__table'})
		for table in player_tables:
			position = table.find('thead').find('td',{'colspan':2}).text
			if position not in ['Manager/Coach']:
				count = 0
				for tr in table.findAll('tr'):
					player = parse_player(tr, team, position, unknown_jersey)
					if player:
						players.append(player)
						# exit()
					# count += 1
		# print len(player_tables)
	elif league in ['necbl']:
		# col_md_12 = soup.find('div',{'class':'col-md-12'})
		# print col_md_12
		for h4 in soup.findAll('h4'):
			position = h4.text
			if position[-3:] == 'ers':
				player_table = h4.nextSibling.nextSibling
				for tr in player_table.findAll('tr'):
					player = parse_player(tr, team, position, unknown_jersey)
					if player:
						players.append(player)

		# player_tables = soup.findAll('table', {'class':'nova-stats-table'})
# print players
# print len(players)

def sortable(string):
	string = string.upper()
	string = ''.join(re.findall(r'[A-Z]', string))
	string = asciify(string)
	return string

players.sort(key=lambda player: sortable(player['first']))
players.sort(key=lambda player: sortable(player['last']))

headers = {
	'appy' :'team,pos,dob,B/T,height,weight,first,middle,last,suffix,jersey,school',
	'milb' :'playerid,team,pos,dob,B/T,height,weight,first,middle,last,suffix,jersey,status',
	'mlb'  :'team,pos,dob,B/T,height,weight,first,middle,last,suffix,jersey',
	'necbl':'playerid,team,pos,eligibility,B/T,height,weight,grade,homestate,first,middle,last,suffix,jersey,homecity,school,draftstatus',
}

replacements = {
	'B/T':'bt',
	'dob':'birthday:%Y-%m-%d',
	'eligibility':'eligibility:%Y-%m-%d',
}

header = headers[league]
# if 'playerid' in header:
# 	players.sort(key=lambda player: player['playerid'])
rowtemp = header.split(',')
rowtemp = [ replacements[col] if col in replacements else col for col in rowtemp ]
rowtemp = [ '{'+col+'}' for col in rowtemp ]
rowtemp = ','.join(rowtemp)

header += '\n'
rowtemp += '\n'

with open('../rosters/{}.csv.js'.format(division), 'w') as jsfile, open('../rosters/{}.csv'.format(division), 'w') as csvfile:
	jsfile.write('var roster_csv = `\n')
	jsfile.write(header)
	csvfile.write(header)
	for player in players:
		jsfile.write(rowtemp.format(**player))
		csvfile.write(rowtemp.format(**player))
	jsfile.write('`')
