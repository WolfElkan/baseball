def update(filename):
	with open(filename + '.js', 'w') as wfile, open(filename, 'r') as rfile:
		var = filename.replace('.','_')
		var = var.split('/')[-1]
		wfile.write('const {} = `\n'.format(var))
		wfile.write(rfile.read())
		wfile.write('`')

update('html/components/scoreboard.html')
update('html/components/lineup.html')
update('html/components/diagram.html')

def specialize(league):
	prefix = 'html/templates/'
	with open(prefix + league + '.html', 'w') as wfile, open(prefix + 'standard.html', 'r') as rfile:
		content = rfile.read()
		content = content.replace('{{league}}',league)
		leaguedot = league.replace('_','.')
		content = content.replace('{{leaguedot}}',leaguedot)
		wfile.write(content)

leagues = [
	'mlb',
	'milb_aa_eastern',
	'necbl',
	'appy',
]

for league in leagues:
	specialize(league)



update('rosters/appy.csv')
update('rosters/milb_aa_eastern.csv')
update('rosters/mlb.csv')
update('rosters/necbl.csv')
