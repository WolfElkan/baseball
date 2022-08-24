function type(obj) {
	if (obj || obj === false) {
		return obj.__proto__.constructor
	} else {
		return obj
	}
}

var en_US = {
	'week_days':['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
	'a_len':3,
	'year_months':['January','February','March','April','May','June','July','August','September','October','November','December'],
	'b_len':3,
	'meridiens':['AM','PM'],
}

var locale = en_US

function pad(num, len=2, space='0') {
	num = String(num)
	while (num.length < len) {
		num = space + num
	}
	return num
}

var C89 = {
	'a':(date) => {
		return C89.A(date).substr(0,locale.a_len)
	},
	'A':(date) => {
		return locale.week_days[date.getDay()]
	},
	'b':(date) => {
		return C89.B(date).substr(0,locale.b_len)
	},
	'B':(date) => {
		return locale.year_months[date.getMonth()]
	},
	'c':'%a %b %e %H:%M:%S %Y',
	'_C':(date) => {
		return Math.floor(C89._Y(date) / 100)
	},
	'C':(date) => {
		return pad(C89._C(date))
	},
	'_d':(date) => {
		return date.getDate()
	},
	'd':(date) => {
		return pad(C89._d(date))
	},
	'D':'%m/%d/%y',
	'e':(date) => {
		return pad(C89._d(date), 2, ' ')
	},
	'_f':(date) => {
		return date.getMilliseconds() * 1000
	},
	'f':(date) => {
		return pad(C89._f(date), 6)
	},
	'F':'%Y-%m-%d',
	'h':'%b',
	'_H':(date) => {
		return date.getHours()
	},
	'H':(date) => {
		return pad(C89._H(date))
	},
	'_I':(date) => {
		var hours = date.getHours()
		hours %= 12
		if (hours == 0) {hours = 12}
		return hours
	},
	'I':(date) => {
		return pad(C89._I(date))
	},
	'_j':(date) => {
		jan0 = new Date(date.valueOf())
		jan0.setMonth(0,0)
		result = date.valueOf() - jan0.valueOf()
		result /= 86400000
		result = Math.round(result)
		return result
	},
	'j':(date) => {
		return pad(C89._j(date), 3)
	},
	'k':(date) => {
		return pad(C89._H(date), 2, ' ')
	},
	'l':(date) => {
		return pad(C89._I(date), 2, ' ')
	},
	'_m':(date) => {
		return date.getMonth() + 1
	},
	'm':(date) => {
		return pad(C89._m(date))
	},
	'_M':(date) => {
		return date.getMinutes()
	},
	'M':(date) => {
		return pad(C89._M(date))
	},
	'n':'\n',
	'_p':(date) => {
		return date.getHours() >= 12 ? 1 : 0
		// return Number(date.getHours() >= 12)
	},	
	'p':(date) => {
		return locale.meridiens[C89._p(date)]
	},
	'r':'%I:%M:%S %p',
	'R':'%H:%M',
	's':(date) => {
		return Math.floor(date.valueOf() / 1000)
	},
	'_S':(date) => {
		return date.getSeconds()
	},
	'S':(date) => {
		return pad(C89._S(date))
	},
	't':'\t',
	'T':'%H:%M:%S',
	'u':(date) => {
		result = C89._w(date)
		if (result == 0) {
			result = 7
		}
		return result
	},
	'_U':(date) => {
		var w = C89._w(date)
		var j = C89._j(date)
		return Math.ceil((j-w)/7)
	},
	'U':(date) => {
		return pad(C89._U(date))
	},
	'v':'%e-%b-%Y',
	'_W':(date) => {
		var U = C89._U(date)
		var w = C89._w(date)
		if (w <= 0) {
			U += 1
		}
		return U
	},
	'W':(date) => {
		return pad(C89._W(date))
	},
	'_w':(date) => {
		return date.getDay()
	},
	'w':(date) => {
		return pad(C89._w(date), 1)
	},
	'x':'%m/%d/%y',
	'X':'%H:%M:%S',
	'_y':(date) => {
		return date.getYear() % 100
	},
	'y':(date) => {
		return pad(C89._y(date))
	},
	'_Y':(date) => {
		return date.getFullYear()
	},
	'Y':(date) => {
		return pad(C89._Y(date), 4)
	},
	'z':(date) => {
		let tz = date.getTimezoneOffset()
		let sign = '-'
		if (tz < 0) {
			tz *= -1
			sign = '+'
		}
		let tz_h = Math.floor(tz/60)
		let tz_m = Math.floor(tz%60)
		result = sign + pad(tz_h) + pad(tz_m)
		if (tz % 1 != 0) {
			let tz_s = (tz * 60) % 60
			result += pad(Math.round(tz_s))
			if (tz_s % 1 != 0) {
				let tz_f = (tz_s * 1000000) % 1000000
				tz_f = Math.round(tz_f)
				result += '.'
				result += pad(tz_f, 6)
			}
		}
		return result
	},
	'Z':(date) => {
		result = String(date)
		result = result.substr(34)
		result = result.replace(/[^A-Z]/g,'')
		return result
	},
}

// function strftime(date, format) {
// 	result = format
// 	result = result.replace(/%[cxXDnF]/g, (match, offset) => {
// 		return C89[match[1]]
// 	})
// 	result = result.replace(/%-[wdmYHIpMSfjUW]/g, (match, offset) => {
// 		return C89['_'+match[2]](date)
// 	})
// 	result = result.replace(/%[aAwdbBmyYHIpMSfzZjUWuCe%]/g, (match, offset) => {
// 		return C89[match[1]](date)
// 	})
// 	result = result.replace('%','')
// 	return result
// }

function strftime(date, format) {
	result = format
	result = result.replace(/%[a-zA-Z]/g, (match, offset) => {
		code = locale[match[1]]
		return type(code) == String ? code : match
	})
	result = result.replace(/%[a-zA-Z]/g, (match, offset) => {
		code = C89[match[1]]
		return type(code) == String ? code : match
	})
	result = result.replace(/%-[a-zA-Z]/g, (match, offset) => {
		code = C89['_'+match[2]]
		return code ? code(date) : match
	})
	result = result.replace(/%[a-zA-Z]/g, (match, offset) => {
		code = C89[match[1]]
		return code ? code(date) : match
	})
	result = result.replace(/%[a-zA-Z%]/g, (match, offset) => {
		return match[1]
	})
	return result
}