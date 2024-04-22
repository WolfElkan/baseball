import re, datetime

name_formats = [
	r'^(?P<first>[A-Z])?(?P<middle>[A-Z]) (?P<last>[^ ]+)$',
	r'^(?P<first>[^ ])\. ?(?P<middle>[^ ])\. (?P<last>[^ ]+)$',
	r'^(?P<first>[^ ]+) (?P<last>[^ ]+)$',
	r'^(?P<first>[^ ]+) (?P<last>[^ ]+) (?P<suffix>[SJ]r)\.?$',
	r'^(?P<first>[^ ]+) (?P<last>[^ ]+) (?P<suffix>X?(V?I{1,3})|I[VX])$',
	r'^(?P<first>[^ ]+) (?P<middle>[^ ])\. (?P<last>[^ ]+)$',
	r'^(?P<first>[^ ]+) (?P<last>(De )?((Los|Las|La|Santa) )?[^ ]+)$',
	r'^(?P<first>[^ ]+) ?(?P<middle>[^ ]+) (?P<last>[^ ]+)$',
	r'^$',
]

def clean(string, exotic=True):
	if type(string) is not str:
		return string
	result = ''
	for c in string:
		o = ord(c)
		if o < 32:
			pass
		elif o < 128:
			result += c
		elif exotic:
			result += '&#{};'.format(o)
	return result

def parse_name(name):
	for nf in name_formats:
		match = re.match(nf,name)
		if match:
			groupdict = match.groupdict()
			for part in ['first','middle','last','suffix']:
				groupdict.setdefault(part,u'')
				groupdict[part] = clean(groupdict[part])
			return dict([ (str(key), val) for key, val in groupdict.items() ])
	
	raise Exception('Cannot parse name: '+clean(name))

def subf(regex, repl, string):
	return re.sub(regex, lambda match: repl.format(*match.groups(), **match.groupdict()), string)

def expand_school(school):
	# school = school.replace('\bCol\b','College')
	school = re.sub(r'\bCol\b','College',school)
	school = re.sub(r'\bCC\b','Community College',school)
	school = re.sub(r'\bU\b','University',school)
	school = re.sub(r'^St\b','Saint',school)
	school = re.sub(r'\bSt\b','State',school)
	school = subf(r'(.*?) \((.*?)\)', "{1} {0}", school)
	return school

# def parse_name(name):
# 	first  = u''
# 	middle = u''
# 	last   = u''
# 	suffix = u''
# 	words = name.split(' ')
# 	if len(words) == 2:
# 		first = words[0]
# 		last = words[1]
# 	else:
# 		raise Exception('Cannot parse name: '+name)
# 	return (first, middle, last, suffix)

def parse_height(height):
	feet = 0
	inches = 0
	match = re.match(r'(\d+)\' (\d+)"', height)
	if match:
		feet, inches = match.groups()
	match = re.match(r'(\d+)-(\d+)', height)
	if match:
		feet, inches = match.groups()
	return int(feet) * 12 + int(inches)

def parse_appy_player(tr, team, position, unknown_jersey):
	player = {}
	# print tr
	tr_info = tr.find('td',{'class':'info'})
	if tr_info:
		# print tr

		player_name = tr_info.find(text=True,recursive=False).strip()
		# print player_name
		player.update(parse_name(player_name))

		jersey = tr.find('span',{'class':'jersey'}).text
		if jersey.isdigit():
			jersey = int(jersey)
		else:
			jersey = unknown_jersey['cur']
			unknown_jersey['cur'] += 1
		player['jersey'] = jersey

		player['bt'] = tr.find('td',{'class':'bat-throw'}).text

		player['height'] = parse_height(tr.find('td',{'class':'height'}).text)

		weight = tr.find('td',{'class':'weight'}).text
		weight = int(weight) if weight else 0
		player['weight'] = weight

		birthday = tr.find('td',{'class':'birthday'}).text
		if birthday:
			birthday = datetime.datetime.strptime(birthday,'%m/%d/%Y').date()
		else:
			birthday = datetime.datetime(1900,1,1).date()
		player['birthday'] = birthday

		player['school'] = tr.find('td',{'class':'status'}).text

		player['pos'] = position[0]

		player['team'] = team

		return player

def parse_milb_player(tr, team, position, unknown_jersey):
	player = {}
	# print tr
	tr_info = tr.find('td',{'class':'info'})
	if tr_info:
		# print tr_info.find('a')

		a = tr_info.find('a')
		player_name = a.find(text=True,recursive=False).strip()
		# print player_name
		player.update(parse_name(player_name))

		player['playerid'] = int(a['data-playerid'])
		
		jersey = tr.find('span',{'class':'jersey'}).text
		if jersey.isdigit():
			jersey = int(jersey)
		else:
			jersey = unknown_jersey['cur']
			unknown_jersey['cur'] += 1
		player['jersey'] = jersey

		player['bt'] = tr.find('td',{'class':'bat-throw'}).text

		player['height'] = parse_height(tr.find('td',{'class':'height'}).text)

		weight = tr.find('td',{'class':'weight'}).text
		weight = int(weight) if weight else 0
		player['weight'] = weight

		birthday = tr.find('td',{'class':'birthday'}).text
		if birthday:
			birthday = datetime.datetime.strptime(birthday,'%m/%d/%Y').date()
		else:
			birthday = datetime.datetime(1900,1,1).date()
		player['birthday'] = birthday

		player['status'] = tr.find('td',{'class':'status'}).text

		player['pos'] = position[0]

		player['team'] = team

		# print player
		# exit()
		return player

def parse_mlb_player(tr, team, position, unknown_jersey):
	player = {}
	# print tr
	tr_info = tr.find('td',{'class':'info'})
	if tr_info:
		# print tr_info.find('a')

		a = tr_info.find('a')
		player_name = a.find(text=True,recursive=False).strip()
		# print player_name
		player.update(parse_name(player_name))

		# player['playerid'] = int(a['data-playerid'])
		
		jersey = tr.find('span',{'class':'jersey'}).text
		if jersey.isdigit():
			jersey = int(jersey)
		else:
			jersey = unknown_jersey['cur']
			unknown_jersey['cur'] += 1
		player['jersey'] = jersey

		player['bt'] = tr.find('td',{'class':'bat-throw'}).text

		player['height'] = parse_height(tr.find('td',{'class':'height'}).text)

		weight = tr.find('td',{'class':'weight'}).text
		weight = int(weight) if weight else 0
		player['weight'] = weight

		birthday = tr.find('td',{'class':'birthday'}).text
		if birthday:
			birthday = datetime.datetime.strptime(birthday,'%m/%d/%Y').date()
		else:
			birthday = datetime.datetime(1900,1,1).date()
		player['birthday'] = birthday

		# player['status'] = tr.find('td',{'class':'status'}).text

		player['pos'] = position[0]

		player['team'] = team

		# print player
		# exit()
		return player
	# else:
	# 	print tr

grades = [None, 'Freshman', 'Sophomore', 'Junior', 'Senior']

def parse_necbl_player(tr, team, position, unknown_jersey):
	# print dir(list(tr.children)[1])
	player = {}
	stats = tr.findAll('td')
	if stats:
		match = re.match(r'.*?playerid=(\d+)',stats[1].find('a').attrs['href'])
		if match:
			player['playerid'] = int(match.groups()[0])
		player['pos'] = position[0]
		player['team'] = team
		player['jersey'] = int(stats[0].text)
		player.update(parse_name(stats[1].text))
		player['bt'] = stats[2].text
		player['height'] = parse_height(stats[3].text)
		player['weight'] = int(stats[4].text)
		player['school'] = expand_school(stats[5].text)
		grade = stats[6].text
		if grade in grades:
			player['grade'] = grades.index(grade)
		else:
			player['grade'] = 0

		hometown = stats[7].text
		hometown = list(hometown)
		hometown = filter(lambda c: ord(c) != 160, hometown)
		hometown = ''.join(hometown)
		hometown_regex = r'\w| |,|\.'
		# debug = list(hometown)
		# for c in debug:
		# 	if not re.match(hometown_regex, c):
		# 		k = ord(c)
		# 		if k != 160:
		# 			print k

		# hometown = ''.join(re.findall(hometown_regex,hometown))
		# print hometown
		if ',' in hometown:
			player['homecity'], player['homestate'] = hometown.split(',')
		else:
			player['homecity'] = hometown
			player['homestate'] = '  '
		# player['homestate'] = player['homestate']
		player['draftstatus'] = stats[8].text
		eligibility = stats[9].text
		if eligibility:
			player['eligibility'] = datetime.datetime.strptime(eligibility,'%b %d, %Y')
		else:
			player['eligibility'] = datetime.datetime.now()
		player = dict([ (str(key), clean(val)) for key,val in player.items() ])
		# exit()
		return player
		# print player
	# for child in tr.children:
	# 	print 


parse_player_functions = {
	'appy':parse_appy_player,
	'milb':parse_milb_player,
	'mlb':parse_mlb_player,
	'necbl':parse_necbl_player,
}