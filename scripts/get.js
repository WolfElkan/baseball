function sanitize(str) {
	return str.replace(/%20/g,' ')
	return str.replace(/\+/g,' ')
}

function getparams() {
	var search = window.location.search
	if (search[0] == '?') {search = search.substring(1)}
	if (!search) {return {}}
	var params = search.split('&')
	var object = {}
	for (var i = 0; i < params.length; i++) {
		let pair = params[i].split('=')
		let key = pair[0]
		let val = sanitize(pair[1])
		object[key] = val
	}
	return object
}

const GET = getparams()

function csv_to_object(data, newline='\n') {
	data = data.split(newline)
	// console.log(data[1])
	for (var r = 0; r < data.length; r++) {
		var line = data[r]
		if (line.substring(0,2) != '//') {
			line = line.split(',')
			data[r] = line
		}
	}
	headers = data[1]
	// console.log(headers)
	for (var r = 2; r < data.length; r++) {
		var row = {}
		for (var c = 0; c < data[r].length; c++) {
			row[headers[c]] = data[r][c]
		}
		data[r] = row
	}
	return data
}
