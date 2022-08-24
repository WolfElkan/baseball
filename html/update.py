def update(filename):
	with open(filename + '.js', 'w') as wfile, open(filename, 'r') as rfile:
		wfile.write('const {} = `'.format(filename.replace('.','_')))
		wfile.write(rfile.read())
		wfile.write('`')

update('scoreboard.html')
update('lineup.html')
update('diagram.html')
