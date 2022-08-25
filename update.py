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

# update('rosters/appy.csv')
# update('rosters/milb_aa_eastern.csv')
# update('rosters/mlb.csv')
# update('rosters/necbl.csv')
