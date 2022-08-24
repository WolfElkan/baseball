asciified = {
	225:'a', 
	233:'e',
	237:'i',
	241:'n',
	243:'o',
	250:'u',
	161:'!',
	162:'c',
	163:'GBP$',
	165:'Y=',
	166:'|',
}

singles = {
	0xC6:'AE',
	0xE6:'ae',
	0xC7:'C',
	0xE7:'c',
	0xD0:'D',
	0xF0:'6',
	0xD1:'N',
	0xF1:'n',
	0xD7:'*',
	0xF7:'/',
	0xDD:'Y',
	0xFD:'y',
	0xFF:'y',
	 306:'IJ',
	 307:'ij',
	 308:'J',
	 309:'j',
	 310:'K',
	 311:'k',
	 312:'K',
	 329:"'n",
	 330:"Ng",
	 331:"ng",
	 338:"OE",
	 339:"oe",
}

ranges = [
	(0xC0,0xC5,'A'),
	(0xC8,0xCB,'E'),
	(0xCC,0xCF,'I'),
	(0xD2,0xD8,'O'),
	(0xD9,0xDC,'U'),
	(0xE0,0xE5,'a'),
	(0xE8,0xEB,'e'),
	(0xEC,0xEF,'i'),
	(0xF2,0xF8,'o'),
	(0xF9,0xFC,'u'),
]

doubles = [
	(0x100,0x105,'A','a'),
	(0x106,0x10D,'C','c'),
	(0x10E,0x111,'D','d'),
	(0x112,0x11B,'E','e'),
	(0x11C,0x123,'G','g'),
	(0x124,0x127,'H','h'),
	(0x128,0x131,'I','i'),
	(0x139,0x142,'l','L'),
	(0x143,0x148,'n','N'),
	(0x14C,0x151,'O','o'),
]

def from_ord(num, safe=False):
	if 32 < num < 127:
		return chr(num)
	if num in singles:
		return singles[num]
	for start, end, char in ranges:
		if start <= num <= end:
			return char
	for start, end, even, odd in doubles:
		if start <= num <= end:
			return odd if num % 2 else even
	if not safe:
		num = hex(num)[2:].upper()
		while len(num) < 4:
			num = '0' + num
		raise Warning('No ASCII equivalent defined for U+'+num)

# for row in range(0x52):
# for row in range(30):
# 	for col in range(16):
# 		o = row * 16 + col
# 		a = from_ord(o, safe=True)
# 		if a:
# 			print '{:3}'.format(a),
# 		else:
# 			print '   ',
# 	print


def asciify(string):
	return ''.join([ from_ord(ord(c)) for c in string ])




